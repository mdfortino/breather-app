const {Intention, Answer, Like} = require("../models/Intention")
const User = require("../models/User")

module.exports = {
  show: (req, res) => {
    Intention.findOne({ _id: req.params.id })
    .populate("author")
    .exec(function(err, intention) {
      Answer.populate(intention.answers, { path: "author" }, function(
        err,
        answers,
        
      ) {
        intention.answers = answers
        res.render("intention/show", intention)

      })
    })
},
    new: (req, res) => {
      User.find({}).then(users => {
        res.render("intention/new", { users })
      })
    },
    create: (req, res) => {
      console.log('body', req.body)
      Intention.create({
        content: req.body.intention.content,
        author: req.body.author
      }).then(intention => {
        console.log('intention ', intention)
        User.findOne({ _id: req.body.author }).then(user => {
          user.intentions.push(intention)
          user.save(result => {
            console.log(result)
            res.redirect(`/intention/${intention._id}`)
          })
        })
      })
    },
    update: (req, res) => {
      console.log('body', req.body)
      let { content, author } = req.body;
      Intention.findOne({ _id: req.params.id }).then(intention => {
        intention.answers.push({
          content,
          author
        });
        intention.save(err => {
          res.redirect(`/intention/${intention._id}`);
        });
      });
    },
    // update: (req, res) => {
    //   console.log('body', req.body)
    //   let { content, author } = req.body;
    //   Intention.findOne({ _id: req.params.id }).then(intention => {
    //     intention.answers.push({
    //       content,
    //       author
    //     })
    //     intention.likes.push({
    //       likes_count,
    //       author
    //     });
    //     intention.save(err => {
    //       res.redirect(`/intention/${intention._id}`);
    //     });
    //   });
    // },
    delete: (req, res) => {
      Intention.findOneAndRemove({ _id: req.params.id }).then(intention => {
        res.redirect('/')
      });
    },
  requireAuth: function(req, res, next) {
    if (req.isAuthenticated()) {
      next();
    } else {
      res.redirect("/");
    }
  }
};