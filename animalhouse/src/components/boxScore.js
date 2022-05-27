import React, {Component} from "react";

class BoxScore extends Component{
    render(){
        return(
            <div className="card-score">
                <div className="card-header">
                    <p>PUNTEGGIO</p>
                </div>
                <div className="card-body">
                    <p>{this.props.score}</p>
                </div>
            </div>
        );
    }
}
export default BoxScore;