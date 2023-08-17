const { v4: uuidv4 } = require("uuid");
const urlModel = require("../models/urlModel.js");

const generateShortUUID = () => {
  const fullUUID = uuidv4();
  const shortUUID = fullUUID.replace(/-/g, "").substring(0, 8);
  return shortUUID;
};

const generateNewShortURL = async (req, res) => {
  try {
    const redirectURL = req.body.url;
    if (!redirectURL) {
      return res.status(400).send({ error: "URL is Required !!!" });
    }
    const shortId = generateShortUUID();
    const result = await urlModel.create({
      shortId: shortId,
      redirectURL: redirectURL,
      visitHistory: [],
      createdBy: req.user._id,
    });
    console.log("Result =", result);
    if (result) {
      return res.render("home", {
        shortId: shortId,
      });
    }
  } catch (error) {
    return res.send({ err: "Alreay Shortend !!!", error });
  }
};

module.exports = {
  generateNewShortURL,
};
