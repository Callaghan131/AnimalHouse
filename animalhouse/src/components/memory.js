import { toBeChecked } from "@testing-library/jest-dom/dist/matchers";
import React, {Component} from "react";
import {useState} from "react";
import CardMemory from './cardMemory';
import '../css/memory.css';
import ImmagineCuriosità from '../images/curiosity.jpg';

class Memory extends Component{
    state={
        CardMemory:[
            { id: 1, img: '/immagini/asparagi.jpg', stat: "" },
            { id: 2, img: '/immagini/asparagi.jpg', stat: "" },
            {  id: 3, img: '/immagini/casetta.jpg', stat: "" },
            {  id: 4, img: '/immagini/casetta.jpg', stat: "" },
            {  id: 5, img: '/immagini/cetrioli.jpg', stat: "" },
            {  id: 6, img: '/immagini/cetrioli.jpg', stat: "" },
            {  id: 7, img: '/immagini/decespugliatore.jpg', stat: "" },
            {  id: 8, img: '/immagini/decespugliatore.jpg', stat: "" },
            {  id: 9, img: '/immagini/rasaerba.jpg', stat: "" },
            {  id: 10, img: '/immagini/rasaerba.jpg', stat: "" },
            {  id: 11, img: '/immagini/game.jpg', stat: "" },
            {  id: 12, img: '/immagini/game.jpg', stat: "" },
            {  id: 13, img: '/immagini/curiosity.jpg', stat: "" },
            { id: 14, img: '/immagini/curiosity.jpg', stat: "" },
            {  id: 15, img: '/immagini/scimpanze.jpg', stat: "" },
            {  id: 16, img: '/immagini/scimpanze.jpg', stat: "" }
        ].sort(()=>Math.random()-0.5),
        prec: -1,
        indovinati: 0

    }
    
    handleClick=(cardId)=>{
        
        
        if(this.state.prec==-1){
            const newArr=[...this.state.CardMemory];
            const prev=cardId;
            
            console.log(newArr);
            for(var i=0; i<newArr.length; i++){
                if(newArr[i].id==cardId){
                    newArr[i].stat="attivo";
                }
                
            }
            this.setState({CardMemory:newArr}); 
            this.setState({prec:prev});
            console.log("index: "+cardId);
        }
        else{
            console.log("index: "+cardId);
            this.check(cardId);
            
        }
    }

    check(idCorrente){
        const newArr=[...this.state.CardMemory];
        console.log(newArr);
        const idPrec=[this.state.prec];
        var img1;
        var img2;
        var sceltaAttuale;
        var sceltaPrecedente;

        /**
         * Si ricava l'immagine della card appena selezionata e di quella selezionata precedentemente.
         * Si memorizza anche la posizione degli oggetti all'interno dell'array che comprende tutte le carte
         */
        for(var i=0; i<newArr.length;i++){
            if(newArr[i].id==idCorrente){
                img1=newArr[i].img;
                sceltaAttuale=i;
            }
            else if(newArr[i].id==idPrec){
                img2=newArr[i].img;
                sceltaPrecedente=i;
            }
        }

        /**
         * Se i percorsi delle due immagini corrispondono, allora viene settato lo stato delle due card a corretto,
         * e viene reimpostato l'idPrec a -1 per far si che l'utente faccia un'altra selezione di due card.
         * Se i percorsi delle due immagini non corrispondono, allora viene settato lo stato delle due card a sbagliato e
         * attraverso setTimout per un secondo viene impostato lo stato delle due card a vuoto in modo tale che queste vengono 
         * temporaneamente colorate di rosso per mostrare all'utente l'errore (la parte di visualizzazione viene gestita da css).
         */
        if(img1==img2){
            newArr[sceltaAttuale].stat="corretto";
            newArr[sceltaPrecedente].stat="corretto";
            const idPrev=-1;
            const numTrovati=[this.state.prec]+2;
            this.setState({CardMemory:newArr});
            this.setState({prec:idPrev});
            this.setState({trovati:numTrovati});
            console.log("corretto");
        }
        else{
            newArr[sceltaAttuale].stat="sbagliato";
            newArr[sceltaPrecedente].stat="sbagliato";
            this.setState({CardMemory:newArr});
           
            setTimeout(()=>{
                newArr[sceltaAttuale].stat="";
                newArr[sceltaPrecedente].stat="";
                this.setState({CardMemory:newArr});
                this.setState({prec:-1});
            }, 1000)
        }
    }

    startTimer(){
        var s = 0, m = 0,  h = 0;
        var interval = setInterval(function(){
        var timer=document.getElementById("timer");
        timer.innerHTML = 'Tempo: ' + m + " min " + s + " sec";
          s++;
          if(s == 60){
            m++;
            console.log(m);
            s = 0;
          }
          if(m == 60){
            h++;
            m = 0;
          }
        },1000);
    }

    render(){
        
        return(
            <div id="sfondo">
                <div className="conteiner" id="memory">
                {
                    
                    this.state.CardMemory.map((card, index)=>(
                        
                        <CardMemory
                        key={index}
                        card={card}
                        onClick={this.handleClick}
                        />
                        
                    ))
                }
                </div>
                <div className="timer" id="timer"></div>
            </div>
        );
    }
}
export default Memory;