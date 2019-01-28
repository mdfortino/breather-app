const express = require("express")
const hbs = require("hbs")
const app = express()
const bodyParser = require("body-parser")
const methodOverride = require("method-override");


hbs.registerPartials(__dirname + "/views/partials");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "hbs");
app.use(methodOverride("_method"));

app.use(require("./routes/index.js"));
app.use(bodyParser.urlencoded("extended: true"))


app.listen(5555, () => {
    console.log("app listening on port 5555")
})