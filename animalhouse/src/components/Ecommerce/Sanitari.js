import React, {Component} from 'react';
import antiparass from '../../images/sanitari/antiparass.jpg';
import collare from '../../images/sanitari/collare.jpg';
import insetti from '../../images/sanitari/insetti.jpg';
import sfigmo from '../../images/sanitari/sfigmo.jpg';
import pannolini from '../../images/sanitari/pannolini.jpg';
import pelo from '../../images/sanitari/pelo.jpg';
import CardProdotto from "./CardProdotto";
import Navbar from "../navbar";
class Sanitari extends Component{
     state={
        cardProdotto:[
            {
                id:0,
                immagine: antiparass,
                nome:"Antiparassitario per il tuo cane",
                prezzo:"9.99$",
                quantità: 0
            },
            {
                id:1,
                immagine: collare,
                nome:"Collare rigido per il tuo cane",
                prezzo:"5.99$",
                quantità: 0
            },
            {
                id:2,
                immagine: insetti,
                nome:"Prodotto anti-zecche e pulci per i tuou animali",
                prezzo:"9.99$",
                quantità: 0
            },
            {
                id:3,
                immagine: pannolini,
                nome:"Pannolini per il tuo cane",
                prezzo:"5.59$",
                quantità: 0
            },
            {
                id:4,
                immagine: pelo,
                nome:"Pasta rimuovi pelo per il tuo gatto",
                prezzo:"9.99$",
                quantità: 0
            },
            {
                id:5,
                immagine: sfigmo,
                nome:"Sfigmomanomentro per i tuoi animali",
                prezzo:"19.99$",
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
export default Sanitari;