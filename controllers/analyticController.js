const urlModel = require("../models/urlModel");

const getAnalytic = async (req, res) => {
  const shortId = req.params.shortId;
  const result = await urlModel.findOne({ shortId });
  return res.send(result);
};

module.exports = {
  getAnalytic,
};
