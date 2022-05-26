import React, {Component} from "react";

class CardSfondo extends Component{
    render(){
        return(
            <div className='col'>
                <script src="/animalhouse/src/components/utilities/MemoryAPI.js"></script>
                <div className="card" style={{width: '80rem'}}>
                    <img src={this.props.cardSfondo.immagine} className="card-img-top" id="message" height="400px" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{this.props.cardSfondo.tipo}</h5>
                            <p className="card-text">{this.props.cardSfondo.descrizione}</p>
                            {/* capire se vogliamo controllare testo per vedere che siano uguali e quindi aumentare punteggio oppure uso di soluzione alternativa */}
                            {/* <p className="card-text" id="message">{this.props.cardSfondo.descrizione}</p> */}  
                        </div>
                </div>
            </div>
        );
    }
}
export default CardSfondo;