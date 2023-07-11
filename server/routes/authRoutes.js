const passport = require("passport");

module.exports = (app) => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );

  app.get("/auth/google/callback", passport.authenticate("google"));

  // log out
  app.get("/api/logout", (req, res) => {
    req.logout();
    res.send(req.user);
  });

  // show user data
  app.get("/api/current_user", (req, res) => {
    console.log("req-user: ", req);
    res.send(req.user);
  });
};
// munkie-prod
// AOc3YoR5ITybTR7J
// mongodb+srv://munkie-prod:<password>@emailyprod.fs12cgj.mongodb.net/?retryWrites=true&w=majority

// google api
// Client ID
//871264525946-89i3b31uukqs9aind5e2ge0adhg81mt1.apps.googleusercontent.com
// Client secret
//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
