const { stripeSecretKey } = require("../config/keys");

const stripe = require("stripe")(stripeSecretKey);

// middleware
const requireLogin = require("../../server/middlewares/requireLogin");

module.exports = (app) => {
  // create billing i.e. credit card charge
  app.post("/api/stripe", requireLogin, async (req, res) => {
    // console.log("req.body: ", req.body);
    const { id } = req?.body;

    const charge = await stripe.charges.create({
      amount: 500,
      currency: "usd",
      description: "$5 for 5 Credits",
      source: id,
    });

    // console.log("charge: ", charge);
    if (charge.status !== "succeeded")
      return res.status(402).json({ error: "Payment failed" });

    // access to user and add credit
    req.user.credits += 5;
    const user = await req.user.save();

    // send data to browser
    res.send(user);
  });
};
