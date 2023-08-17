const { Router } = require("express");
const {
  handleUserSignUp,
  handleUserSignIn,
} = require("../controllers/userController");

const userRouter = Router();

userRouter.route("/signup").post(handleUserSignUp);

userRouter.route("/signin").post(handleUserSignIn);

module.exports = userRouter;
