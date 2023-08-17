const mongoose = require("mongoose");

const dbConfig = async (url) => {
  return mongoose.connect(url);
};

module.exports = {
  dbConfig,
};
