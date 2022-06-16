const apiUrl = `http://localhost:2700/`;

export class LoginService
{
    // score deve essere un oggetto del tipo
    // {
    //     "username": "pippo",
    //     "punteggio": 78,
    // }
    login = (data) =>{
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
    
        return fetch(`${apiUrl}login`, requestOptions)
        .then(response => response)
    }
}