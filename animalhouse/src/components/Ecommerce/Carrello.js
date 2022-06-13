import React, {Component} from 'react';
import Prodotto from './Prodotto';
class Carrello extends Component{
    render(){
    return(
        <div style={{background:"white", width:"82vw"}}>
            <h1 style={{fontWeight:"300", textAlign:"center"}}>IL TUO CARRELLO</h1>
            {/* <div id="top" style={{alignItems:"center", justifyContent:"space-between", padding:"20px", textAlign:"right", width:"80vw"}}>
                
            </div> */}
            <div id="bottom" style={{display:"flex", justifyContent:"space-between", marginTop:"7vh"}}>
                <div id="info" style={{flex:"3"}}>
                   <Prodotto/>
                </div>
                <div id="summary" style={{flex:1}}></div>
            </div>
            
        </div>
    );
}
}
export default Carrello;