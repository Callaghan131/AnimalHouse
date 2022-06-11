const express=require('express');
const app=express();
var users=require("../src/JSON/users.json");
var scoreQuiz=require("../src/JSON/scoreQuiz.json");
var scoreMemory=require("../src/JSON/scoreMemory.json");


app.get('/users', function(req, res){
    res.send(users)
})
app.get('/scoreQuiz', function(req, res){
    res.send(scoreQuiz)
})
app.get('/scoreMemory', function(req, res){
    res.send(scoreMemory)
})



app.listen(2700);