import React, {Component} from 'react';
import canarino from '../../images/cibi/canarino.jpg';
import coniglio from '../../images/cibi/coniglio.jpg';
import manzo from '../../images/cibi/manzo.jpg';
import manzosal from '../../images/cibi/manzosal.jpg';
import pesce from '../../images/cibi/pesce.jpg';
import pollotacch from '../../images/cibi/pollotacch.jpg';
import CardProdotto from "./CardProdotto";
import NavbarCarrello from './NavbarCarrello';
class Cibo extends Component{
     state={
        totale:0,
        cardProdotto:[
            {
                id:0,
                immagine: canarino,
                nome:"Cibo per il tuo canarino",
                prezzo:"1.99$",
                quantità: 0
            },
            {
                id:1,
                immagine: coniglio,
                nome:"Cibo per il tuo coniglio",
                prezzo:"2.99$",
                quantità: 0
            },
            {
                id:2,
                immagine: manzo,
                nome:"Cibo per il tuo cane (manzo)",
                prezzo:"0.99$",
                quantità: 0
            },
            {
                id:3,
                immagine: manzosal,
                nome:"Cibo per il tuo cane (manzo e salmone)",
                prezzo:"1.59$",
                quantità: 0
            },
            {
                id:4,
                immagine: pesce,
                nome:"Cibo per il tuo pesce",
                prezzo:"0.99$",
                quantità: 0
            },
            {
                id:5,
                immagine: pollotacch,
                nome:"Cibo per il tuo gatto",
                prezzo:"1.99$",
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
        var totale=parseFloat(this.state.totale);
        const prezzo=parseFloat(cardProdotto.prezzo);
        updatedIncrementedCards[id]={...cardProdotto};
        updatedIncrementedCards[id].quantità++;
        this.setState({cardProdotto: updatedIncrementedCards});
        totale+=prezzo;
        this.setState({totale:totale});
    }
    handleDecrement=cardProdotto=>{
        const updatedIncrementedCards=[...this.state.cardProdotto];
        const id=updatedIncrementedCards.indexOf(cardProdotto);
        var totale=parseFloat(this.state.totale);
        const prezzo=parseFloat(cardProdotto.prezzo);
        updatedIncrementedCards[id]={...cardProdotto};
        if(updatedIncrementedCards[id].quantità>0){
        updatedIncrementedCards[id].quantità--;
        totale-=prezzo;
        this.setState({cardProdotto: updatedIncrementedCards});
        this.setState({totale:totale});
    }
    }
    render(){
        const{totale}=this.state;
        return(
            
        <><NavbarCarrello totale={totale}/><div className='container'>
                <h1 style={{ textAlign: "center", marginBottom: "50px" }}>Cibi per animali</h1>
                <div className="row"  style={{display: "grid", gridTemplateColumns:"1fr 1fr 1fr"}}>
                    {this.state.cardProdotto.map(card => (
                        <CardProdotto
                            key={card.id}
                            cardProdotto={card}
                            onDelete={this.handleDelete}
                            onIncrement={this.handleIncrement} 
                            onDecrement={this.handleDecrement} />
                    ))}
                </div>
            </div></>
    );
}
}
export default Cibo;