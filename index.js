const express = require("express");
const app = express();
const hbs = require("hbs");
const flash = require("connect-flash");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const session = require('express-session')
const passport = require('passport')
// const userController = require("../controllers/user.js");


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


require("./config/passport")(passport);
app.use(passport.initialize());
app.use(passport.session());


hbs.registerPartials(__dirname + "/views/partials");
app.use(express.static("public"));
app.set("view engine", "hbs");
app.use(methodOverride("_method"));



app.use(require("./routes/index.js"));

app.listen(3333, () => console.log("server is running"));


// const express = require("express");
// const hbs = require("hbs");
// const bodyParser = require("body-parser");
// // const methodOverride = require("method-override");

// const app = express();
// hbs.registerPartials(__dirname + "/views/partials"); 
// // how we serve css files w/in Express
// app.use(express.static("public"));
// app.use(bodyParser.urlencoded({ extended: true }));
// app.set("view engine", "hbs");
// // app.use(methodOverride("_method"));

// app.use(require("./routes/index.js"));

// app.listen(4000, () => console.log("4000 server is running"));
