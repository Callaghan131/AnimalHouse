import React, {Component} from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
class Prodotto extends Component{
    render(){
    return(
        <>
            <div id="product" style={{display:"flex", justifyContent:"space-between"}}>
                <div id="productDetail" style={{flex:"2", display:"flex"}}>
                    <img></img>
                    <div id="details" style={{padding:"20px", display:"flex", flexDirection:"column", justifyContent:"space-around"}}>
                        <span id="productName">
                            <b>Nome: </b><label id="name"></label>
                        </span>
                        <span id="productDesc">
                            <b>Descrizione: </b><label id="desc"></label>
                        </span>
                    </div>
                </div>
                <div id="priceDetail">
                    <div id="productAmountConteiner" style={{display:"flex", alignItems:"center", marginBottom:"20px"}}>
                        <AddIcon />
                        <div id="productAmount" style={{fontSize:"24px", margin:"5px"}}>2</div>
                        <RemoveIcon/>
                        
                    </div>
                    <div id="productPrice" style={{fontSize:"30px", fontWeight:"200"}}>20 €</div>
                </div>
            </div>
            <hr style={{backgroundColor:"#eee", border:"none", height:"1px"}}/>
        </>
        
);
}
}
export default Prodotto;