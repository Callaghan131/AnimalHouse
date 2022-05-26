function RequestZOO()
{
    let request = new XMLHttpRequest();
    request.open("GET","https://zoo-animal-api.herokuapp.com/animals/rand/");
    request.send();
    request.onload= () =>
    {
        if(request.status===200)
        {
            var elementoJSON=JSON.parse(request.response)
            JSONsetupZOO(elementoJSON);
        }
    }
}

function JSONsetupZOO(elementoJSON)
{  
    var parametri =["name", "image_link", "animal_type", "length_min", "length_max", "weight_min", "weight_max", "habitat", "diet", "geo_range"];
    var arrayLength = parametri.length;
	for (var i = 0; i < arrayLength; i++) {
  	console.log(parametri[i]);
  	var fact_name = parametri[i] //prendiamo nome parametro
    var fact_content = elementoJSON[parametri[i]] //prendiamo l'effettivo contenuto del parametro
    document.getElementById(fact_name).innerHTML = fact_content ; //scrive all'Id che presenta lo stesso nome dell'elemento nell'HTML
    };
    // CAPIRE COME RITORNARE i valori all'interno della pagina HTML
	document.getElementById("image_link").src= elementoJSON.image_link;
}