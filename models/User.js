const mongoose = require("../db/connection");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt-nodejs");

const User = new Schema({
  email: String,
  username: String, 
  password: String,
  intentions: [
    {
      type: Schema.Types.ObjectId,
      ref: "Intention"
    }
  ],
  likes_count: Number
});

User.methods.encrypt = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

User.methods.validPassword = function(password) {
  // removed local from local.password
  return bcrypt.compareSync(password, this.password);
};


module.exports = mongoose.model("User", User);
