import Card from './card';
import React, {Component} from "react";
import ImmagineMemory from '../images/memory.jpg';
import ImmagineCuriosità from '../images/curiosity.jpg';
import { withRouter } from '../withRouter';
class GamePage extends Component{
    state={
      Cards:[
        {
          id:0,
          immagine:ImmagineMemory,
          tipo:"Memory",
          descrizione:"La memoria gioca brutti scherzi? Testate le vostre capacità con questo stimolante gioco!",
          bottone:"Memory"
        },
        {
          id:1,
          immagine:ImmagineCuriosità,
          tipo:"Curiosità",
          descrizione:"Arrichisci la tua conoscenza sugli animali con tanti brevi ma interessanti fatti",
          bottone:"Curiosità"
        }
      ],
  }
  handleClick=cardId=>{
    if(cardId==0){
      this.props.navigate('/GamePage/Memory');
      
    }
    else if(cardId==1){
      this.props.navigate('/GamePage/curiosity');
      
    }
  };
   render(){
    return (
      <>
      <h1>Area Giochi</h1>
      <div className='row'>
          {
            this.state.Cards.map(card=>(
              <Card
              key={card.id}
              onClick= {this.handleClick}
              card={card}
              />
            ))
          }
        </div>
      </>
    );
  }
}
export default withRouter(GamePage);