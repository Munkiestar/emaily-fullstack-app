if (process.env.NODE_ENV === "production") {
  // return prod keys
  module.exports = require("./prod");
} else {
  // we are in development - dev keys
  module.exports = require("./dev");
}
