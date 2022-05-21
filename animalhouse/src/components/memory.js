import React, {Component} from "react";

class Memory extends Component{
    render(){
        return(
           <div className="btn-group" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-primary">Login</button>
            <button type="button" className="btn btn-primary">Game</button>
</div>
        );
    }
}
export default Memory;