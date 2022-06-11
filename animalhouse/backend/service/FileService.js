var fs = require("fs");
const basePath = '../backend/model/';

const ReadFile = function(filePath, callBack){
    let completePath = `${basePath}${filePath}`;

    fs.readFile(completePath, 'utf8' , (err, data) => {
        if (err) {
          console.error(err);
          return
        }
        callBack(JSON.parse(data));
    });
}

const SaveFile = function(data, filePath){
    let dataToSave = JSON.stringify(data);
    let completePath = `${basePath}${filePath}`;

    fs.writeFile(completePath, dataToSave, (err) => {
        // throws an error, you could also catch it here
        if (err) console.log(`Errore lettura file ${err}`);
    });
}

module.exports = {
    ReadFile, SaveFile
};