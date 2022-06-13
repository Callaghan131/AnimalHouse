const apiUrl = `http://localhost:2700/`;

export class MemoryService
{
    // score deve essere un oggetto del tipo
    // {
    //     "username": "pippo",
    //     "punteggio": 78,
    // }
    saveScore = (score) =>{
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(score)
        };
    
        return fetch(`${apiUrl}scoreMemory`, requestOptions)
        .then(response => response.json())
    }
}