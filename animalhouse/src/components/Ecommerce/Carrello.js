import React, {Component} from 'react';
import Prodotto from './Prodotto';
class Carrello extends Component{
    render(){
    return(
        <div style={{background:"white", width:"82vw"}}>
            <h1 style={{fontWeight:"300", textAlign:"center"}}>IL TUO CARRELLO</h1>
            <div id="bottom" style={{display:"flex", justifyContent:"space-between", marginTop:"7vh"}}>
                <div id="info" style={{flex:"3"}}>
                    {this.props.itemCart.map(product=>(
                        <Prodotto 
                            product={product}
                        />
                    ))}
                  
                </div>
                <div id="summary" style={{flex:1, border: "0.5px solid lightgray", borderRadius: "10px", padding: "20px", height: "30vh"}}>
                    <h1 id="summaryTtile" style={{fontSize:"30px"}}>ORDER SUMMARY</h1>
                    <div type="total" style={{margin:"30px 0px", display:"flex", justifyContent:"space-between"}}>
                        <span>TOTAL</span>
                        <span id="price">{this.props.prezzo}€</span>
                    </div>
                    <button onClick={this.props.onBuy}>CHECKOUT NOW</button>
                </div>
            </div>
            
        </div>
    );
}
}
export default Carrello;