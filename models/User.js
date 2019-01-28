const mongoose = require("../db/connection")
const Schema = mongoose.Schema;

const User = new Schema({
    email: String,
    password: String,
    //post options are: Awareness or Gratitude
    posts: [
        {
            type: Schema.Type.ObjectId,
            ref: "Post"
        }
    ]
});

module.exports = mongoose.model("User", User);