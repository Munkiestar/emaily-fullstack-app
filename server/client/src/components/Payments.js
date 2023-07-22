import React from "react";

import StripeCheckout from "react-stripe-checkout";

const Payments = () => {
  return (
    <StripeCheckout
      amount={500}
      token={(token) => console.log("token:", token)}
      stripeKey={
        process.env.REACT_APP_STRIPE_KEY ||
        "pk_test_51NVHvcIK5vxPgzzPSkrOgH4Z27e64VNtVfaYLuv4tnLJ8XXiMmi7MJts8B7nrC7iuWazY3gTqs5kpxLFmu4qQyM000fpOucpKl"
      }
    />
  );
};

export default Payments;
