const {Question, Answer} = require("../models/Question")
const User = require("../models/User")

module.exports = {
    show: (req, res) => {
      Question.findOne({ _id: req.params.id })
      .populate("author")
      .exec(function(err, question) {
        Answer.populate(question.answers, { path: "author" }, function(
          err,
          answers
        ) {
          question.answers = answers
          res.render("question/show", question)
        })
      })
  },
    new: (req, res) => {
      User.find({}).then(users => {
        res.render("question/new", { users })
      })
    },
    create: (req, res) => {
      console.log('body', req.body)
      Question.create({
        content: req.body.question.content,
        author: req.body.author
      }).then(question => {
        console.log('question ', question)
        User.findOne({ _id: req.body.author }).then(user => {
          user.questions.push(question)
          user.save(result => {
            console.log(result)
            res.redirect(`/question/${question._id}`)
          })
        })
      })
    },
    update: (req, res) => {
      console.log('body', req.body)
      let { content, author } = req.body;
      Question.findOne({ _id: req.params.id }).then(question => {
        question.answers.push({
          content,
          author
        });
        question.save(err => {
          res.redirect(`/question/${question._id}`);
        });
      });
    },
    delete: (req, res) => {
      Question.findOneAndRemove({ _id: req.params.id }).then(question => {
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