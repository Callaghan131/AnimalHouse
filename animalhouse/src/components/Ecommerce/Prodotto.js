import React, {Component} from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
class Prodotto extends Component{

    //const prezzoBase=parseFloat(productPrice.textContent)/parseInt(productAmount.textContent)
    
    render(){
        const data=this.props.product.img;
        var immagine="";
        if(data.length>150){
            immagine=`data:image/jpeg;base64,${data}`;
        }
        else{
            immagine=data;
        }
    return(
        <>
            <div id="product" style={{display:"flex", justifyContent:"space-between"}}>
                <div id="productDetail" style={{flex:"2", display:"flex"}}>
                    <div style={{width:"200px"}}>
                        <img src={immagine} style={{maxWidth:"100%", maxHeight:"100%", objectFit:"contain"}}></img>
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