const User = require("../models/User");
const { Question } = require("../models/Question");
const bcrypt = require("bcrypt-nodejs");

const createPassword = password =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)

User.find({}).remove(() => {
  Question.find({}).remove(() => {
    let bugs = User.create({
        email: "bugsbunny@gmail.com",
        password: "bugsbunny"
    }).then(user => {
        Promise.all([
          Question.create({
            content: "eh, what's up doc?",
            author: user._id
          }).then(question => {
            user.questions.push(question)
          }),
          Question.create({
            content: "That's all, folks!",
            author: user._id
          }).then(question => {
            user.questions.push(question)
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
          Question.create({
            content: "Who's this Duck Dodgers any how?",
            author: user._id
          }).then(question => {
            user.questions.push(question)
          }),
          Question.create({
            content: "You're dethpicable.",
            author: user._id
          }).then(question => {
            user.questions.push(question)
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
          Question.create({
            content:
              "See feel ",
            author: user._id
          }).then(question => {
            user.questions.push(question)
          }),
  
          Question.create({
            content: "See: ",
            author: user._id
          }).then(question => {
            user.questions.push(question)
          })
        ]).then(() => {
          user.save(err => console.log(err))
        })
      })
    })
  })








//https://hackernoon.com/how-to-build-twitters-real-time-likes-feature-with-node-js-and-pusher-fd8f97bee7cb 

// let faker = require('faker');
// let Post = require('../models/post');

// // connect to MongoDB
// require('mongoose').connect('mongodb://localhost/poster');

// // remove all data from the collection first
// Post.remove({})
//   .then(() => {
//     let posts = [];
//     for (let i = 0; i < 30; i++) {
//       posts.push({
//         text: faker.lorem.sentence(),
//         posted_at: faker.date.past(),
//         likes_count: Math.round(Math.random() * 20),
//         author: faker.name.findName()
//       });
//     }
//   return Post.create(posts);
// }).then(() => {
//     process.exit();
// }).catch((e) => {
//     console.log(e);
//     process.exit(1);
// });
