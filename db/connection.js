const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/stackstyle")

mongoose.Promise = Promise

module.exports = mongoose
