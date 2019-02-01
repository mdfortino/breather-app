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

// const Like = new Schema({
//   likes_count: Number,
//   createdAt: {
//     type: Date,
//     default: Date.now()
//   },
//   author: {
//     type: Schema.Types.ObjectId,
//     ref: "User"
//   }

// })
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
  // likes: [Like]
});

module.exports = {
  Intention: mongoose.model("Intention", Intention),
  Answer: mongoose.model("Answer", Answer),
  // Like: mongoose.model("Like", Like)
};
