import React, {Component} from "react";


class BoxUsername extends React.Component {
    render() {
      return (
        <div className="modal-background">
            <div className="modal-card-username">
                <div className="modal-header">
                    <h1 className="modal-title" id="exampleModalLabel">Inserisci Username</h1>
                </div>
                <div className="modal-body">
                    <label>Username:</label>
                    <input id="username" type="text"></input>
                </div>
                <div className="modal-footer-username">
                    <button className="btn btn-primary" onClick={()=>this.props.onClick()}>START</button>
                </div>
            </div>
        </div>
      );
    }
}
  
export default BoxUsername;