import React, {Component} from 'react';
import corda from '../../images/giochi/corda.jpg';
import gioco from '../../images/giochi/gioco.jpg';
import palla from '../../images/giochi/palla.jpg';
import piume from '../../images/giochi/piume.jpg';
import ruota from '../../images/giochi/ruota.jpg';
import tunnel from '../../images/giochi/tunnel.jpg';
import CardProdotto from "./CardProdotto";
import Navbar from "../navbar";
class Giochi extends Component{
     state={
        cardProdotto:[
            {
                id:0,
                immagine: corda,
                nome:"Corda per il tuo cane",
                prezzo:"2.99$",
                quantità: 0
            },
            {
                id:1,
                immagine: gioco,
                nome:"Gioco interattivo per il tuo gatto",
                prezzo:"15.99$",
                quantità: 0
            },
            {
                id:2,
                immagine: palla,
                nome:"Palla per il tuo cane",
                prezzo:"2.99$",
                quantità: 0
            },
            {
                id:3,
                immagine: piume,
                nome:"Bastoncino con piume per il tuo gatto",
                prezzo:"2.59$",
                quantità: 0
            },
            {
                id:4,
                immagine: ruota,
                nome:"Ruota per il tuo canarino",
                prezzo:"9.99$",
                quantità: 0
            },
            {
                id:5,
                immagine: tunnel,
                nome:"Tunnel per il tuo coniglio",
                prezzo:"29.99$",
                quantità: 0
            },
        ]
    }
    handleDelete=cardId=>{
        const updatedCards=this.state.cardProdotto.filter(card=>card.id !== cardId);
        this.setState({cardProdotto: updatedCards});
    }
    handleIncrement=cardProdotto=>{
        const updatedIncrementedCards=[...this.state.cardProdotto];
        const id=updatedIncrementedCards.indexOf(cardProdotto);
        updatedIncrementedCards[id]={...cardProdotto};
        updatedIncrementedCards[id].quantità++;
        this.setState({cardProdotto: updatedIncrementedCards});
    }
    render(){
        return(
            
        <><Navbar /><div className='container'>
                <h1 style={{ textAlign: "center", marginBottom: "50px" }}>Prodotti sanitari per animali</h1>
                <div className="row"  style={{display: "grid", gridTemplateColumns:"1fr 1fr 1fr"}}>
                    {this.state.cardProdotto.map(card => (
                        <CardProdotto
                            key={card.id}
                            cardProdotto={card}
                            onDelete={this.handleDelete}
                            onIncrement={this.handleIncrement} />
                    ))}
                </div>
            </div></>
    );
}
}
export default Giochi;