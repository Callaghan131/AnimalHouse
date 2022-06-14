// N.B. se si vuole dividere in controller si puo' seguire questa guida 
// https://lo-victoria.com/build-a-rest-api-with-nodejs-routes-and-controllers
// il server si avvia con node .\server.js posizionandosi nella stessa route di server.js

const express=require('express');
const users=require('../src/JSON/users.json');
const scoreQuiz1=require('../src/JSON/scoreQuiz.json');
const scoreMemory=require('../src/JSON/scoreMemory.json');

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
const { Console } = require('console');
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
    let requestBody = req.body;
    let memoryUsers = readQuizFile();
    console.log(memoryUsers);

    let userToUpdate = memoryUsers.find(x=>x.username == requestBody.username);
    if(userToUpdate){
        userToUpdate.punteggio = requestBody.punteggio
    }
    else{
        memoryUsers.push({
            username: requestBody.username,
            punteggio: requestBody.punteggio
        });
    }

    saveQuizFile(memoryUsers);
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

var path = require('path');

function saveQuizFile(data){
    let dataToSave = JSON.stringify(data);

    fs.writeFile(path.join(__dirname, '../src/JSON/scoreQuiz.json'), dataToSave, (err) => {
        // throws an error, you could also catch it here
        if (err) throw err;
        console.log('Saved!');
    });
}

app.post('/scoreMemory', function(req, res){
    // req.body contiene la richieste in json
    let requestBody = req.body;
    let memoryUsers = readMemoryFile();
    console.log(memoryUsers);

    let userToUpdate = memoryUsers.find(x=>x.username == requestBody.username);
    if(userToUpdate){
        userToUpdate.punteggio = requestBody.punteggio
    }
    else{
        memoryUsers.push({
            username: requestBody.username,
            punteggio: requestBody.punteggio
        });
    }

    saveMemoryFile(memoryUsers);
    res.send("Punteggio user salvato");
})
// se prende i dati e' una get
app.get('/scoreMemory', function(req, res){
    res.send(scoreMemory)
})
//#endregion

// Ritorna gia' deserializzato
function readMemoryFile(){
    let readedFile = require("../src/JSON/scoreMemory.json");
    if(!readedFile)
        readedFile = [];

    return readedFile;
}

var path = require('path');

function saveMemoryFile(data){
    let dataToSave = JSON.stringify(data);

    fs.writeFile(path.join(__dirname, '../src/JSON/scoreMemory.json'), dataToSave, (err) => {
        // throws an error, you could also catch it here
        if (err) throw err;
        console.log('Saved!');
    });
}

//dirname=risolve le dipendenze assolute e relative dei percorsi in node


