const exp = require("express")
const app = exp();

app.listen(3000,function(){
    console.log("server started");
})

app.get("/",function(req,res){
    res.sendFile(__dirname+ "/dice.html");
})

app.get("/dice.css",function(req,res){
    res.sendFile(__dirname+"/dice.css");
})

app.get("/dice.js",function(req,res){
    res.sendFile(__dirname+"/dice.js");
})
// app.use(exp.static('public'))
app.use("/images",exp.static('Images'));