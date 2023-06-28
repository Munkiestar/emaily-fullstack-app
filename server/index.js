const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const { googleClientID, googleClientSecret } = require("./config/keys");

const app = express();
const PORT = 5000;
console.log("app: ", app);

//  route handlers

//  passport auth
passport.use(
  new GoogleStrategy(
    {
      clientID: googleClientID,
      clientSecret: googleClientSecret,
      callbackURL: "/auth/google/callback",
    },
    (accessToken) => {
      console.log("accessToken: ", accessToken);
    }
  )
);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
