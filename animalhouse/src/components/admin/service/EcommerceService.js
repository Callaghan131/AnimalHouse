const apiUrl = `http://localhost:2800/`;

export class EcommerceService
{
    // score deve essere un oggetto del tipo
    // {
    //     "username": "pippo",
    //     "punteggio": 78,
    // }
    product = (data,id,categoria) =>{
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
    
        var endpoint=`${apiUrl}magazzino/`+id+'/categoria/'+categoria;
        return fetch(endpoint, requestOptions)
        .then(response => response)
    }

    
}