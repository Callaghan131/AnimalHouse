export class Service
{
    getCats = () => {
        return fetch("https://cat-fact.herokuapp.com/facts")
        .then(response => response.json())
    }
    getDogs = () => {
        return fetch("https://dog-api.kinduff.com/api/facts")
        .then(response => response.json())
    }
    getAnimals = () => {
        return fetch("https://zoo-animal-api.herokuapp.com/animals/rand")
        .then(response => response.json())
    }


    // let request = new XMLHttpRequest();
    // request.open("GET","https://zoo-animal-api.herokuapp.com/animals/rand/");
    // request.send();
    // request.onload= () =>
    // {
    //     if(request.status===200)
    //     {
    //         let elementoJSON = JSON.parse(request.response)
    //         JSONsetupZOO(elementoJSON);
    //     }
    // }
}