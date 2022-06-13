
import React, {Component} from 'react';
import corda from '../../images/giochi/corda.jpg';
import gioco from '../../images/giochi/gioco.jpg';
import palla from '../../images/giochi/palla.jpg';
import piume from '../../images/giochi/piume.jpg';
import ruota from '../../images/giochi/ruota.jpg';
import tunnel from '../../images/giochi/tunnel.jpg';
import casetta from '../../images/accessori/casetta.jpg';
import castello from '../../images/accessori/castello.jpg';
import ciotola from '../../images/accessori/ciotola.jpg';
import cuccia from '../../images/accessori/cuccia.jpg';
import pettorina from '../../images/accessori/pettorina.jpg';
import sassi from '../../images/accessori/sassi.jpg';
import canarino from '../../images/cibi/canarino.jpg';
import coniglio from '../../images/cibi/coniglio.jpg';
import manzo from '../../images/cibi/manzo.jpg';
import manzosal from '../../images/cibi/manzosal.jpg';
import pesce from '../../images/cibi/pesce.jpg';
import pollotacch from '../../images/cibi/pollotacch.jpg';
import antiparass from '../../images/sanitari/antiparass.jpg';
import collare from '../../images/sanitari/collare.jpg';
import insetti from '../../images/sanitari/insetti.jpg';
import sfigmo from '../../images/sanitari/sfigmo.jpg';
import pannolini from '../../images/sanitari/pannolini.jpg';
import pelo from '../../images/sanitari/pelo.jpg';
import { withRouter } from '../../withRouter';
import CardProdotto from "./CardProdotto";
import NavbarCarrello from './NavbarCarrello';
import Carrello from './Carrello';

import Sanitari from "./Sanitari";
import Cibo from "./Cibo";

class Ecommerce extends Component{
    state={
        totale:0,
        selectGiochi: false,
        selectAccessori: false,
        selectSanitari: false,
        selectCibo: false,
        selectCarrello: false,
        cardProdotto:[
            [
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
            }],
            [
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
            }
            ],
            [
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
            }
        ],
        [
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
            }
        ]
        ]
    }
    handleSelectGiochi(){
        this.setState({selectGiochi:true});
        this.setState({selectAccessori:false});
        this.setState({selectSanitari:false});
        this.setState({selectCibo:false});
    }
    handleSelectAccessori(){
        this.setState({selectGiochi:false});
        this.setState({selectAccessori:true});
        this.setState({selectSanitari:false});
        this.setState({selectCibo:false});
        this.setState({selectCarrello:false});
    }
    handleSelectSanitari(){
        this.setState({selectGiochi:false});
        this.setState({selectAccessori:false});
        this.setState({selectSanitari:true});
        this.setState({selectCibo:false});
        this.setState({selectCarrello:false});
        
    }
    handleSelectCibo(){
        this.setState({selectGiochi:false});
        this.setState({selectAccessori:false});
        this.setState({selectSanitari:false});
        this.setState({selectCibo:true});
        this.setState({selectCarrello:false});
    }
    handleSelectCarrello(){
        this.setState({selectGiochi:false});
        this.setState({selectAccessori:false});
        this.setState({selectSanitari:false});
        this.setState({selectCibo:false});
        this.setState({selectCarrello:true});

    }
    handleDelete=cardId=>{
        const updatedCards=this.state.cardProdotto.filter(card=>card.id !== cardId);
        this.setState({cardProdotto: updatedCards});
    }
    handleIncrement=(num,type)=>{
        const updatedIncrementedCards=[...this.state.cardProdotto];
        var totale=parseInt(this.state.totale);
        updatedIncrementedCards[type][num].quantità++;
        this.setState({cardProdotto: updatedIncrementedCards});
        // totale+=updatedIncrementedCards[type][num].quantità;
        totale+=1;
        this.setState({totale:totale});
    }
    handleDecrement=(num,type)=>{
        const updatedIncrementedCards=[...this.state.cardProdotto];
        var totale=parseInt(this.state.totale);
        if(updatedIncrementedCards[type][num].quantità>0){
        updatedIncrementedCards[type][num].quantità--;
        // totale-=updatedIncrementedCards[type][num].quantità;
        totale-=1
        this.setState({cardProdotto: updatedIncrementedCards});
        this.setState({totale:totale});
        }
    }

    render(){
        const{selectGiochi,selectAccessori,selectSanitari,selectCibo, selectCarrello}=this.state;
        const{totale}=this.state;
    return(
        <><NavbarCarrello
        onClickGiochi={this.handleSelectGiochi.bind(this)}
        onClickAccessori={this.handleSelectAccessori.bind(this)}
        onClickSanitari={this.handleSelectSanitari.bind(this)}
        onClickCibo={this.handleSelectCibo.bind(this)}
        onClickCarrello={this.handleSelectCarrello.bind(this)}
        totale={totale}/>
            <div className='container'>
                <div className="row" style={{display: "grid", gridTemplateColumns:"1fr 1fr 1fr", marginTop:"60px"}}>

                    {selectGiochi ? (
                        this.state.cardProdotto[0].map(card => (
                            <CardProdotto
                                key={card.id}
                                type={0}
                                cardProdotto={card}
                                onDelete={this.handleDelete}
                                onIncrement={this.handleIncrement} 
                                onDecrement={this.handleDecrement}/>
                        ))) : (
                        selectAccessori ? (this.state.cardProdotto[1].map(card => (
                            <CardProdotto
                                key={card.id}
                                type={1}
                                cardProdotto={card}
                                onDelete={this.handleDelete}
                                onIncrement={this.handleIncrement} 
                                onDecrement={this.handleDecrement}/>
                        ))) : (
                            selectCibo ? (    
                            this.state.cardProdotto[2].map(card => (
                            <CardProdotto
                                key={card.id}
                                type={2}
                                cardProdotto={card}
                                onDelete={this.handleDelete}
                                onIncrement={this.handleIncrement} 
                                onDecrement={this.handleDecrement}/>
                        ))) : (
                                selectSanitari ? (this.state.cardProdotto[3].map(card => (
                            <CardProdotto
                                key={card.id}
                                type={3}
                                cardProdotto={card}
                                onDelete={this.handleDelete}
                                onIncrement={this.handleIncrement} 
                                onDecrement={this.handleDecrement}/>
                        ))) : selectCarrello ? (
                            <Carrello/>
                        ):null
                        )))
                        
                        
                    }
                </div>
            </div>
        </>
    );
    }   
}
export default withRouter(Ecommerce);