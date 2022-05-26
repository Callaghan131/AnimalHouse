import React, {Component} from "react";

class Bottone extends Component{
    render(){
        return(
            <div className='col'>
                <button type="submit" onClick={()=>this.props.onClick(this.props.bottone.id)} className="btn">{this.props.bottone.tipo} </button>
            </div>
        );
    }
}
export default Bottone;