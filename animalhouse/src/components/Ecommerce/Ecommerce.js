
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
import Magazzino from '../../JSON/magazzino.json'

import Sanitari from "./Sanitari";
import Cibo from "./Cibo";

class Ecommerce extends Component{
    state={
        totale:0,
        prezzo:0,
        selectGiochi: true,
        selectAccessori: false,
        selectSanitari: false,
        selectCibo: false,
        selectCarrello: false,
        cart:[],
        cardProdotto:[],
        loaded: false
      
    }

    componentWillMount=()=>{
        var data=[];
        var newArray=[...this.state.cardProdotto];
        fetch("http://localhost:2700/magazzino")
          .then(res => res.json())
          .then(
            (result) => {
              data=result;
              var cont=0;
              for(var i=0; i<data.length;i++){
                newArray.push(data[i])
                
              }
              console.log(1);
              this.setState({cardProdotto:newArray});
              this.setState({loaded:true})
            }
        )
        // console.log(Magazzino);
        // for(var i=0; i<Magazzino.length;i++){
        //     newArray.push(Magazzino[i]);
        // }
        // this.setState({cardProdotto:newArray});
        // this.setState({loaded:true})
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
        var prezzo=parseFloat(this.state.prezzo)
        updatedIncrementedCards[type][num].quantità++;
        this.setState({cardProdotto: updatedIncrementedCards});
        prezzo+=parseFloat(updatedIncrementedCards[type][num].prezzo);
        
        totale+=1;
        this.addProductToCart(updatedIncrementedCards[type][num]);
        this.setState({totale:totale});
        this.setState({prezzo:prezzo})
    }

    addProductToCart=(product)=>{
        const carrello=[...this.state.cart];
        var presente=false;
        var cont=0;

        if(carrello.length==0){
            var obj={
                nome:product.nome,
                img:product.immagine,
                prezzo:parseFloat(product.prezzo),
                quantita: product.quantità
            }
            carrello.push(obj);
        }
        else{
            for(var i=0; i<carrello.length;i++){
                if(carrello[i].nome==product.nome){
                    presente=true;
                    cont=i;
                }
            }
    
            if(!presente){
                var obj={
                    nome:product.nome,
                    img:product.immagine,
                    prezzo:parseFloat(product.prezzo),
                    quantita: parseInt(product.quantità)
                }
                carrello.push(obj);
            }
            else{
                console.log("prezzo: "+carrello[cont].prezzo)
                carrello[cont].prezzo+=parseFloat(product.prezzo)
                carrello[cont].quantita+=1
                
            }
        }

        console.log(carrello)
        this.setState({cart:carrello})
        console.log(this.state.cart);

        
    }

    handleDecrement=(num,type)=>{
        const updatedIncrementedCards=[...this.state.cardProdotto];
        var totale=parseInt(this.state.totale);
        var prezzo=parseFloat(this.state.prezzo);
        if(updatedIncrementedCards[type][num].quantità>0){
        updatedIncrementedCards[type][num].quantità--;
        prezzo-=parseFloat(updatedIncrementedCards[type][num].prezzo);
        totale-=1
        this.deleteProductToCart(updatedIncrementedCards[type][num])
        this.setState({cardProdotto: updatedIncrementedCards});
        this.setState({totale:totale});
        this.setState({prezzo:prezzo})
        }
    }

    deleteProductToCart=(product)=>{
        const carrello=[...this.state.cart];
        var cont=0;
        

        for(var i=0; i<carrello.length;i++){
            if(carrello[i].nome==product.nome){
                carrello[i].quantita-=1
                carrello[i].prezzo-=parseFloat(product.prezzo)
                cont=i;
            }
        }

        if(carrello[cont].quantita==0){
            carrello.splice(cont,1);
        }

       

        console.log(carrello)
        this.setState({cart:carrello})
        console.log(this.state.cart);

        
    }



    render(){
        const{selectGiochi,selectAccessori,selectSanitari,selectCibo, selectCarrello, cart, totale, prezzo, loaded}=this.state;
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

                    {loaded ? (selectGiochi ? (
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
                            <Carrello
                            itemCart={cart}
                            prezzo={prezzo}
                            />
                        ):null
                        )))
                        
                        
                    ):null}
                    
                </div>
            </div>
        </>
    );
    }   
}
export default withRouter(Ecommerce);