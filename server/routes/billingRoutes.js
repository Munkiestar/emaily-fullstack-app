const { stripeSecretKey } = require("../config/keys");

const stripe = require("stripe")(stripeSecretKey);

console.log("stripekey: ", stripe);

module.exports = (app) => {
  app.post("/api/stripe", (req, res) => {});
};
