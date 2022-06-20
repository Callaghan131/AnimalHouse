import React, {Component} from "react";
import Navbar from '../navbar';
import { withRouter } from '../../withRouter';
import Question from './Question';
import Answer from './Answer';
import BoxUsername from "../../BoxUsername";
import ScoreQuiz from "./ScoreQuiz";
import '../../css/quiz.css';
import { QuizService } from "./service/QuizService";

class QuizPage extends Component{
    state={
        quiz:[
            {
                testoDomanda:"What's animal's name in the photo?",
                opzioniRisposte: [
                    {id:0, testoRisposta: "", corretto:false},
                    {id:1, testoRisposta: "", corretto:false},
                    {id:2, testoRisposta: "", corretto:false},
                    {id:3, testoRisposta: "", corretto:false}
                ],
                img:""
            },
            {
                testoDomanda:"What's the latin name of the animal in the photo?",
                opzioniRisposte: [
                    {id:0, testoRisposta: "", corretto:false},
                    {id:1, testoRisposta: "", corretto:false},
                    {id:2, testoRisposta: "", corretto:false},
                    {id:3, testoRisposta: "", corretto:false}
                ],
                img:""
            },
            {
                testoDomanda:"What kind of animal is it?",
                opzioniRisposte: [
                    {id:0, testoRisposta: "", corretto:false},
                    {id:1, testoRisposta: "", corretto:false},
                    {id:2, testoRisposta: "", corretto:false},
                    {id:3, testoRisposta: "", corretto:false}
                ],
                img:""
            },
            {
                testoDomanda:"What's the lenght of this animal?(m)",
                opzioniRisposte: [
                    {id:0, testoRisposta: "", corretto:false},
                    {id:1, testoRisposta: "", corretto:false},
                    {id:2, testoRisposta: "", corretto:false},
                    {id:3, testoRisposta: "", corretto:false}
                ],
                img:""
            },
            {
                testoDomanda:"How heavy is the animal?(kg)",
                opzioniRisposte: [
                    {id:0, testoRisposta: "", corretto:false},
                    {id:1, testoRisposta: "", corretto:false},
                    {id:2, testoRisposta: "", corretto:false},
                    {id:3, testoRisposta: "", corretto:false}
                ],
                img:""
            },
            {
                testoDomanda:"How long does the animal's life last?",
                opzioniRisposte: [
                    {id:0, testoRisposta: "", corretto:false},
                    {id:1, testoRisposta: "", corretto:false},
                    {id:2, testoRisposta: "", corretto:false},
                    {id:3, testoRisposta: "", corretto:false}
                ],
                img:""
            },
            {
                testoDomanda:"What's the animal's natural habitat ?",
                opzioniRisposte: [
                    {id:0, testoRisposta: "", corretto:false},
                    {id:1, testoRisposta: "", corretto:false},
                    {id:2, testoRisposta: "", corretto:false},
                    {id:3, testoRisposta: "", corretto:false}
                ],
                img:""
            },
            {
                testoDomanda:"What does the animal in the photo eat?",
                opzioniRisposte: [
                    {id:0, testoRisposta: "", corretto:false},
                    {id:1, testoRisposta: "", corretto:false},
                    {id:2, testoRisposta: "", corretto:false},
                    {id:3, testoRisposta: "", corretto:false}
                ],
                img:""
            },
            {
                testoDomanda:"Where does the animal live?",
                opzioniRisposte: [
                    {id:0, testoRisposta: "", corretto:false},
                    {id:1, testoRisposta: "", corretto:false},
                    {id:2, testoRisposta: "", corretto:false},
                    {id:3, testoRisposta: "", corretto:false}
                ],
                img:""
            }

        ].sort(()=>Math.random()-0.5),
        currentQuestion: 0,
        score:0,
        showScore: false,
        insertUsername:true,
        currentPlayer:""
    }

    componentWillMount=()=>{
        this.getData();
        console.log("ciao");
    }

    /**
     * metodo che si occupa di ricavare i dati dall'API.
     * Questa API genera 9 oggetti JSON ognuno dei quali rappresenta un animale diverso 
     */
    getData=()=>{
        var data=[];
        var newArray=[...this.state.quiz];
       
        fetch("https://zoo-animal-api.herokuapp.com/animals/rand/9")
          .then(res => res.json())
          .then(
            (result) => {
              data=result;
              this.setAllQuestion(newArray, data);
              console.log(data);
            }
        )
        

    }

    /**
     * Questo metodo si occupa di settare le 4 opzioni per ogni domanda 
     * contenute nell'array quiz.
     * La domanda è relativa sempre al primo oggetto della lista "data" (rappresenta gli animali
     * restituiti tramite API), la quale cambia il 
     * prorpio ordine dinamicamente in modo tale da permettere che ogni animale possa avere una domanda 
     * ad esso associata
     */
    setAllQuestion=(newArr, data)=>{
        for(var i=0; i<newArr.length; i++){
            switch(newArr[i].testoDomanda){
                case "What's animal's name in the photo?":
                    this.setQuestion(newArr[i].opzioniRisposte, data, "name");
                    newArr[i].img=data[0]["image_link"];
                    var element=data[0];
                    data.shift();
                    data.push(element);
                    break;
                case "What's the latin name of the animal in the photo?":
                    this.setQuestion(newArr[i].opzioniRisposte, data, "latin_name");
                    newArr[i].img=data[0]["image_link"];
                    var element=data[0];
                    data.shift();
                    data.push(element);
                    break;
                case "What kind of animal is it?":
                    this.setQuestion(newArr[i].opzioniRisposte, data, "animal_type");
                    newArr[i].img=data[0]["image_link"];
                    var element=data[0];
                    data.shift();
                    data.push(element);
                    break;
                case "What's the lenght of this animal?(m)":
                    this.setQuestion(newArr[i].opzioniRisposte, data, "length_max");
                    newArr[i].img=data[0]["image_link"];
                    var element=data[0];
                    data.shift();
                    data.push(element);
                    break;
                case "How heavy is the animal?(kg)":
                    this.setQuestion(newArr[i].opzioniRisposte, data, "weight_max");
                    newArr[i].img=data[0]["image_link"];
                    var element=data[0];
                    data.shift();
                    data.push(element);
                    break;
                case "How long does the animal's life last?":
                    this.setQuestion(newArr[i].opzioniRisposte, data, "lifespan");
                    newArr[i].img=data[0]["image_link"];
                    var element=data[0];
                    data.shift();
                    data.push(element);
                    break;
                case "What's the animal's natural habitat ?":
                    this.setQuestion(newArr[i].opzioniRisposte, data, "habitat");
                    newArr[i].img=data[0]["image_link"];
                    var element=data[0];
                    data.shift();
                    data.push(element);
                    break;
                case "What does the animal in the photo eat?":
                    this.setQuestion(newArr[i].opzioniRisposte, data, "diet");
                    newArr[i].img=data[0]["image_link"];
                    var element=data[0];
                    data.shift();
                    data.push(element);
                    break;
                case "Where does the animal live?":
                    this.setQuestion(newArr[i].opzioniRisposte, data, "geo_range");
                    newArr[i].img=data[0]["image_link"];
                    var element=data[0];
                    data.shift();
                    data.push(element);
                    break;  
            }
        }
        this.setState({quiz:newArr});
    }

    /**
     * Questo metodo si occupa di popolare le opzioni della singola domanda
     * ricevuta come parametro.
     * Il valore preso dal primo oggetto della lista 'data', rappresenta l'opzione corretta.
     * Successivamente vengono presi le altre tre opzioni dagli altri oggetti della lista 'data' 
     * e per ognuna di queste si verifica che non sia già stata inserita in modo tale da non
     * avere opzioni duplicate. 
     */
    setQuestion=(answer, data, campo)=>{
        var risposte=answer;
        var famiglieAnimali=["Mammal","Fish","Amphibian","Bird","Reptile"];
        for(var i=0; i<answer.length; i++){
            var inserito=false;
            for(var a=0; a<data.length; a++){
                if(i==0){
                    risposte[i].testoRisposta=data[0][campo];
                    risposte[i].corretto=true;
                    inserito=true;
                }
                else{
                    var presente=false;
                    for(var b=0; b<answer.length;b++){
                        if(data[a][campo]==answer[b].testoRisposta){
                            presente=true;
                        }
                    }
                    if(!presente){
                        risposte[i].testoRisposta=data[a][campo];
                        risposte[i].corretto=false;
                        inserito=true;
                    }
                }
                
            }
            if(!inserito){
                for(var i=0; i<answer.length;i++){
                    for(var a=0; a<famiglieAnimali.length;a++){
                        if(answer[i].testoRisposta==famiglieAnimali[a]){
                            famiglieAnimali.splice(a,1);
                        }
                    }
                }
                if(famiglieAnimali.length!=0){
                    for(var i=0; i<answer.length;i++){
                        if(answer[i].testoRisposta==""){
                            answer[i].testoRisposta=famiglieAnimali[0];
                        }
                    }
                }
            }
        }

       
        risposte.sort(()=>Math.random()-0.5);
        
    }

    /**
     * Attraverso questo metodo si verifica se l'opzione scelta rappresenta la risposta corretta.
     * In caso positivo viene colorata l'opzione di verde e viene aumentato il punteggio, 
     * altrimenti viene colorata l'opzione di rosso.
     */
    handleAnswerClick=(isCorrect,id)=>{
        var option=document.getElementById(id);

        var punteggio=parseInt([this.state.score]);
        console.log(isCorrect);
        if(isCorrect){
            punteggio+=1;
            option.style.background="green";
            this.setState({score:punteggio});
        }
        else{
            option.style.background="red";
        }

        setTimeout(this.handleNextQuestion,2000);
    }

    /**
     * Quando viene invocato questo metodo si passa alla domanda successiva
     * incrementando di uno il contatore che fa riferimento alla domanda attuale (currentQuestion).
     * Se il valore di questa variabile è uguale al numero dei quiz totali allora viene mostrata la finestra 
     * di fine gioco con il punteggio finale conseguito.
     */
    handleNextQuestion=()=>{
        
        var option=document.getElementsByClassName("option");
        for(var i=0; i<option.length; i++){
            option[i].style.background="";
        }
        var nextQuestion=parseInt([this.state.currentQuestion])+1;
        var quizArray=[...this.state.quiz];
        if(nextQuestion<quizArray.length){
            this.setState({currentQuestion:nextQuestion});
            
        }
        else{
            this.setState({showScore:true});
            this.handleSaveScore();
        }
    }

    /**
     * Metodo si occupa di riavviare il game, in particolare vengono riportate tutte le variabili 
     * definite nello 'state' allo stato iniziale
     */
    handleClickRestart=()=>{
        var newArray=[...this.state.quiz];
        for(var i=0; i<newArray.length; i++){
            for(var a=0; a<newArray[i].opzioniRisposte.length; a++){
                newArray[i].opzioniRisposte[a].testoRisposta="";
                newArray[i].opzioniRisposte[a].corretto=false;
            }
            newArray[i].img="";
        }
        
        
        this.setState({currentQuestion:0});
        this.setState({score:0});
        this.setState({showScore:false});
        this.setState({quiz:newArray});
        this.getData();
    }


    /**
     * Metodo che riporta alla pagina riepilogativa con tutti i possibili giochi
     */
    handleClickGamePage=()=>{
        this.props.navigate("/GamePage");
    }

    handleClickQuizPage=()=>{
        var id=document.getElementById("username").value;
        this.setState({currentPlayer:id});
        this.setState({insertUsername:false});
    }

    handleSaveScore=()=>{
        let quizService = new QuizService();

        quizService.saveScore(
            {
                username: this.state.currentPlayer,
                punteggio: this.state.score
            }
        )
        .then(data1 => {
            console.log(data1)
        });

    }

    render(){
        const { isLoaded, currentQuestion, quiz, showScore, score, insertUsername } = this.state;
        return(
                <div className="cardQuiz">
                    {
                        insertUsername ? <BoxUsername onClick={this.handleClickQuizPage}/>
                        :(
                            showScore ? (
                                <ScoreQuiz
                                    score={score}
                                    length={quiz.length}
                                    onClickGamePage={this.handleClickGamePage}
                                    onClickStartQuiz={this.handleClickRestart}
                                />
                            ):(
                                <>
                                    <Question
                                        currentQuestion={currentQuestion}
                                        length={quiz.length}
                                        currentQuestionText={quiz[currentQuestion].testoDomanda}
                                        img={quiz[currentQuestion].img}
                                    />
                                    <div className="answer-section">
                                    {
                                        quiz[currentQuestion].opzioniRisposte.map((risposta)=>(
    
                                            <Answer
                                                answer={risposta}
                                                onClick={this.handleAnswerClick}
                                            />
                                        ))
                                    }
                                    </div>
                                </>
                            )
                        )

                    }
                </div>
            
        );
    }
}
export default withRouter(QuizPage);