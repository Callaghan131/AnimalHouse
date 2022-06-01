import React, {Component} from "react";

class CardSfondo extends Component{
    render(){
        return(
                <><script src="/animalhouse/src/components/utilities/MemoryAPI.js"></script>
                    <img style={{marginTop:"25px"}} src={this.props.cardSfondo.immagine} className="card-img-top" id="message" height="400px" alt="..."/>
                    {/* capire se vogliamo controllare testo per vedere che siano uguali e quindi aumentare punteggio oppure uso di soluzione alternativa */}
                    {/* <p className="card-text" id="message">{this.props.cardSfondo.descrizione}</p> */}</>
        );
    }
}
export default CardSfondo;