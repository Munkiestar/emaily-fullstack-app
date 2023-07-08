const express = require("express");
require("./services/passport");

const app = express();
const PORT = 5000;

//  passport auth

//  route handlers
require("./routes/authRoutes")(app);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
