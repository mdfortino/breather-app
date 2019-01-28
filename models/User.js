const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const User = new Schema({
  email: String,
  password: String,
  content: [
    {
      type: Schema.Types.ObjectId,
      ref: "Awareness"
    }
  ]
});

module.exports = mongoose.model("User", User);
