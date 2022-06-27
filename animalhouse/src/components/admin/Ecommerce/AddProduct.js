import React, {Component} from "react";
import { withRouter } from '../../../withRouter';

import '../../../css/addProduct.css';
import NavbarAdmin from "../NavbarAdmin";
import {EcommerceService} from "../service/EcommerceService"

class addnewProduct extends Component{

    state={
        newProduct:{},
        loaded:false,
    }

    
    handleCreate=(e)=>{
        e.preventDefault();

        
        var nomeProduct=document.form.nome.value;
        var idProduct=document.form.id.value;
        var immagineProduct=document.form.immagine.value;
        var prezzoProduct=document.form.prezzo.value;
        var categoriaProduct=document.form.categoria.value;
        var dispProduct=document.form.disponibilità.value;

        console.log(categoriaProduct)
        
        

       if(nomeProduct !="" && idProduct!="" && immagineProduct!="" && prezzoProduct!="" && dispProduct!="" ){
            let data={
                immagine: immagineProduct,
                nome: nomeProduct,
                prezzo: prezzoProduct,
                quantità: 0,
                disponibilità: dispProduct,
                categoria: categoriaProduct

            }
            
            console.log(data);
            let productService=new EcommerceService();
            productService.addProduct(data,categoriaProduct)
            alert("Prodotto creato correttamente");
       }
       else{
        alert("Inserisci correttamente tutti i campi");
       }
    }
   


    render(){
        
        const path=window.location.href.split("/");
        return(
            <>
            <NavbarAdmin/>
            <div className="newProductSection">
                <div className="newProductConteiner">
                    
                    <div className="newProductUpdate">
                        <span className="newProductUpdateTitle">Add new Product</span>
                        <form className="newProductUpdateForm" onSubmit={this.handleCreate} name="form">
                            <div className="newProductUpdateLeft">
                                <div className="rigaForm">
                                    <div className="newProductUpdateItem">
                                        <label>Nome</label>
                                        <input type="text" name="nome" placeholder="" className="newProductUpdateInput"></input>
                                    </div>
                                    <div className="newProductUpdateItem" style={{marginLeft:"5vw"}}>
                                        <div className="newProductUpdateItem">
                                            <label>Prezzo</label>
                                            <input  name="prezzo" placeholder="" className="newProductUpdateInput"></input>
                                        </div>
                                    </div>
                                </div>
                                <div className="rigaForm">
                                    <div className="newProductUpdateItem" >
                                        <label>Quantità</label>
                                        <input type="number" name="disponibilità" placeholder="" className="newProductUpdateInput"></input>
                                    </div>
                                    <div className="newProductUpdateItem" style={{marginLeft:"5vw"}}>
                                        <label>Immagine</label>
                                        <input  name="immagine" type="string" placeholder="Copia url immagine" className="newProductUpdateInput"></input>
                                    </div>
                                </div>
                                <div className="rigaForm">
                                    <div className="newProductUpdateItem" >
                                        <label>categoria</label>
                                        <select name="categoria">
                                            <option>Gioco</option>
                                            <option>Cibo</option>
                                            <option>Sanitari</option>
                                            <option>Accessori</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="newProductUpdateRight">
                                <button className="newProductUpdateButton"  type="submit">CREATE</button>
                            </div>
                        </form>
                    </div>
                </div>
               
            </div>
            </>
            
        );
    }
   
}
export default withRouter(addnewProduct);