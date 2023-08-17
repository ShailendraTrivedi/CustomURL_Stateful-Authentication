const express = require("express");
const { generateNewShortURL } = require("../controllers/urlController");
const urlRouter = express.Router();

urlRouter.route("/").post(generateNewShortURL);

module.exports = urlRouter;
