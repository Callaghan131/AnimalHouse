const apiUrl = `http://localhost:2700/`;

export class RegisterService
{
    // Utente deve essere un oggetto del tipo
    // {
    //     "username": "pippo",
    //     "password": ****,
    // }
    saveUser = (utente) =>{
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(utente)
        };
    
        return fetch(`${apiUrl}users`, requestOptions)
        .then(response => response)
    }
}