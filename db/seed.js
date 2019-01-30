const User = require("../models/User");
const { Intention } = require("../models/Intention");
const bcrypt = require("bcrypt-nodejs");

const createPassword = password =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)

User.find({}).remove(() => {
  Intention.find({}).remove(() => {
    let bugs = User.create({
        email: "bugsbunny@gmail.com",
        password: "bugsbunny"
    }).then(user => {
        Promise.all([
          Intention.create({
            content: "eh, what's up doc?",
            author: user._id
          }).then(intention => {
            user.intentions.push(intention)
          }),
          Intention.create({
            content: "That's all, folks!",
            author: user._id
          }).then(intention => {
            user.intentions.push(intention)
          })
        ]).then(() => {
          user.save(err => console.log(err))
        })
      })
  
      let daffy = User.create({
        email: "daffyduck@gmail.com",
        password: "daffyduck"
      }).then(user => {
        Promise.all([
          Intention.create({
            content: "Who's this Duck Dodgers any how?",
            author: user._id
          }).then(intention => {
            user.intentions.push(intention)
          }),
          Intention.create({
            content: "You're dethpicable.",
            author: user._id
          }).then(intention => {
            user.intentions.push(intention)
          })
        ]).then(() => {
          user.save(err => console.log(err))
        })
      })
  
      let elmer = User.create({
        email: "elmerfudd@gmail.com",
        password: "elmerfudd"
      }).then(user => {
        Promise.all([
          Intention.create({
            content:
              "Shh. Be vewy vewy quiet. I'm hunting wabbits! Huh-huh-huh-huh!",
            author: user._id
          }).then(intention => {
            user.intention.push(intention)
          }),
  
          Intention.create({
            content: "Kiww da wabbit!",
            author: user._id
          }).then(intention => {
            user.intention.push(intention)
          })
        ]).then(() => {
          user.save(err => console.log(err))
        })
      })
    })
  })



