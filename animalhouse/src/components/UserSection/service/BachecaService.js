const apiUrl = `http://localhost:2700/`;

export class BachecaService
{
   
    savePost = (post) =>{
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(post)
        };
    
        return fetch(`${apiUrl}bacheca`, requestOptions)
        .then(response => response.json())
    }
}
