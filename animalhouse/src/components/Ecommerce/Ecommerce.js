
import React, {Component} from 'react';
import { withRouter } from '../../withRouter';
import CardProdotto from "./CardProdotto";
import NavbarCarrello from './NavbarCarrello';
import Carrello from './Carrello';
import {EcommerceService} from '../admin/service/EcommerceService';


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
        fetch("http://localhost:2800/magazzino")
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
    handleIncrement=(num,type)=>{
        const updatedIncrementedCards=[...this.state.cardProdotto];
        var totale=parseInt(this.state.totale);
        var prezzo=parseFloat(this.state.prezzo)
        if(updatedIncrementedCards[type][num].disponibilità>0){
            updatedIncrementedCards[type][num].quantità++;
            updatedIncrementedCards[type][num].disponibilità--;
            this.setState({cardProdotto: updatedIncrementedCards});
            prezzo+=parseFloat(updatedIncrementedCards[type][num].prezzo);
            
            totale+=1;
            this.addProductToCart(updatedIncrementedCards[type][num],type);
            this.setState({totale:totale});
            this.setState({prezzo:prezzo})
        }
    }

    addProductToCart=(product,type)=>{
        const carrello=[...this.state.cart];
        var presente=false;
        var cont=0;

        if(carrello.length==0){
            var obj={
                nome:product.nome,
                img:product.immagine,
                categoria: type,
                id: product.id,
                prezzo:parseFloat(product.prezzo),
                quantita: parseInt(product.quantità)
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
                    categoria: type,
                    id: product.id,
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
        updatedIncrementedCards[type][num].disponibilità++;
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

    handleBuy=()=>{
        var carrello=[...this.state.cart];
        var product=[...this.state.cardProdotto];
        let shopService=new EcommerceService();
        for(var i=0;i<carrello.length;i++){
            var cat=Number(carrello[i].categoria);
            var id=Number(carrello[i].id);
            console.log(product[cat][id]);
            product[cat][id].quantità=0;
            shopService.product(product[cat][id],id,cat)
            .then(data =>{
                switch(data.status)
                {
                    case 200:
                        alert("Acquisto avvenuto correttamente");
                        carrello=[];
                        this.setState({cart:carrello});
                        this.setState({totale:0});
                        this.setState({prezzo:0});
                }
            });
        }
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
                <div className="row" style={{display: "grid", gridTemplateColumns:"1fr 1fr 1fr", marginTop:"10px"}}>

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
                            onBuy={this.handleBuy}
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