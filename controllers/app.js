const { Awareness } = require("../models/Awareness");
// const { Gratitude } = require("../models/Gratitude");

module.exports = {
    index: (req, res) => {
      Awareness.find({})
        .sort({ createdAt: -1 })
        .limit(10)
        .populate("author")
        .then(awarenessPosts => {
          res.render("app/index", { awarenessPosts });
        });
    }
  };
  

// module.exports = {
//   index: (req, res) => {
//     Awareness.find({})
//     //sort by date descending order
//       .sort({ createdAt: -1 })
//       .limit(10)
//       .populate("author")
//       .then(awarenessPosts => {
//         res.render("app/index", { awarenessPosts });
//       })
    //   Gratitude.find({})
    //   //sort by number of likes descending order
    //   .sort({ likes_count: -1 })
    //   .limit(10)
    //   .populate("author")
    //   .then(gratitudePosts => {
    //     res.render("app/index", { gratitudePosts });
    //   });
//     }
// };
     
       

  