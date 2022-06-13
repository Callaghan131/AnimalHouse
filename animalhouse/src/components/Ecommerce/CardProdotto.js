import React, {Component} from 'react';
class CardProdotto extends Component{
    render(){
    return(
        <div className="col">
            <div className="card" style={{width: "300px", height:"400px", textAlign:"center", marginBottom:"30px"}}>
                <div className="bottoni" style={{display:"grid", gridTemplateColumns:"1fr 1fr"}}>
                <button className="btn btn-primary" onClick={()=>this.props.onIncrement(this.props.cardProdotto)}>
                    Aggiungi<span style={{marginLeft:"10px",background:"white",color:"black"}}className="badge badge-light">{this.props.cardProdotto.quantità}</span></button>
                <button className="btn btn-danger" onClick={()=>this.props.onDecrement(this.props.cardProdotto)}>
                    Rimuovi<span style={{marginLeft:"10px",background:"white",color:"black"}}className="badge badge-light">{this.props.cardProdotto.quantità}</span></button>
                </div>
                <img src={this.props.cardProdotto.immagine} style={{maxHeight:"50%", objectFit:"contain"}} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{this.props.cardProdotto.nome}</h5>
                    <p className="card-text">{this.props.cardProdotto.prezzo}
                    </p>
                    <button className="btn btn-outline-danger" onClick={()=>this.props.onDelete(this.props.cardProdotto.id)}>Elimina</button>
                </div>
            </div>
        </div>
    );
}
}
export default CardProdotto;