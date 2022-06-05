import { toBeChecked } from "@testing-library/jest-dom/dist/matchers";
import React, {Component} from "react";
import EndGame from './EndGame';
import CardMemory from './cardMemory';
import BoxScore from "./boxScore";
import '../../css/memory.css';
import { withRouter } from '../../withRouter';



class Memory extends Component{

  

    state={
        CardMemory:[
            { id: 1, img: '', stat: "" },
            { id: 2, img: '', stat: "" },
            {  id: 3, img: '', stat: "" },
            {  id: 4, img: '', stat: "" },
            {  id: 5, img: '', stat: "" },
            {  id: 6, img: '', stat: "" },
            {  id: 7, img: '', stat: "" },
            {  id: 8, img: '', stat: "" },
            {  id: 9, img: '', stat: "" },
            {  id: 10, img: '', stat: "" },
            {  id: 11, img: '', stat: "" },
            {  id: 12, img: '', stat: "" },
            {  id: 13, img: '', stat: "" },
            { id: 14, img: '', stat: "" },
            {  id: 15, img: '', stat: "" },
            {  id: 16, img: '', stat: "" }
        ],
        prec: -1,
        punteggio: 0,
        trovati: 0,
        showEndGame:false,
        restart:true

    }

    componentWillMount() {
        var data=[];
        var newArray=[...this.state.CardMemory];
        fetch("https://zoo-animal-api.herokuapp.com/animals/rand/8")
          .then(res => res.json())
          .then(
            (result) => {
              data=result;
              var cont=0;
              for(var i=0; i<data.length;i++){
                newArray[cont]["img"]=data[i]["image_link"];
                newArray[cont+1]["img"]=data[i]["image_link"];
                cont+=2;
                
              }
              console.log(1);
              newArray.sort(()=>Math.random()-0.5);
              this.setState({CardMemory:newArray});
            }
        )

    }
    
    handleClick=(cardId)=>{
        
        
        if(this.state.prec==-1){
            const newArr=[...this.state.CardMemory];
            const prev=cardId;
            
            
            for(var i=0; i<newArr.length; i++){
                if(newArr[i].id==cardId){
                    newArr[i].stat="attivo";
                }
                
            }
            this.setState({CardMemory:newArr}); 
            this.setState({prec:prev});
            
        }
        else{
            
            this.check(cardId);
            
        }
    }

    check(idCorrente){
        const newArr=[...this.state.CardMemory];
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
            const score=parseInt([this.state.punteggio])+5;
            const find=parseInt([this.state.trovati])+2;
            
            this.setState({CardMemory:newArr});
            this.setState({prec:idPrev});
            this.setState({punteggio:score});
            this.setState({trovati:find});
            if(find==16){
                const endgame=true;
                this.setState({showEndGame:endgame});
            }

        }
        else{
            newArr[sceltaAttuale].stat="sbagliato";
            newArr[sceltaPrecedente].stat="sbagliato";
            const score=parseInt([this.state.punteggio])-1;
            this.setState({CardMemory:newArr});
            this.setState({punteggio:score});
           
            setTimeout(()=>{
                newArr[sceltaAttuale].stat="";
                newArr[sceltaPrecedente].stat="";
                this.setState({CardMemory:newArr});
                this.setState({prec:-1});
            }, 1000)
        }
    }

    handleEndGame=()=>{
        const newArr=[...this.state.CardMemory];
        for(var i=0; i<newArr.length; i++){
            newArr[i].stat="";
        }
        newArr.sort(()=>Math.random()-0.5);
        this.setState({CardMemory:newArr});
        this.setState({punteggio:0})
        this.setState({showEndGame:false});
        this.setState({prec: -1});
        this.setState({trovati:0});
    }

    handleGamePage=()=>{
        this.props.navigate("/GamePage");
    }

    render(){
        const { punteggio, showEndGame } = this.state;
     
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
                <BoxScore score={punteggio}/>
                {showEndGame ? <EndGame score={punteggio} onClick={this.handleEndGame} onClickGamePage={this.handleGamePage}/>:null }
            </div>
        );
    }
}
export default withRouter(Memory);