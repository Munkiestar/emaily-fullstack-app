const mongoose = require("mongoose");
const { Schema } = mongoose;

const RecipientSchema = require("./Recipient");

const surveySchema = new Schema({
  title: String,
  subject: String,
  recipients: [RecipientSchema],
  body: String,
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 },
});

mongoose.model("surveys", surveySchema);
