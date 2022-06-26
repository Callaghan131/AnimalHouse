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
app.listen(2800);
// abilita le cors per tutti gli ip
const cors = require('cors');
app.use(cors());
app.use(express.static('public'));
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

app.get('/users/:username', function(req,res){
    const {username}=req.params

    const user=users.find(
        (user)=> user.username==username
    )

    res.send(user);
})

app.put('/users/:username', function(req,res){
    const {username}=req.params;
    const user=req.body;
    let users = readUserFile();
    const index=users.findIndex(
        user=>user.username===username
    )

    console.log(index);
    users[index]=user;
    console.log(users[index]);
    res.status(200).json({success:true, data: users})
    saveUserFile(users);
})

app.put('/scoreMemory/:username', function(req,res){
    const {username}=req.params;
    const user=req.body;
    let users = readMemoryFile();
    const index=users.findIndex(
        user=>user.username===username
    )

    console.log(index);
    users[index]=user;
    console.log(users[index]);
    res.status(200).json({success:true, data: users})
    saveMemoryFile(users);
})

app.put('/scoreQuiz/:username', function(req,res){
    const {username}=req.params;
    const user=req.body;
    let users = readQuizFile();
    const index=users.findIndex(
        user=>user.username===username
    )

    console.log(index);
    users[index]=user;
    console.log(users[index]);
    res.status(200).json({success:true, data: users})
    saveQuizFile(users);
})

app.get('/scoreMemory', function(req, res){
    res.send(scoreMemory)
})

app.get('/scoreMemory/:username', function(req,res){
    const {username}=req.params

    const score=scoreMemory.find(
        (score)=> score.username==username
    )

    res.send(score);
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

app.get('/scoreQuiz/:username', function(req,res){
    const {username}=req.params

    const score=scoreQuiz1.find(
        (score)=> score.username==username
    )

    res.send(score);
})
//#endregion
app.delete('/users',function(req,res){
    let requestBody=req.body;
    let Users= readUserFile();

    let index = Users.findIndex(x=>x.username === requestBody.username);
    if(index != -1){
        Users.splice(index, 1)
        saveUserFile(Users);
        res.status = 200;
    }
    else{
        res.status = 404;
    }

    res.send();
})
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
        // && x.admin == requestBody.admin
        );
    console.log(`utente ${user?.username} ${user?.password} ${user?.admin}`);

    let statusCode = user ? 200 : 401;

    res.status = statusCode; //200 --> user trovato // 400 --> user non trovato
    // inserire la reason phrase nel return in modo da stamparla nel frontend
    res.send(
        {
            errorString: statusCode == 401 ? "Username o password non corretti" : null,
            errorCode: statusCode,
            isAdmin: user?.admin ?? false
        }
    ); //Se l'utente e' stato trovato si verifica il flag .admin altrimenti in caso di 400 si mette sempre false
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
app.delete('/bacheca',function(req,res){
    let messaggi=readBachecaFile();
    const testo=req.headers.location;
    var index=0;
    for(var a=0;a<messaggi.length;a++){
        if(messaggi[a].messaggio==testo){
            index=a;
        }
    }
    messaggi.splice(index,1);
    saveBacheca(messaggi);
})
app.delete('/bachecaFoto',function(req,res){
    let foto=readBachecaFotoFile();
    const src=req.headers.location;
    var index=0;
    for(var a=0;a<foto.length;a++){
        if(foto[a].indirizzo==src){
            index=a;
        }
    }
    console.log(index);
    foto.splice(index,1);
    saveBachecaFoto(foto);
})
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
    foto.push({
        indirizzo: requestBody.indirizzo,
        username: requestBody.utente
    });
    saveBachecaFoto(foto);
})
const bachecaFoto=require('../src/JSON/bachecaFoto.json');
app.get('/bachecaFoto', function(req, res){
    res.send(bachecaFoto);
})

function readMagazzinoFile(){
    let readedFile = require("../src/JSON/magazzino.json");
    if(!readedFile)
        readedFile = [];

    return readedFile;
}

var path = require('path');

function saveMagazzinoFile(data){
    let dataToSave = JSON.stringify(data);

    fs.writeFile(path.join(__dirname, '../src/JSON/magazzino.json'), dataToSave, (err) => {
        // throws an error, you could also catch it here
        if (err) throw err;
        console.log('Saved!');
    });
}

app.put('/magazzino/:idProduct/categoria/:categoria', function(req,res){
    const {categoria}=req.params;
    const {idProduct}=req.params;
    const product=req.body;
    let products = readMagazzinoFile();
    // const index=products[Number(categoria)].findIndex(
    //     product=>product.numSerie===Number(idProduct)
    // )

    products[(categoria)][(idProduct)]=product;

    console.log(products[(categoria)][(idProduct)]);
    //console.log(products);

    res.status(200).json({success:true, data: products})
    saveMagazzinoFile(products);
})

app.get('/magazzino', function(req, res){
    res.send(magazzino)
})

app.get('/magazzino/:categoria/:idProduct', function(req,res){
    const {categoria}=req.params
    const {idProduct}=req.params

    let catIndex=0;
    switch(categoria){
        case "gioco":
            catIndex=0;
            break;
        case "accessori":
            catIndex=1;
            break;
        case "cibo":
            catIndex=2;
            break;
        case "sanitari":
            catIndex=3;
            break;
    }



    res.send(magazzino[catIndex][Number(idProduct)]);
})

app.delete('/magazzino',function(req,res){
    let requestBody=req.body;

    let magazzino= readMagazzinoFile();

    let catIndex=0;
    switch(requestBody.categoria){
        case "gioco":
            catIndex=0;
            break;
        case "accessori":
            catIndex=1;
            break;
        case "cibo":
            catIndex=2;
            break;
        case "sanitari":
            catIndex=3;
            break;
    }

    // magazzino[catIndex].splice(Number(idProduct),1);
    // saveUserFile(magazzino);
    // res.status(200);
    

    let index = magazzino[catIndex].findIndex(x=>x.id === requestBody.idProduct);
    if(index != -1){
        magazzino[catIndex].splice(index, 1)
        saveMagazzinoFile(magazzino);
        res.status = 200;
    }
    else{
        res.status = 404;
    }

    res.send(magazzino);
})

app.post('/magazzino/categoria/:categoria', function(req, res){
    const {categoria}=req.params
    let requestBody = req.body;
    let magazzino = readMagazzinoFile();
    console.log(magazzino);

    let newProduct = magazzino[categoria].find(x=>x.id == requestBody.id && x.categoria==requestBody.categoria);
    if(!newProduct){
        // userToUpdate.punteggio = requestBody.punteggio
        magazzino.push({
                id: requestBody.id,
                immagine: requestBody.immagine,
                nome: requestBody.nome,
                prezzo: requestBody.prezzo,
                quantità: requestBody.quantità,
                disponibilità: requestBody.disponibilità
            });

        saveUserFile(magazzino);
        res.status(20);
        res.send("Prodotto creato");
    }
    else{
        res.status(304);
        res.send("Prodotto gia presente");
    }
    console.log(magazzino);
})

const magazzino=require('../src/JSON/magazzino.json');
const { request } = require('http');



