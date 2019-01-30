// a controller is just an object of methods(called actions)
//the following shows the list of intentions, sorted by date...perhaps sort by number of liks or something else?
const { Intention } = require("../models/Intention")
module.exports = {
    index: (req, res) => {
      Intention.find({})
      .sort({ createdAt: -1 })
      .limit(10)
      .populate("author")
      .then(intentions => {
        res.render("app/index", { intentions });
      })
    }
  };
