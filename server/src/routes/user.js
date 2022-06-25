const { Router } = require("express");
const { checkUser } = require("../middlewares/user-auth");
const { signup, login, logout } = require("../controllers/user");
const router = Router();

router.post("/signup", signup);
router.post("/login", checkUser, login);
router.get("/logout", logout);

module.exports = router;
