const requireLogin = require("../middlewares/requireLogin");

module.exports = (app) => {
  app.post("/api/surveys", requireLogin, (req, res) => {
    // first make sure that user is logged in
    // second check if user has enough money to send a survery
  });
};
