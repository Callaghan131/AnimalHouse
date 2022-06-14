import React, {Component} from "react";
import {Carousel} from 'react-bootstrap';
import sfondo from '../images/sfondo.jpg'
import volatile from '../images/volatile.jpg'
import tartaruga from '../images/tartaruga.jpg'
import cane from '../images/cane.jpg'

class CardSfondo extends Component{
    render(){
        return(
                // <><script src="/animalhouse/src/components/utilities/MemoryAPI.js"></script>
                //     <img style={{marginTop:"25px"}} src={this.props.cardSfondo.immagine} classNameName="card-img-top" id="message" height="400px" alt="..."/>
                //     {/* capire se vogliamo controllare testo per vedere che siano uguali e quindi aumentare punteggio oppure uso di soluzione alternativa */}
                //     {/* <p classNameName="card-text" id="message">{this.props.cardSfondo.descrizione}</p> */}</>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block"
                            style={{height: "100vh", width: "100vw", position:"relative", opacity:"0.6"}}
                            src={volatile}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block"
                            style={{height: "100vh", width: "100vw", position:"relative", opacity:"0.6"}}
                            src={tartaruga}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block"
                            style={{height: "100vh", width: "100vw", position:"relative", opacity:"0.6"}}
                            src={cane}
                            alt="First slide"
                        />
                    </Carousel.Item>
                </Carousel>
        );
    }
}
export default CardSfondo;