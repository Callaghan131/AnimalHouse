import React, {Component} from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
class Prodotto extends Component{

    //const prezzoBase=parseFloat(productPrice.textContent)/parseInt(productAmount.textContent)

    handleIncrement=()=>{
        var productPrice=document.getElementById("productPrice");
        productPrice.style.visibility="visible";
        var productAmount=document.getElementById("productAmount");
        var quantita=parseInt(productAmount.textContent)+1
        productAmount.textContent=quantita;
        var productPrice=document.getElementById("productPrice");
        if(quantita>=2){
            var prezzo=parseFloat(productPrice.textContent)+(parseFloat(productPrice.textContent)/(quantita-1));
        }
        else if(quantita==1){
            var prezzo=parseFloat(productPrice.textContent);
        }
       
        productPrice.textContent=prezzo;
    }

    handleDecrement=()=>{
        var productAmount=document.getElementById("productAmount");
        var quantita=parseInt(productAmount.textContent)-1
        var productPrice=document.getElementById("productPrice");
        productAmount.textContent=quantita;
        if(quantita>0){
            productPrice.style.visibility="visible";
            var productPrice=document.getElementById("productPrice");
            var prezzo=parseFloat(productPrice.textContent)-(parseFloat(productPrice.textContent)/(quantita+1));
            productPrice.textContent=prezzo;
        }
        else{
            productPrice.style.visibility="hidden";
        }
        
    }

    render(){
    return(
        <>
            <div id="product" style={{display:"flex", justifyContent:"space-between"}}>
                <div id="productDetail" style={{flex:"2", display:"flex"}}>
                    <div style={{width:"200px"}}>
                        <img src={this.props.product.img} style={{maxWidth:"100%", maxHeight:"100%", objectFit:"contain"}}></img>
                    </div>
                    <div id="details" style={{padding:"20px", display:"flex", flexDirection:"column", justifyContent:"space-around"}}>
                        <span id="productName">
                            <b>Nome: </b><label id="name">{this.props.product.nome}</label>
                        </span>
                    
                    </div>
                </div>
                <div id="priceDetail" style={{flex:1, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
                    <div id="productAmountConteiner" style={{display:"flex", alignItems:"center", marginBottom:"20px"}}>
                        <div id="productAmount" style={{fontSize:"24px", margin:"5px"}}>{this.props.product.quantita}</div>
                    </div>
                    <div id="productPrice" style={{fontSize:"30px", fontWeight:"200"}}>{this.props.product.prezzo}</div>
                </div>
            </div>
            <hr style={{backgroundColor:"#eee", border:"none", height:"1px"}}/>
        </>
        
);
}
}
export default Prodotto;