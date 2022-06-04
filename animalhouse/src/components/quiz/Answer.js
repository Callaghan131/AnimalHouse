import React, {Component} from "react";

class Answer extends Component{
    render(){
        return(
            
                <button id={this.props.answer.id} className="option" onClick={() => this.props.onClick(this.props.answer.corretto, this.props.answer.id)}>{this.props.answer.testoRisposta}</button>
           
        );
    }
}
export default Answer;