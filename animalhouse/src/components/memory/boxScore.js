import React, {Component} from "react";

class BoxScore extends Component{
    render(){
        return(
            <div className="card-score">
                <div className="card-score-header">
                    <p>PUNTEGGIO</p>
                </div>
                <div className="card-score-body" style={{background:"white", height:"50px"}}>
                    <p>{this.props.score}</p>
                </div>
            </div>
        );
    }
}
export default BoxScore;