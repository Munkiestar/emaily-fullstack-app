const express = require("express");
const { mongoURI, cookieKey } = require("./config/keys");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");

// executing files
require("./models/User");
require("./models/Survey");
require("./services/passport");

const PORT = 5000;

// connect to db
mongoose.connect(mongoURI);

const app = express();

app.use(bodyParser.json());
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
require("./routes/billingRoutes")(app);
require("./routes/surveyRoutes")(app);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
