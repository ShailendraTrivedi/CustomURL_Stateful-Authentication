const urlModel = require("../models/urlModel");

const userToURL = async (req, res) => {
  const { shortId: shortId } = req.params;
  try {
    const result = await urlModel.findOneAndUpdate(
      { shortId: shortId },
      {
        $push: {
          visitHistory: {
            timeStamp: Date.now(),
            ipAddress: req.ip,
          },
        },
      },
      { new: true }
    );

    if (!result) {
      return res.status(404).send({ error: "Short URL not found" });
    }

    res.redirect(result.redirectURL);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Server error" });
  }
};

module.exports = {
  userToURL,
};
