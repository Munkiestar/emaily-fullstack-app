const requireLogin = require("../middlewares/requireLogin");
const checkCredit = require("../middlewares/checkCredit");

module.exports = (app) => {
  // first make sure that user is logged in
  // second check if user has enough money to send a survey
  app.post("/api/surveys", requireLogin, checkCredit, (req, res) => {});
};
