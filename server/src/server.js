const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const session = require("express-session");
const MongooseConnect = require("connect-mongodb-session")(session);
const routes = require("./routes/user");
const app = express();
// Define the vars
require("dotenv").config();
const DB_URL = process.env.DB_URL;
const PORT = process.env.PORT || 3001;
const store = new MongooseConnect({
  uri: DB_URL,
  collection: "sessions",
});
// use the modules
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(
  session({
    name: "isLoggedIn",
    secret: "authapp",
    saveUninitialized: false,
    resave: false,
    store,
  })
);
app.use(routes);

mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("database connected!");
    app.listen(PORT);
  })
  .catch((e) => {
    console.log("cannot connect to the database");
    console.log(e.message);
  });
