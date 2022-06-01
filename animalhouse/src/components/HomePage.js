import Navbar from './navbar';
import CardSfondo from './cardSfondo';
import ImmagineSfondo from '../images/sfondo.jpg';
import React, {Component} from "react";
import { withRouter } from '../withRouter';
import Bottone from './Button';


class HomePage extends Component {
  state={
    CardSfondo:[
      {
        id:0,
        immagine:ImmagineSfondo,
        descrizione:"Da sempre Animal House si occupa di sviluppare software per prodotti e servizi per animali domestici. Metti alla prova le tue capacità all'interno dell'area game con tanti giochi divertenti e accedi con le tue credenziali alla tua area personale per poter interagire con altri amanti degli animali."
        
      }
    ],
    Bottone:[
      {
        id:1,
        tipo:"Game",
      },
      {
        id:2,
        tipo:"Login"
      }
    ]
  }

  handleClick=cardId=>{
    if(cardId==1){
      this.props.navigate('/GamePage');
      
    }
    else if(cardId==2){
      this.props.navigate('/LoginPage');
      
    }
  };

  render(){
    return (
      <>
      <Navbar/>
        <h1 style={{textAlign:"center", color:"white"}}>La pagina preferita dagli amanti degli animali!</h1>
        <div className='container'>
         {
          this.state.Bottone.map(bottone=>(
            <Bottone
            key={bottone.id}
            bottone={bottone}
            onClick={this.handleClick}
            />
          ))}
          {
            this.state.CardSfondo.map(cardSfondo=>(
              <CardSfondo
              key={cardSfondo.id}
              cardSfondo={cardSfondo}
              />
            ))}
      </div>
      </>
    );
  }
}

export default withRouter(HomePage);
