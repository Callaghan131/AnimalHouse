var FileService = require('./FileService')
const quizFile = "quiz/quizScore.json";

const AddOrUpdateScore = function(score){
    FileService.ReadFile(quizFile, true, function(quizUsers){
        let userToUpdate = quizUsers.find(x=>x.username == score.username);
        if(userToUpdate){
            userToUpdate.punteggio = score.punteggio
        }
        else{
            quizUsers.push({
                username: score.username,
                punteggio: score.punteggio
            });
        }
    
        FileService.SaveFile(quizUsers, quizFile);
    });
}

const GetScore = function(callBack){
    FileService.ReadFile(quizFile, false, function(quizUsers){
        callBack(quizUsers);
    });
}

module.exports = {
    AddOrUpdateScore,
    GetScore
};