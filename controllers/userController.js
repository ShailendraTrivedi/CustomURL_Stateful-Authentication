const userModel = require("../models/userModel");
const { v4: uuidv4 } = require("uuid");
const { setUser } = require("../services/auth");
const handleUserSignUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (name && email && password) {
      const result = await userModel.create({
        name: name,
        email: email,
        password: password,
      });
      if (result) {
        return res.redirect("/signin");
      }
    } else {
      return res.redirect("/signup");
    }
  } catch (error) {
    return res.send({ error: "Something went wrong !!!" });
  }
};

const handleUserSignIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const validUser = await userModel.findOne({
      email: email,
      password: password, 
    });
    if (validUser) {
      const uid = uuidv4();
      setUser(uid, validUser);
      res.cookie("uid", uid);
      return res.redirect("/");
    } else {
      return res.redirect("/signin");
    }
  } catch (error) {
    return res.send({ error: "Something went wrong !!!" });
  }
};

module.exports = {
  handleUserSignUp,
  handleUserSignIn,
};
