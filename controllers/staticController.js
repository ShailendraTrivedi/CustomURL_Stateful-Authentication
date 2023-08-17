const urlModel = require("../models/urlModel");

const staticHome = async (req, res) => {
  try {
    if (!req.user) return res.redirect("/signin");
    const allurl = await urlModel.find({ createdBy: req.user._id });
    return res.render("home", {
      allurl: allurl,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send("An error occurred.");
  }
};

const staticSignUp = (req, res) => {
  return res.render("signup");
};
const staticSignIn = (req, res) => {
  return res.render("signin");
};

module.exports = { staticHome, staticSignUp, staticSignIn };
