const User = require("../models/User");
const { Awareness } = require("../models/Awareness");
const bcrypt = require("bcrypt-nodejs");

const createPassword = password =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)

User.find({}).remove(() => {
  Awareness.find({}).remove(() => {
    let bugs = User.create({
        email: "bugsbunny@gmail.com",
        password: "bugsbunny"
    }).then(user => {
        Promise.all([
          Awareness.create({
            content: "5 things I see are water bottle, table, plug, glass, lights. 4 things I can touch are the keyboard, fingers, pants, heart. 3 things I can hear are music, sirens, someone chewing gum. 2 things I can smell are lavender oil and air. 1 thing I can taste is peppermint.",
            author: user._id
          }).then(awareness => {
            user.awarenessPosts.push(awareness)
          }),
          Awareness.create({
            content: "That's all, folks!",
            author: user._id
          }).then(awareness => {
            user.awarenessPosts.push(awareness)
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
          Awareness.create({
            content: "5 things, 4 things, 3 things, 2 things, 1 thing.",
            author: user._id
          }).then(awareness => {
            user.awarenessPosts.push(awareness)
          }),
          Awareness.create({
            content: "You're dethpicable.",
            author: user._id
          }).then(awareness => {
            user.awarenessPosts.push(awareness)
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
          Awareness.create({
            content:
              "5 things I can see are bottle, grass, deer, table, sky. 4 things I can touch are the grass, leaves, dirt, water. 3 things I can hear are birds chirping, car driving by, wind. 2 things I can smell are soil and smelly feet. 1 thing I can taste is salt.",
            author: user._id
          }).then(awareness => {
            user.awarenessPosts.push(awareness)
          }),
  
          Awareness.create({
            content: "Kiww da wabbit!",
            author: user._id
          }).then(awareness => {
            user.awarenessPosts.push(awareness)
          })
        ]).then(() => {
          user.save(err => console.log(err))
        })
      })
    })
  })



