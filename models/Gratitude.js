//Gratitude post: User makes post of what they're grateful for
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

const Gratitude = new Schema({
content: String, 
createdAt: {
type: Date,
default: Date.now()
},
likes_count: Number,
author: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
comment: [Comment]
});


module.exports = { 
    Gratitude: mongoose.model("Gratitude", Gratitude),
    Comment: mongoose.model("Comment", Comment)
}