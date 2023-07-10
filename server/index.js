const express = require("express");
const { mongoURI, cookieKey } = require("./config/keys");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");

// executing files
require("./models/User");
require("./services/passport");

const PORT = 5000;

// connect to db
mongoose.connect(mongoURI);

const app = express();
app.use(
  cookieSession({
    // 30 days
    maxAge: 30 * 60 * 60 * 24 * 1000,
    keys: [cookieKey],
  })
);

// tell passport to use cookies for auth
app.use(passport.initialize());
app.use(passport.session());

//  route handlers
require("./routes/authRoutes")(app);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
