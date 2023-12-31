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
  _user: { type: Schema.Types.ObjectId, ref: "User" },
  dateSend: Date,
  lastResponded: Date,
});

mongoose.model("surveys", surveySchema);
