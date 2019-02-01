const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Answer = new Schema({
  content: String,
  createdAt: {
    type: Date,
    default: Date.now()
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});

const Intention = new Schema({
  content: String, 
  createdAt: {
    type: Date,
    default: Date.now()
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  answers: [Answer],
});

module.exports = {
  Intention: mongoose.model("Intention", Intention),
  Answer: mongoose.model("Answer", Answer),
  
};
