const express = require("express");
require("./services/passport");
const { mongoURI } = require("./config/keys");
const mongoose = require("mongoose");

mongoose.connect(mongoURI);

const app = express();
const PORT = 5000;

//  passport auth

//  route handlers
require("./routes/authRoutes")(app);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
