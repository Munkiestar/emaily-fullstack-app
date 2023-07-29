const requireLogin = require("../middlewares/requireLogin");
const checkCredit = require("../middlewares/checkCredit");
const mongoose = require("mongoose");

const Survey = mongoose.model("surveys");

module.exports = (app) => {
  // first make sure that user is logged in
  // second check if user has enough money to send a survey
  app.post("/api/surveys", requireLogin, checkCredit, (req, res) => {
    const { title, subject, body, recipients } = req.body;
    const { id } = req.user;

    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients.split(",").map((email) => ({
        email: email.trim(),
      })),
      _user: id,
      dateSent: Date.now(),
    });
  });
};
