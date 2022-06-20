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
//POST server

app.post('/login', function(req, res){
    let requestBody = req.body;
    console.log(req.body);
    let Users = readUserFile();
    console.log(Users);
    let user = Users.find(x=>
        x.username == requestBody.username
        && x.password == requestBody.password
        && x.admin == requestBody.admin
        );
    console.log(user)
    if(user)
    {
        res.status=200;
    }
    else{
        res.status=400;
    }
    console.log(res.status);
    res.send();
})

app.post('/users', function(req, res){

    let requestBody = req.body;
    let Users = readUserFile();
    console.log(Users);

    let userToUpdate = Users.find(x=>x.username == requestBody.username);
    if(!userToUpdate){
        // userToUpdate.punteggio = requestBody.punteggio
        Users.push({
                username: requestBody.username,
                password: requestBody.password,
                admin: requestBody.admin
            });
            
        saveUserFile(Users);
        res.status(201);
        res.send("Utente registrato");
    }
    else{
        res.status(304);
        res.send("Utente già registrato");
    }
    console.log(Users);
})

function readUserFile(){
    let readedFile = require("../src/JSON/users.json");
    if(!readedFile)
        readedFile = [];

    return readedFile;
}

function saveUserFile(data){
    let dataToSave = JSON.stringify(data);

    fs.writeFile(path.join(__dirname, '../src/JSON/users.json'), dataToSave, (err) => {
        // throws an error, you could also catch it here
        if (err) throw err;
        console.log('Saved!');
    });
}
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
function readBachecaFile(){
    let readedFile = require("../src/JSON/bacheca.json");
    if(!readedFile)
        readedFile = [];

    return readedFile;
}
function saveBacheca(data){
    let dataToSave = JSON.stringify(data);

    fs.writeFile(path.join(__dirname, '../src/JSON/bacheca.json'), dataToSave, (err) => {
        // throws an error, you could also catch it here
        if (err) throw err;
        console.log('Saved!');
    });
}
app.post('/bacheca', function(req, res){
    let messaggi=readBachecaFile();
    let requestBody=req.body;
    messaggi.push({
        messaggio: requestBody.messaggio,
        utente: requestBody.utente
    });
    saveBacheca(messaggi);
})
const bacheca=require('../src/JSON/bacheca.json');
app.get('/bacheca', function(req, res){
    res.send(bacheca);
})
//dirname=risolve le dipendenze assolute e relative dei percorsi in node


function readBachecaFotoFile(){
    let readedFile = require("../src/JSON/bachecaFoto.json");
    if(!readedFile)
        readedFile = [];

    return readedFile;
}
function saveBachecaFoto(data){
    let dataToSave = JSON.stringify(data);

    fs.writeFile(path.join(__dirname, '../src/JSON/bachecaFoto.json'), dataToSave, (err) => {
        // throws an error, you could also catch it here
        if (err) throw err;
        console.log('Saved!');
    });
}
app.post('/bachecaFoto', function(req, res){
    let foto=readBachecaFotoFile();
    let requestBody=req.body;
    console.log(requestBody.utente);
    foto.push({
        indirizzo: requestBody.indirizzo,
        utente: requestBody.utente
    });
    saveBachecaFoto(foto);
})
const bachecaFoto=require('../src/JSON/bachecaFoto.json');
const { request } = require('http');
app.get('/bachecaFoto', function(req, res){
    res.send(bachecaFoto);
})