function RequestImmagini()
{
    let request = new XMLHttpRequest();
    request.open("GET","https://zoo-animal-api.herokuapp.com/animals/rand/4");
    request.send();
    request.onload= () =>
    {
        if(request.status===200)
        {
            var elementoJSON=JSON.parse(request.response)
            JSONsetupMemory(elementoJSON);
        }
    }
}

function JSONsetupMemory(elementoJSON)
{  
    // var parametri =["message", "status"];
    // var arrayLength = factsArray.length;
	// for (var i = 0; i < arrayLength; i++) {
  	// console.log(factsArray[i]);
  	// fact_name = factsArray[i] //prendiamo nome parametro
    // fact_content = animalJSON[factsArray[i]] //prendiamo l'effettivo contenuto del parametro
    // document.getElementById(fact_name).innerHTML = fact_content ; //scrive all'Id che presenta lo stesso nome dell'elemento nell'HTML
    // };
    // // CAPIRE COME RITORNARE i valori all'interno della pagina HTML
	// document.getElementById("message").src= elementoJSON.message;

    var arrayAnimal=[];
    for(var i=0; i<elementoJSON.length; i++){
        arrayAnimal[i]=elementoJSON[i]["image_link"];
        arrayAnimal[i+1]=elementoJSON[i]["image_link"];
    }
    return arrayAnimal;
}