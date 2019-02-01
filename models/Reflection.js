const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Timer = require('easytimer.js').Timer;
const timerInstance = new Schema();
// const Answer = new Schema({
//     content: String,
//     createdAt: {
//       type: Date,
//       default: Date.now()
//     },
//     author: {
//       type: Schema.Types.ObjectId,
//       ref: "User"
//     }
//   });
  
//   const Like = new Schema({
//     likes_count: Number,
//     createdAt: {
//       type: Date,
//       default: Date.now()
//     },
//     author: {
//       type: Schema.Types.ObjectId,
//       ref: "User"
//     }
  
//   })
//reflection will be a list of reflections or meditations 
  const Reflection = new Schema({
    content: String, 
    // createdAt: {
    //   type: Date,
    //   default: Date.now()
    // },
    // author: {
    //   type: Schema.Types.ObjectId,
    //   ref: "User"
    // },
    // answers: [Answer],
    // likes: [Like]
  });
  
  module.exports = {
    Reflection: mongoose.model("Reflection", Reflection),
  };
  