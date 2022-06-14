import Card from './card';
import React, {Component} from "react";
import ImmagineMemory from '../images/memory.jpg';
import ImmagineCuriosità from '../images/curiosity.jpg';
import ImmagineBuffa from '../images/immagineBuffa.jpg';
import VideoBuffi from '../images/videoBuffi.jpg';
import Quiz from '../images/quiz.jpg';
import { withRouter } from '../withRouter';
import Navbar from './navbar';
class GamePage extends Component{
    state={
      Cards1:[
        { id:1,
          immagine:ImmagineCuriosità,
          tipo:"Curiosità",
          descrizione:"Arrichisci la tua conoscenza sugli animali con tante curiosità e brevi fatti a tema",
          bottone:"Curiosità"
        },
        {
          id:2,
          immagine:ImmagineBuffa,
          tipo:"ImgBuffe",
          descrizione:"Ti piace immortalare momenti buffi dei tuoi animali? Ecco ciò che fa al caso tuo",
          bottone:"Immagini",
        },
        {
          id:3,
          immagine:VideoBuffi,
          tipo:"VideoBuffi",
          descrizione:"Prendi i pop-corn e mettiti comodo perchè qui troverai dei brevi video buffi a tema animale",
          bottone:"Video"
        }

      ],
      Cards2:[
        {
          id:0,
          immagine:ImmagineMemory,
          tipo:"Memory",
          descrizione:"La memoria gioca brutti scherzi? Testate le vostre capacità con questo stimolante gioco!",
          bottone:"Memory"
        },
        {
          id:4,
          immagine:Quiz,
          tipo:"Quiz",
          descrizione:"Credi di sapere tutto sul mondo animale? Mettiti alla prova e rispondi a delle semplici domande",
          bottone:"Quiz"
        }
      ]
  }
  handleClick=cardId=>{
    if(cardId==0){
      this.props.navigate('/GamePage/Memory');
      
    }
    else if(cardId==1){
      this.props.navigate('/GamePage/curiosity2');
      
    }
    else if(cardId==2){
      this.props.navigate('/GamePage/immaginiBuffe');
      
    }else if(cardId==3){
      this.props.navigate('/GamePage/videoBuffi');
      
    }else if(cardId==4){
      this.props.navigate('/GamePage/Quiz'); 
    }
  };

  handleReturnHomePage=()=>{
    this.props.navigate('/');
  }

   render(){
    return (
      <>
      <Navbar click={this.handleReturnHomePage}></Navbar>
      <div className='row' style={{ marginTop:"3vh", marginLeft:"330px",width:"50vw",textAlign:"center", display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gridTemplateRows: "1fr", gridGap:"20px"}}>
          {
            this.state.Cards1.map(card=>(
              <Card
              key={card.id}
              onClick= {this.handleClick}
              card={card}
              />
            ))
          }
        </div>
         <div className='row' style={{ marginLeft:"500px",marginTop:"50px",width:"40vw",textAlign:"center", display:"grid", gridTemplateColumns:"1fr 1fr", gridTemplateRows: "1fr"}}>
          {
            this.state.Cards2.map(card=>(
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