const express = require("express");
const {
  staticHome,
  staticSignUp,
  staticSignIn,
} = require("../controllers/staticController");
const staticRouter = express.Router();

staticRouter.get("/", staticHome);
staticRouter.route("/signup").get(staticSignUp);
staticRouter.route("/signin").get(staticSignIn);

module.exports = staticRouter;
