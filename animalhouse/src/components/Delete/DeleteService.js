const apiUrl = `http://localhost:2800/`;

export class DeleteService
{
    // Utente deve essere un oggetto del tipo
    // {
    //     "username": "pippo",
    //     "password": ****,
    // }
    deleteUser = (utente) =>{
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(utente)
        };
    
        return fetch(`${apiUrl}users`, requestOptions)
        .then(res => res)
    }
}