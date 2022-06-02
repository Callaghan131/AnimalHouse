import React, {Component} from "react";
import { ZooService } from "../utilities/ZooAPI";

class Curiosità extends Component{
    render()
    {
        return(
            <section id="animal">
                <div className="primaRiga">
                        <p id="titolo">Nome dell'animale: <span id="name"></span></p>
                        <button id="btn" className="button-1" type="button" onClick={this.getZoo}>Nuovo animale</button>
                </div>
                    <div id="listoffacts">
                        <p> Ecco alcune info su <span id="name"></span>:</p>
                            <ol id="list1">
                                <li>The type of this animal is <span id="animal_type"></span></li>
                                <li>This animal has a minimum length of <span id="length_min"></span> and a maximum length of <span
                                    id="length_max"></span></li>
                                <li>This animal has a minimum weight of <span id="weight_min"></span> and a maximum weight of <span
                                    id="weight_max"></span></ li>
                                <li>This animal's habitat is the <span id="habitat"></span>, where it eats <span id="diet"></span>!</li>
                                <li> The geographical range of this animal is <span id="geo_range"></span>.</li>
                            </ol>
                    </div>
                    <div id="immagine">
                    <figure><img id="image_link" width="900px" height="600px"></img></figure>
                    </div>
            </section>
        );
    }

    getZoo = () => {
        this.zooService.get()
        .then(data => {
            this.JSONsetupZOO(data);
        });
    }

    constructor(){
        super()
        this.zooService = new ZooService();
    }

    JSONsetupZOO(elementoJSON)
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
}
/*
function animalRequest(){
//metodo XMLHttpRequest
//creo richiesta http
    let request=new XMLHttpRequest();
    request.open("GET", "https://random-d.uk/api/random");
    request.send();
    request.onload=() =>{
    if(request.status== 200){
        var animalJSON= JSON.parse(request.response);
        console.log(animalJSON);
        animalPresent(animalJSON);
    }else{
        console.log(`error $:{request.status} ${request.statusText}`);
    }
    }
}
function animalPresent(animalJSON){
    document.getElementById("image_link").src=animalJSON["url"];
}
*/
export default Curiosità;