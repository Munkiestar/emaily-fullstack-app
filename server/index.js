const express = require("express");
const { mongoURI } = require("./config/keys");
const mongoose = require("mongoose");

// executing files
require("./services/passport");
require("./models/User");

// connect to db
mongoose.connect(mongoURI);

const app = express();
const PORT = 5000;

//  passport auth

//  route handlers
require("./routes/authRoutes")(app);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
