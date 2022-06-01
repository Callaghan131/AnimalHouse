import React, {Component} from "react";

class Card extends Component{
    render(){
        return(
            <div className='col'>
                <div className="card" style={{width: '280px', height:"280px"}}>
                    <img src={this.props.card.immagine} className="card-img-top" height="130px" alt="..."/>
                        <div className="card-body">
                            {/* <h5 className="card-title">{this.props.card.tipo}</h5> */}
                            <p className="card-text" style={{fontStyle:"italic", fontSize:"15px", color:"#965059"}}>{this.props.card.descrizione}</p>
                            <button type="submit" style={{fontWeight:"bold", border:"2px solid black"}} onClick={()=>this.props.onClick(this.props.card.id)} className="btn">{this.props.card.bottone}</button>
                        </div>
                </div>
            </div>
        );
    }
}
export default Card;