const User = require("../models/User");
const { Intention } = require("../models/Intention");
const bcrypt = require("bcrypt-nodejs");

const createPassword = password =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)

User.find({}).remove(() => {
  Intention.find({}).remove(() => {
    let teammate1 = User.create({
        email: "margo@mvhs.com",
        password: "lax",
        username: "margo"
    }).then(user => {
        Promise.all([
          Intention.create({
            content: "To stay calm and in control on defensive end.",
            author: user._id
          }).then(intention => {
            user.intentions.push(intention)
          }),
          Intention.create({
            content: "To breathe through obstacles",
            author: user._id
          }).then(intention => {
            user.intentions.push(intention)
          })
        ]).then(() => {
          user.save(err => console.log(err))
        })
      })
  
      let teammate2 = User.create({
        email: "linds@mvhs.com",
        password: "lyndslax"
      }).then(user => {
        Promise.all([
          Intention.create({
            content: "To box out my defender.",
            author: user._id
          }).then(intention => {
            user.intentions.push(intention)
          }),
          Intention.create({
            content: "To get every groundball in my space.",
            author: user._id
          }).then(intention => {
            user.intentions.push(intention)
          })
        ]).then(() => {
          user.save(err => console.log(err))
        })
      })
    })
  })



