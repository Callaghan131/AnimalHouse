import React, {Component} from "react";

class ScoreQuiz extends Component{
    render(){
        return(
            <div className='score-section'>
				Risposte giuste {this.props.score} su {this.props.length}
                <div className='score'>
                    Score: {this.props.score}
                </div>
                <button className="gamePage" onClick={()=>this.props.onClickGamePage()}>GAME PAGE</button>
                <button className="restart" onClick={()=>this.props.onClickStartQuiz()}>START</button>
               
			</div>
           
        );
    }
}
export default ScoreQuiz;