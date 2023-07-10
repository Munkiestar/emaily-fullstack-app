const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const { googleClientID, googleClientSecret } = require("../config/keys");

const mongoose = require("mongoose");
const User = mongoose.model("users");
console.log("USER: ", User);

passport.use(
  new GoogleStrategy(
    {
      clientID: googleClientID,
      clientSecret: googleClientSecret,
      callbackURL: "/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      const user = await User.findOne({ googleId: profile.id });
      console.log("user: ", user);
      // check if user exists with given profile ID
      // save new user to db
      if (!user) new User({ googleId: profile.id }).save();
    }
  )
);
