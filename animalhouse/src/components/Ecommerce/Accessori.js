import React, {Component} from 'react';
import casetta from '../../images/accessori/casetta.jpg';
import castello from '../../images/accessori/castello.jpg';
import ciotola from '../../images/accessori/ciotola.jpg';
import cuccia from '../../images/accessori/cuccia.jpg';
import pettorina from '../../images/accessori/pettorina.jpg';
import sassi from '../../images/accessori/sassi.jpg';
import CardProdotto from "./CardProdotto";
import Navbar from "../navbar";
class Accessori extends Component{
     state={
        cardProdotto:[
            {
                id:0,
                immagine: casetta,
                nome:"Casetta per il tuo canarino",
                prezzo:"19.99$",
                quantità: 0
            },
            {
                id:1,
                immagine: castello,
                nome:"Gioco per il tuo gatto",
                prezzo:"49.99$",
                quantità: 0
            },
            {
                id:2,
                immagine: ciotola,
                nome:"Ciotola cibo per tutti gli animali",
                prezzo:"5.99$",
                quantità: 0
            },
            {
                id:3,
                immagine: cuccia,
                nome:"Cuccia per il tuo cane",
                prezzo:"15.59$",
                quantità: 0
            },
            {
                id:4,
                immagine: pettorina,
                nome:"Pettorina e guinzaglio per il tuo coniglio",
                prezzo:"9.99$",
                quantità: 0
            },
            {
                id:5,
                immagine: sassi,
                nome:"Sassi per decorare il tuo acquario",
                prezzo:"5.99$",
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
                <h1 style={{ textAlign: "center", marginBottom: "50px" }}>Accessori per animali</h1>
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
export default Accessori;