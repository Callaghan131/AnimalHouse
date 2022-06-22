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
    aggiornaFoto = (src,put)=>{
          const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json', 'location':src},
            body: JSON.stringify(put),
        };
    
        return fetch(`${apiUrl}bachecaFoto`, requestOptions)
        .then(response => response.json())
    }
}
