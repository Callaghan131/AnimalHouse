import React, {Component} from "react";
class Card extends Component{
    render(){
        return(
            <div className='col'>
                <div className="card" style={{width: '35rem'}}>
                    <img src={this.props.immagine} className="card-img-top" height="450px" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{this.props.tipo}</h5>
                            <p className="card-text">{this.props.descrizione}</p>
                            <button className="btn btn-primary">{this.props.tipoBottone}</button>
                        </div>
                </div>
            </div>
        );
    }
}
export default Card;