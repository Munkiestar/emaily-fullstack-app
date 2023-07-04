const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const { googleClientID, googleClientSecret } = require("./config/keys");

const app = express();
const PORT = 5000;
console.log("app: ", app);

//  passport auth
passport.use(
  new GoogleStrategy(
    {
      clientID: googleClientID,
      clientSecret: googleClientSecret,
      callbackURL: "/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      console.log("accessToken: ", accessToken);
      console.log("refreshToken: ", refreshToken);
      console.log("profile: ", profile);
      // console.log("done: ", done);
    }
  )
);

//  route handlers
app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

app.get("/auth/google/callback", passport.authenticate("google"));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
