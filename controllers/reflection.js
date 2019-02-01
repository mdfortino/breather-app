const Reflection = require("../models/Reflection")

const User = require("../models/User")

module.exports = {
        show: (req, res) => {
          Reflection.findOne({ _id: req.params.id })
          {
            reflection.answers = answers
            res.render("reflection/show", reflection)
          }
      },
          new: (req, res) => {
            User.find({}).then(users => {
              res.render("reflection/new", { users })
            })
          },
          create: (req, res) => {
            console.log('body', req.body)
            Reflection.create({
              content: req.body.reflection.content,
              author: req.body.author
            }).then(reflection => {
              console.log('reflection ', reflection)
              User.findOne({ _id: req.body.author }).then(user => {
                user.reflections.push(reflection)
                user.save(result => {
                  console.log(result)
                  res.redirect(`/reflection/${reflection._id}`)
                })
              })
            })
          },
          delete: (req, res) => {
            Reflection.findOneAndRemove({ _id: req.params.id }).then(reflection => {
              res.redirect('/')
            });
          },
    
      };

