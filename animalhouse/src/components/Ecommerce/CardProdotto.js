import React, {Component} from 'react';
class CardProdotto extends Component{
    render(){
        const data=this.props.cardProdotto.immagine;
    return(
        <div className="col">
            <div className="card" style={{width: "25vw", height:"42vh", textAlign:"center", marginBottom:"30px"}}>
                <div className="bottoni" style={{display:"grid", gridTemplateColumns:"1fr 1fr"}}>
                <button className="btn btn-primary" onClick={()=>this.props.onIncrement(this.props.cardProdotto.id, this.props.type)}>
                    Aggiungi<span style={{marginLeft:"10px",background:"white",color:"black"}}className="badge badge-light">{this.props.cardProdotto.quantità}</span></button>
                <button className="btn btn-danger" onClick={()=>this.props.onDecrement(this.props.cardProdotto.id, this.props.type)}>
                    Rimuovi<span style={{marginLeft:"10px",background:"white",color:"black"}}className="badge badge-light">{this.props.cardProdotto.quantità}</span></button>
                </div>
                <img src={`data:image/jpeg;base64,${data}`} style={{maxHeight:"50%", objectFit:"contain"}} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title" style={{fontSize:"16px"}}>{this.props.cardProdotto.nome}</h5>
                    <p className="card-text">{this.props.cardProdotto.prezzo}</p>
                    <p className="card-text">{this.props.cardProdotto.disponibilità} pz</p>
                   
                </div>
            </div>
        </div>
    );
    }

    // Base64ToImage=(base64img, callback)=> {
    //     var img = new Image();
    //     img.onload = function() {
    //         callback(img);
    //     };
    //     img.src = base64img;
    // }
}
export default CardProdotto;