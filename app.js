let express = require("express");
let ejs = require("ejs");
let app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.static("public"))
app.set("view engine", "ejs");

app.get("/", function(req, res){
 res.render("index")

})

app.get("/journey", function(req, res){
    res.render("journey")
})

app.get("/projects", function(req, res){
    res.render("projects")
})

app.get("/contact", function(req, res){
    res.render("contact")
})

app.listen(3000, function(){
    console.log("Running on Port 3k")
})