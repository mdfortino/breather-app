const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

//reflection will be a list of reflections or meditations 
  const Reflection = new Schema({
    content: String, 
    createdAt: {
      type: Date,
      default: Date.now()
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
  });
  
  module.exports = {
    Reflection: mongoose.model("Reflection", Reflection),
  };
  