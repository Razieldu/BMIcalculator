const express=require("express");
const bodyParser=require("body-parser");
const app=express();

app.use(bodyParser.urlencoded({extended:true}));

app.post("/",function(req,res){
  var userHeight=Number(req.body.height);
  var userWeight=Number(req.body.weight);
  var result=Math.round(userWeight/Math.pow(userHeight,2));


  res.send("Your BMI is "+ result);
});

app.get("/",function(req,res){
res.sendFile(__dirname + "/bmicalculator.html");
});


app.listen(3000,function(){
  console.log("Server is started on port 3000!")
});
