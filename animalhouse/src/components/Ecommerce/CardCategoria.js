import React, {Component} from 'react';
class CardCategoria extends Component{
    render(){
    return(
        <div className="col">
            <div className="card" style={{width: "300px", height:"350px", textAlign:"center"}}>
                <img src={this.props.cardCategoria.immagine} style={{height:"200px"}} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{this.props.cardCategoria.nome}</h5>
                    <p className="card-text">{this.props.cardCategoria.descrizione}
                    </p>
                    <button className="btn btn-primary" onClick={()=>this.props.onClick(this.props.cardCategoria.id)}>{this.props.cardCategoria.bottone}</button>
                </div>
            </div>
        </div>
    );
}
}
export default CardCategoria;