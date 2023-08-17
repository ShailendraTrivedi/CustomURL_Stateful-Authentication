const express = require("express");
const { userToURL } = require("../controllers/renderController");
const { restrictToLoggedInUserOnly } = require("../middlewares/authMiddle");
const renderRouter = express.Router();

renderRouter.get("/:shortId", userToURL);

module.exports = renderRouter;
