import React, {Component} from "react";

class Curiosità extends Component{
    render(){
        return(
            <section id="animal">
                <script src="./utilities/ZooAPI.js"></script>
                <div className="primaRiga">
                        <p id="titolo">Nome dell'animale: <span id="name"></span></p>
                        <button id="btn" className="button-1" type="button" /*onClick={requestZOO()}*/>Nuovo animale</button>
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
                    <figure><img id="image_link"></img></figure>
                    </div>
            </section>
                );
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