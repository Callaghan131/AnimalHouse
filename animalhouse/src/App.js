import './App.css';
import Navbar from './components/navbar';
import Card from './components/card';
import ImmagineGame from './images/game.jpg';
import ImmagineLogin from './images/immagine.jpg';
import React, {Component} from "react";

class App extends Component {
  state={
    Cards:[
      {
        id:0,
        immagine:ImmagineGame,
        tipo:"Game",
        descrizione:"Metti alla prova le tue capacità con tanti giochi a tema animale!",
        bottone:"Gioco"
      },
      {
        id:1,
        immagine:ImmagineLogin,
        tipo:"Login",
        descrizione:"Registrati per ottenere tante altre funzionalità!",
        bottone:"Login"
      }
    ]
  }
  render(){
    return (
    <>
    <Navbar/>
    <div className='container'>
      <h1>La pagina preferita dagli amanti degli animali!</h1>
      <div className='row'>
        {
          this.state.Cards.map(card=>(
            <Card
            key={card.id}
            immagine={card.immagine}
            tipo={card.tipo}
            descrizione={card.descrizione}
            tipoBottone={card.bottone}
            />
          ))
        }
      </div>
    </div>
    </>
  );
  }
}

export default App;
