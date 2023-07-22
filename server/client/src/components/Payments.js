import React from "react";

import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from "../actions";

const Payments = ({ handleToken }) => {
  return (
    <StripeCheckout
      name="Emaily"
      description="$5 for 5 email credits"
      amount={500}
      token={(token) => handleToken(token)}
      stripeKey={
        process.env.REACT_APP_STRIPE_KEY ||
        "pk_test_51NVHvcIK5vxPgzzPSkrOgH4Z27e64VNtVfaYLuv4tnLJ8XXiMmi7MJts8B7nrC7iuWazY3gTqs5kpxLFmu4qQyM000fpOucpKl"
      }
    >
      <div className="btn">Add Credits</div>
    </StripeCheckout>
  );
};

export default connect(null, actions)(Payments);
