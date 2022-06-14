import React, {Component} from "react";

class Bottone extends Component{
    
    render(){
        const top=this.props.bottone.top;
        const width=this.props.bottone.width;
        return(
            <div className='col'>
                <button style={{fontWeight:"bold", border:"2px solid black", float:"left", marginRight:"10px", backgroundColor:"transparent", position:"absolute", top:{top}, width:{width}}} type="submit" onClick={()=>this.props.onClick(this.props.bottone.id)} className="btn">{this.props.bottone.tipo} </button>
            </div>
        );
    }
}
export default Bottone;