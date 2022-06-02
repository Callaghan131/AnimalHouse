import React, {Component} from "react";
import Navbar from '../navbar';
import { withRouter } from '../../withRouter';
import Question from './Question';
import Answer from './Answer';
import '../../css/quiz.css';



class QuizPage extends Component{
    state={
        quiz:[
            {
                testoDomanda:"Come si chiama l'animale nella foto?",
                opzioniRisposte: [
                    {testoRisposta: "ciao", corretto:false},
                    {testoRisposta: "bella", corretto:false},
                    {testoRisposta: "raga", corretto:false},
                    {testoRisposta: "ehila", corretto:false}
                ],
                img:""
            },
            {
                testoDomanda:"Qual'è il nome latino dell'animale nella foto?",
                opzioniRisposte: [
                    {testoRisposta: "", corretto:false},
                    {testoRisposta: "", corretto:false},
                    {testoRisposta: "", corretto:false},
                    {testoRisposta: "", corretto:false}
                ],
                img:""
            },
            {
                testoDomanda:"Che tipo di animale è?",
                opzioniRisposte: [
                    {testoRisposta: "", corretto:false},
                    {testoRisposta: "", corretto:false},
                    {testoRisposta: "", corretto:false},
                    {testoRisposta: "", corretto:false}
                ],
                img:""
            },
            {
                testoDomanda:"Quanto è lungo circa questo animale?",
                opzioniRisposte: [
                    {testoRisposta: "", corretto:false},
                    {testoRisposta: "", corretto:false},
                    {testoRisposta: "", corretto:false},
                    {testoRisposta: "", corretto:false}
                ],
                img:""
            },
            {
                testoDomanda:"Quanto pesa circa questo animale?",
                opzioniRisposte: [
                    {testoRisposta: "", corretto:false},
                    {testoRisposta: "", corretto:false},
                    {testoRisposta: "", corretto:false},
                    {testoRisposta: "", corretto:false}
                ],
                img:""
            },
            {
                testoDomanda:"Quanti anni vive circa questo animale?",
                opzioniRisposte: [
                    {testoRisposta: "", corretto:false},
                    {testoRisposta: "", corretto:false},
                    {testoRisposta: "", corretto:false},
                    {testoRisposta: "", corretto:false}
                ],
                img:""
            },
            {
                testoDomanda:"Qual'è l'habitat naturale dell'animale nella foto?",
                opzioniRisposte: [
                    {testoRisposta: "", corretto:false},
                    {testoRisposta: "", corretto:false},
                    {testoRisposta: "", corretto:false},
                    {testoRisposta: "", corretto:false}
                ],
                img:""
            },
            {
                testoDomanda:"Cosa mangia l'animale in foto?",
                opzioniRisposte: [
                    {testoRisposta: "", corretto:false},
                    {testoRisposta: "", corretto:false},
                    {testoRisposta: "", corretto:false},
                    {testoRisposta: "", corretto:false}
                ],
                img:""
            },
            {
                testoDomanda:"In quale/i zona/e del mondo vive l'animale nella foto?",
                opzioniRisposte: [
                    {testoRisposta: "", corretto:false},
                    {testoRisposta: "", corretto:false},
                    {testoRisposta: "", corretto:false},
                    {testoRisposta: "", corretto:false}
                ],
                img:""
            }

        ],
        isLoaded: false,
        currentQuestion: 0
    }

    handleAnswerCorrect=()=>{
        console.log("ciao");
    }

    render(){
        const { isLoaded, currentQuestion, quiz } = this.state;

        return(
            <>
                <div className="cardQuiz">
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
                                onClick={this.handleAnswerCorrect}
                            />
                        ))
                    }
                    </div>
                    
                </div>
            </>
        );
    }
}
export default withRouter(QuizPage);