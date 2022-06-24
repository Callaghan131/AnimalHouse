const apiUrl = `http://localhost:2800/`;

export class UserService
{
    // score deve essere un oggetto del tipo
    // {
    //     "username": "pippo",
    //     "punteggio": 78,
    // }
    user = (data,username) =>{
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
    
        var endpoint=`${apiUrl}users/`+username;
        return fetch(endpoint, requestOptions)
        .then(response => response)
    }

    quiz = (data,username) =>{
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
    
        var endpoint=`${apiUrl}scoreQuiz/`+username;
        return fetch(endpoint, requestOptions)
        .then(response => response)
    }

    memory = (data,username) =>{
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
    
        var endpoint=`${apiUrl}scoreMemory/`+username;
        return fetch(endpoint, requestOptions)
        .then(response => response)
    }
}