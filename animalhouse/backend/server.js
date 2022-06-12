const express=require('express');
const users=require('../src/JSON/users.json')
const scoreMemory=require('../src/JSON/scoreMemory.json')
const scoreQuiz1=require('../src/JSON/scoreQuiz.json')

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
    res.send(scoreQuiz1)
})
//#endregion

// Ritorna gia' deserializzato
function readQuizFile(){
    let readedFile = require("../src/JSON/scoreQuiz.json");
    if(!readedFile)
        readedFile = [];

    return readedFile;
}

function saveQuizFile(data){
    let dataToSave = JSON.stringify(data);

    fs.writeFile("../src/JSON/scoreQuiz.json", dataToSave, (err) => {
        // throws an error, you could also catch it here
        if (err) throw err;
        console.log('Saved!');
    });
}