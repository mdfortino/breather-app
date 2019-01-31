// const {Reflection, Answer} = require("../models/Reflection")

// const User = require("../models/User")

// module.exports = {
//   show: (req, res) => {
//     Reflection.findOne({ _id: req.params.id })
//     .populate("author")
//     .exec(function(err, reflection) {
//       Answer.populate(reflection.answers, { path: "author" }, function(
//         err,
//         answers
//       ) {
//         reflection.answers = answers
//         res.render("reflection/show", reflection)
//       })
//     })
// },
//     new: (req, res) => {
//       User.find({}).then(users => {
//         res.render("reflection/new", { users })
//       })
//     },
//     create: (req, res) => {
//       console.log('body', req.body)
//       Reflection.create({
//         content: req.body.reflection.content,
//         author: req.body.author
//       }).then(reflection => {
//         console.log('reflection ', reflection)
//         User.findOne({ _id: req.body.author }).then(user => {
//           user.reflections.push(reflection)
//           user.save(result => {
//             console.log(result)
//             res.redirect(`/reflection/${reflection._id}`)
//           })
//         })
//       })
//     },
//     update: (req, res) => {
//       console.log('body', req.body)
//       let { content, author } = req.body;
//       Reflection.findOne({ _id: req.params.id }).then(reflection => {
//         reflection.answers.push({
//           content,
//           author
//         });
//         reflection.save(err => {
//           res.redirect(`/reflection/${reflection._id}`);
//         });
//       });
//     },
    
//     delete: (req, res) => {
//       Reflection.findOneAndRemove({ _id: req.params.id }).then(reflection => {
//         res.redirect('/')
//       });
//     },
//   requireAuth: function(req, res, next) {
//     if (req.isAuthenticated()) {
//       next();
//     } else {
//       res.redirect("/");
//     }
//   }
// };