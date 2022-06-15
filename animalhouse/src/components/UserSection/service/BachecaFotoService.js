const apiUrl = `http://localhost:2700/`;

export class BachecaFotoService
{
   
    savePost = (post) =>{
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(post)
        };
    
        return fetch(`${apiUrl}bachecaFoto`, requestOptions)
        .then(response => response.json())
    }
}
