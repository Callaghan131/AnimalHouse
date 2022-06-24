const apiUrl = `http://localhost:27800/`;

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
    aggiorna = (text,put)=>{
          const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json', 'location':text},
            body: JSON.stringify(put),
        };
    
        return fetch(`${apiUrl}bacheca`, requestOptions)
        .then(response => response.json())
    }
}
