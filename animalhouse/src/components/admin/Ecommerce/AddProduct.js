import React, {Component} from "react";
import { withRouter } from '../../../withRouter';

import '../../../css/product.css';
import NavbarAdmin from "../NavbarAdmin";
import {EcommerceService} from "../service/EcommerceService"

class addProduct extends Component{

    state={
        product:{},
        loaded:false,
    }

    

   

    render(){
        
        const path=window.location.href.split("/");
        return(
            <>
            <NavbarAdmin/>
            <div className="productSection">
                <div className="productConteiner">
                    
                    <div className="productUpdate">
                        <span className="productUpdateTitle">Add new product</span>
                        <form className="productUpdateForm" onSubmit="" name="form">
                            <div className="productUpdateLeft">
                                <div className="productUpdateItem">
                                </div>
                                <div className="productUpdateItem">
                                    <label>Nome</label>
                                    <input type="text" name="nome" placeholder="" className="productUpdateInput"></input>
                                </div>
                                <div className="productUpdateItem">
                                    <label>Id</label>
                                    <input type="number" name="id" placeholder="" className="productUpdateInput"></input>
                                </div>
                                <div className="productUpdateItem">
                                    <label>Prezzo</label>
                                    <input  name="prezzo" placeholder="" className="productUpdateInput"></input>
                                </div>
                                <div className="productUpdateItem">
                                    <label>Quantità</label>
                                    <input type="number" name="disponibilità" placeholder="" className="productUpdateInput"></input>
                                </div>
                                <div className="productUpdateItem">
                                    <label>Immagine</label>
                                    <input type="number" name="disponibilità" placeholder="Copia url immagine" className="productUpdateInput"></input>
                                </div>
                                <div className="productUpdateItem">
                                    <label>categoria</label>
                                    <select>
                                        <option>Gioco</option>
                                        <option>Cibo</option>
                                        <option>Sanitari</option>
                                        <option>Accessori</option>
                                    </select>
                                </div>
                            </div>
                            <div className="productUpdateRight">
                                <button className="productUpdateButton"  type="submit">CREATE</button>
                            </div>
                        </form>
                    </div>
                </div>
               
            </div>
            </>
            
        );
    }
   
}
export default withRouter(addProduct);