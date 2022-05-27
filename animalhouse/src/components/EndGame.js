import React, {Component} from "react";


class EndGame extends React.Component {
    render() {
      return (
        <div className="modal-background">
            <div className="modal-card">
                <div className="modal-header">
                    <h1 className="modal-title" id="exampleModalLabel">Memory Completato</h1>
                </div>
                <div className="modal-body">
                    <p>Punteggio: {this.props.score}, vuoi giocare ancora?</p>
                </div>
                <div className="modal-footer">
                    <button className="btn btn-primary" onClick={()=>this.props.onClickGamePage()}>GAME PAGE</button>
                    <button className="btn btn-primary" onClick={()=>this.props.onClick()}>START</button>
                </div>
            </div>
        </div>
      );
    }
}
  
export default EndGame;