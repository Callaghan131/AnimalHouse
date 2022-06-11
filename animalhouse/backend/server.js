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
var fs = require("fs");
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
    let quizUsers = readQuizFile();

    let userToUpdate = quizUsers.find(x=>x.username == requestBody.username);
    if(userToUpdate){
        userToUpdate.punteggio = requestBody.punteggio
    }
    else{
        quizUsers.push({
            username: requestBody.username,
            punteggio: requestBody.punteggio
        });
    }

    saveQuizFile(quizUsers);
    res.send("Punteggio user salvato");
})
// se prende i dati e' una get
app.get('/scoreQuiz', function(req, res){
    res.send("eccomi")
})
//#endregion

// Ritorna gia' deserializzato
function readQuizFile(){
    let readedFile = require("./model/quiz/quizScore.json");
    if(!readedFile)
        readedFile = [];

    return readedFile;
}

function saveQuizFile(data){
    let dataToSave = JSON.stringify(data);

    fs.writeFile("./model/quiz/quizScore.json", dataToSave, (err) => {
        // throws an error, you could also catch it here
        if (err) throw err;
    });
}