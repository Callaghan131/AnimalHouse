import React, {Component} from "react";

class Answer extends Component{
    render(){
        return(
            
                <div id={this.props.answer.id} className="option" onClick={() => this.props.onClick(this.props.answer.corretto, this.props.answer.id)}>{this.props.answer.testoRisposta}</div>
           
        );
    }
}
export default Answer;