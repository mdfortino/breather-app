const Reflection = require("../models/Reflection")

const User = require("../models/User")

module.exports = {
    // create: (req, res) => {
    //     console.log('body', req.body)
    //     Reflection.create({
    //       content: req.body.reflection.content,
    //       author: req.body.author
    //     }).then(reflection => {
    //       console.log('reflection ', reflection)
    //       User.findOne({ _id: req.body.author }).then(user => {
    //         user.reflections.push(reflection)
    //         user.save(result => {
    //           console.log(result)
    //           res.redirect(`/reflection/${reflection._id}`)
    //         })
    //       })
    //     })
    //   },
    //   new: (req, res) => {
    //     User.find({}).then(users => {
    //       res.render("reflection/new", { users })
    //     })
    //   },
    // show: (req, res) => {
    //     Reflection.findOne({ _id: req.params.id })
    //     .populate("author")
    //     .exec(function(err, reflection) {
    
    //         res.render("reflection/show", reflection)
    
    //       })

    // },
        
    //     update: (req, res) => {
    //       console.log('body', req.body)
    //       let { content, author } = req.body;
    //       Reflection.findOne({ _id: req.params.id }).then(reflection => {
    //         reflection.save(err => {
    //           res.redirect(`/reflection/${reflection._id}`);
    //         });
    //       });
    //     },
    //     // update: (req, res) => {
    //     //   console.log('body', req.body)
    //     //   let { content, author } = req.body;
    //     //   Intention.findOne({ _id: req.params.id }).then(intention => {
    //     //     intention.answers.push({
    //     //       content,
    //     //       author
    //     //     })
    //     //     intention.likes.push({
    //     //       likes_count,
    //     //       author
    //     //     });
    //     //     intention.save(err => {
    //     //       res.redirect(`/intention/${intention._id}`);
    //     //     });
    //     //   });
    //     // },
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



        index: (req, res) => {
            console.log('body', req.body)
          User.find({})
          .then(reflection => {
            res.render('reflection/show', { reflections : reflection } )
            console.log("Reflections clicked")
          })
        },
        new: (req, res) => {
            console.log('body', req.body)
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
        // create: (req, res) => {
        //   Reflection.create({
        //     content: req.body.content,
        //     author: req.user._id
        //   }).then(reflection => {
        //     req.user.reflection.push(reflection._id)
        //     req.user.save(err => {
        //       res.redirect(`/reflection/${reflection._id}`)
        //     })
        //   })
        // },
      
        edit: (req, res) => {
          Reflection.findOne({ _id: req.params.id })
            .then(reflection=> {
              res.render('reflection/edit', reflection)
            //   console.log(reflection.content)
            })
        },
      
        update: (req, res) => {
          Reflection.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, doc) => {
            console.log(req.body)
          }).then(() => { 
            res.redirect('../../Reflection/show')
          }) 
      
        },
      
        delete: (req, res) => {
          Reflection.findOneAndRemove({ _id: req.params.id })
          .then(() => {
            res.redirect('../../reflection/show')
          })
        },
        requireAuth: function(req, res, next) {
            if (req.isAuthenticated()) {
              next();
            } else {
              res.redirect("/");
            }
          }
        };
   
    //     show: (req, res) => {
    //         res.render("reflection/show")
    //       }
    //   ,
    //       new: (req, res) => {
    //         User.find({}).then(users => {
    //           res.render("reflection/new", { users })
    //         })
    //       },
    //       create: (req, res) => {
    //         console.log('body', req.body)
    //         Reflection.create({
    //           content: req.body.reflection.content,
    //           author: req.body.author
    //         }).then(reflection => {
    //           console.log('reflection ', reflection)
    //           User.findOne({ _id: req.body.author }).then(user => {
    //             user.reflections.push(reflection)
    //             user.save(result => {
    //               console.log(result)
    //               res.redirect(`/reflection/${reflection._id}`)
    //             })
    //           })
    //         })
    //       },
    //       delete: (req, res) => {
    //         Reflection.findOneAndRemove({ _id: req.params.id }).then(reflection => {
    //           res.redirect('/')
    //         });
    //       },
    
    //   };

