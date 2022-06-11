var FileService = require('./FileService')

const AddOrUpdateScore = function(score){
    let quizFile = "quiz/quizScore.json";
    FileService.ReadFile(quizFile, function(quizUsers){
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

module.exports = {
    AddOrUpdateScore
};