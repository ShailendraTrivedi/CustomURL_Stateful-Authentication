const express = require("express");
const { getAnalytic } = require("../controllers/analyticController");

const analyticRouter = express.Router();

analyticRouter.route("/:shortId").get(getAnalytic);

module.exports = analyticRouter;
