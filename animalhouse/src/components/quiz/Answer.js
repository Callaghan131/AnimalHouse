import React, {Component} from "react";

class Answer extends Component{
    render(){
        return(
            
                <button className="option" onClick={() => this.props.onClick(this.props.answer.isCorrect)}>{this.props.answer.testoRisposta}</button>
           
        );
    }
}
export default Answer;