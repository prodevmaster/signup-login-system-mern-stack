const User = require("../models/user");

const checkUser = async (req, res, next) => {
  const body = req.body;
  const id = req.session.isLoggedIn;
  try {
    if (!id && !body.email) {
      res.sendStatus(200);
    } else if (!id) {
      next();
    } else {
      const user = await User.findById(id);
      res.status(200).send(user);
    }
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
};

module.exports = { checkUser };
