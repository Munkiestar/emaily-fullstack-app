const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const { googleClientID, googleClientSecret } = require("../config/keys");

const mongoose = require("mongoose");
const User = mongoose.model("users");

// serialize & deserialize - communication between browser (user) and Mongo DB
// user id from mongo db
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// search user by id in DB
passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  await done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: googleClientID,
      clientSecret: googleClientSecret,
      callbackURL: "/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      // check if user exists with given profile ID
      const existingUser = await User.findOne({ googleId: profile.id });
      console.log("existingUser: ", existingUser);
      if (!existingUser) {
        // save new user to db
        // create new instance
        const newUser = await new User({ googleId: profile.id }).save();
        return await done(null, newUser);
      }
      // tell passport to continue
      // first arg: err -- sec arg: user record
      await done(null, existingUser);
    }
  )
);
