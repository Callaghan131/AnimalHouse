import React, {Component} from "react";

class Question extends Component{
    render(){
        return(
            <div className='question-section'>
                <div className='question-count'>
                    <span>Question {this.props.currentQuestion + 1}</span>/{this.props.length}
                </div>
                <div className='question-text'>{this.props.currentQuestionText}</div>
                <div className='img-conteiner'> <img  className="img-quiz" src={this.props.img}/></div>
            </div>
        );
    }
}
export default Question;