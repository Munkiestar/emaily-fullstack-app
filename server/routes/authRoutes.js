const passport = require("passport");

module.exports = (app) => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      res.redirect("/surveys");
    }
  );

  // log out
  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  // show user data
  app.get("/api/current_user", (req, res) => {
    console.log("req-user: ", req);
    res.send(req.user);
  });
};
