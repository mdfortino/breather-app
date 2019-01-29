const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/BE")

mongoose.Promise = Promise

module.exports = mongoose
