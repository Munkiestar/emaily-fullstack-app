// mongoose model class
const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  name: String,
});

// first arg: collection name
mongoose.model("users", userSchema);
