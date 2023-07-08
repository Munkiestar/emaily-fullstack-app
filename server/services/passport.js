const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const { googleClientID, googleClientSecret } = require("../config/keys");

const mongoose = require("mongoose");
const User = mongoose.model("users");

passport.use(
  new GoogleStrategy(
    {
      clientID: googleClientID,
      clientSecret: googleClientSecret,
      callbackURL: "/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      new User({ googleId: profile.id }).save();
    }
  )
);
