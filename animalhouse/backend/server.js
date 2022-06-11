const express=require('express');

///////////////////
//Configurazione server
const app=express();
app.listen(2700);
// abilita le cors per tutti gli ip
const cors = require('cors');
app.use(cors());
// Accetta il json in entrata negli endpoint
let bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//////////////////////////////////////

// "import"
var QuizService = require('./service/QuizService')
//////////////////////////////////////

app.get('/users', function(req, res){
    res.send(users)
})
app.get('/scoreMemory', function(req, res){
    res.send(scoreMemory)
})

//#region "controller quiz"
// se salva e' una post
app.post('/scoreQuiz', function(req, res){
    // req.body contiene la richieste in json
    let requestBody = req.body;
    QuizService.AddOrUpdateScore(requestBody)
    res.send("Punteggio aggiornato");
})
// se prende i dati e' una get
app.get('/scoreQuiz', function(req, res){
    QuizService.GetScore(function(result){
        res.json(result);
    });
})
//#endregion