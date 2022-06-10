import CardCategoria from "./CardCategoria";
import Navbar from "../navbar";
import React, {Component} from 'react';
import accessori from '../../images/accessori.jpg';
import giochi from '../../images/giochi.jpg';
import sanitari from '../../images/sanitari.jpg';
import cibo from '../../images/cibo.jpeg';
import { withRouter } from '../../withRouter';

class Ecommerce extends Component{
    state={
        cardCategoria:[
            {
                id:0,
                immagine: cibo,
                nome:"Cibo per animali",
                descrizione:"Sazia i tuoi animali",
                bottone: "Cibo",
            },
            {
                id:1,
                immagine: giochi,
                nome: "Giochi per animali",
                descrizione: "Fai divertire i tuoi animali",
                bottone: "Giochi",
            },
            {
                id:2,
                immagine: sanitari,
                nome:"Prodotti sanitari per animali",
                descrizione: "Prenditi cura dei tuoi animali",
                bottone: "Prodotti sanitari",
            },
            {
                id:3,
                immagine: accessori,
                nome:"Accessori per animali",
                descrizione: "Accessori per i tuoi animali",
                bottone: "Accessori",
            }
        ]
    }
    handleClick=cardCategoriaId=>{
    if(cardCategoriaId==0){
      this.props.navigate('/Ecommerce/Cibo');
      
    }
    else if(cardCategoriaId==1){
       this.props.navigate('/Ecommerce/Giochi');
      
     }
     else if(cardCategoriaId==2){
       this.props.navigate('/Ecommerce/Sanitari');
      
     }else if(cardCategoriaId==3){
       this.props.navigate('/Ecommerce/Accessori');
      
     }
  };
    render(){
    return(
        <><Navbar/>
        <div className='container'>
            <h1 style={{textAlign:"center", marginBottom:"50px"}}>Ecco la sezione shop di Animal House</h1>
            <div className="row">
                {this.state.cardCategoria.map(card=>(
                    <CardCategoria
                    key={card.id}
                    onClick= {this.handleClick}
                    cardCategoria={card}/>
                ))}
            </div>
        </div>
        </>
    );
}
}
export default withRouter(Ecommerce);