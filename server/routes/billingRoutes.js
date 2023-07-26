const { stripeSecretKey } = require("../config/keys");

const stripe = require("stripe")(stripeSecretKey);

console.log("stripekey: ", stripe);

module.exports = (app) => {
  // create billing i.e. credit card charge
  app.post("/api/stripe", async (req, res) => {
    // console.log("req.body: ", req.body);
    const { id } = req?.body;

    const charge = await stripe.charges.create({
      amount: 500,
      currency: "usd",
      description: "$5 for 5 Credits",
      source: id,
    });

    // console.log("charge: ", charge);
  });
};
