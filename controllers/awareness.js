const {Awareness, Comment} = require("../models/Awareness")
const User = require("../models/User")

module.exports = {
    show: (req, res) => {
      Awareness.findOne({ _id: req.params.id })
      .populate("author")
      .exec(function(err, awareness) {
        Comment.populate(awareness.comments, { path: "author" }, function(
          err,
          comments
        ) {
          awareness.comments = comments
          res.render("awareness/show", awareness)
        })
      })
  },
    new: (req, res) => {
      User.find({}).then(users => {
        res.render("awareness/new", { users })
      })
    },
    create: (req, res) => {
      console.log('body', req.body)
      Awareness.create({
        content: req.body.awareness.content,
        author: req.body.author
      }).then(awareness => {
        console.log('awareness ', awareness)
        User.findOne({ _id: req.body.author }).then(user => {
          user.awarenesss.push(awareness)
          user.save(result => {
            console.log(result)
            res.redirect(`/awareness/${awareness._id}`)
          })
        })
      })
    },
    update: (req, res) => {
      console.log('body', req.body)
      let { content, author } = req.body;
      Awareness.findOne({ _id: req.params.id }).then(awareness => {
        awareness.comments.push({
          content,
          author
        });
        awareness.save(err => {
          res.redirect(`/awareness/${awareness._id}`);
        });
      });
    },
    delete: (req, res) => {
      Awareness.findOneAndRemove({ _id: req.params.id }).then(awareness => {
        res.redirect('/')
      });
    },
}
//   requireAuth: function(req, res, next) {
//     if (req.isAuthenticated()) {
//       next();
//     } else {
//       res.redirect("/");
//     }
//   }
// };

