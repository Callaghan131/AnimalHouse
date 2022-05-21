import React, {Component} from "react";

class CardSfondo extends Component{
    render(){
        return(
            <div className='col'>
                <div className="card" style={{width: '80rem'}}>
                    <img src={this.props.cardSfondo.immagine} className="card-img-top" height="400px" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{this.props.cardSfondo.tipo}</h5>
                            <p className="card-text">{this.props.cardSfondo.descrizione}</p>
                        </div>
                </div>
            </div>
        );
    }
}
export default CardSfondo;