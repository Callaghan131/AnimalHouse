import React, {Component} from "react";

class Bottone extends Component{
    render(){
        return(
            <div className='col'>
                <button style={{fontWeight:"bold", border:"2px solid black", float:"left", marginRight:"10px", background:"white"}} type="submit" onClick={()=>this.props.onClick(this.props.bottone.id)} className="btn">{this.props.bottone.tipo} </button>
            </div>
        );
    }
}
export default Bottone;