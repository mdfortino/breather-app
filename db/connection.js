const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/54321BE")

mongoose.Promise = Promise

module.exports = mongoose
