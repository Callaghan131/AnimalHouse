import React, {Component} from "react";

class CardMemory extends Component{
    render(){
        return(
            <div className={"cardMemory " + this.props.card.stat}  onClick={() => this.props.onClick(this.props.card.id,this.key)} >
                <img src={this.props.card.img} />
            </div>
        );
    }
}
export default CardMemory;