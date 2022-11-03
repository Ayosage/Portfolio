let express = require("express");
let ejs = require("ejs");
let path = require("path")
let app = express();

// to do -
// touch up styling
// responsive 

app.use(express.urlencoded({extended:true}));
app.use(express.static(("public")));
app.set("view engine", "ejs");

app.get("/", function(req, res){
 res.render("index")

})

app.get("/projects", function(req, res){
    res.render("projects")
})

app.get("/contact", function(req, res){
    res.render("contact")
})

app.post("https://formsubmit.io/send/097f3f46-ac14-4296-804d-039d572abe35", function(req, res){

    res.redirect("/")
})


app.listen(8080, function(){
    console.log("Running on Port 3k")
})