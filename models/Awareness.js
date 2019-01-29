//Awareness post: User makes a post of 5 things you can see, 4 things you can touch, 3 things you can hear, 2 things you can smell, 1 thing you can touch

const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Comment = new Schema({
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

const Awareness = new Schema({
content: String, 
createdAt: {
type: Date,
default: Date.now()
},
// likes_count: Number,
author: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
comments: [Comment]
});


module.exports = { 
    Awareness: mongoose.model("Awareness", Awareness),
    Comment: mongoose.model("Comment", Comment)
}