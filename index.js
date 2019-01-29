const express = require("express")
const app = express()
const hbs = require("hbs")
const flash = require("connect-flash")
const cookieParser = require("cookie-parser")
const bodyParser = require("body-parser")
const methodOverride = require("method-override");
const session = require('express-session')
const passport = require('passport')

require('./config/passport')(passport)
app.use(passport.initialize())
app.use(passport.session())

app.use(flash());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    secret: "EXPRESS-IS-AWESOME",
    saveUninitialized: true,
    resave: false
  })
);

hbs.registerPartials(__dirname + "/views/partials");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "hbs");
app.use(methodOverride("_method"));

app.use(require("./routes/index.js"));



app.listen(5555, () => {
    console.log("app listening on port 5555")
})