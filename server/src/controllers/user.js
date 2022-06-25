const User = require("../models/user");

const signup = async (req, res) => {
  const body = req.body;
  try {
    const user = await User.create(body);
    req.session.isLoggedIn = user._id;
    res.status(201).send(user);
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    req.session.isLoggedIn = user._id;
    res.status(200).send(user);
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
};

const logout = async (req, res) => {
  try {
    req.session.destroy((e) => {
      if (e) throw Error("cannot logout");
    });
    res.clearCookie("isLoggedIn");
    res.sendStatus(200);
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
};

module.exports = { signup, login, logout };
