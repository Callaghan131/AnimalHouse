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

        // // this.toDataURL(immagineProduct)
        // // .then(dataUrl=>{
        // //     console.log('RESULT:', dataUrl)
        // // })
        // console.log(immagi)
        // var img="";
        // img=this.toDataURL(immagineProduct)
        console.log(categoriaProduct)

       if(nomeProduct !="" && idProduct!="" && immagineProduct!="" && prezzoProduct!="" && dispProduct!="" ){
            let data={
                id: Number(idProduct),
                immagine: immagineProduct,
                nome: nomeProduct,
                prezzo: prezzoProduct,
                quantità: 0,
                disponibilità: dispProduct,
                categoria: categoriaProduct

            }

            let productService=new EcommerceService();
            productService.addProduct(data,categoriaProduct)
            .then(data =>{
                switch(data.status)
                {
                    case 200:
                        alert("Prodotto creato correttamente");
                        break;
                    case 304:
                        alert("Esiste gia un prodotto con lo stesso id per la categoria "+categoriaProduct);
                        break;
                        
                }
            });
       }
       else{
        alert("Inserisci correttamente tutti i campi");
       }
    }
   

    // toDataURL=(url)=> {
    //     const imageToBase64 = require('image-to-base64');
    //     //or
    //     //import imageToBase64 from 'image-to-base64/browser';

    //     imageToBase64(url) // Path to the image
    //         .then(
    //             (response) => {
    //                 console.log(response); // "cGF0aC90by9maWxlLmpwZw=="
    //                 return response;
    //             }
    //         )
    //         .catch(
    //             (error) => {
    //                 console.log(error); // Logs an error if there was one
    //             }
    //         )
    // }

    toDataURL(url) {
        // let image = new Image();
        // image.crossOrigin = 'Anonymous';
        // image.onload = function () {
        //     let canvas = document.createElement('canvas');
        //     let ctx = canvas.getContext('2d');
        //     let dataURL;
        //     canvas.height = this.naturalHeight;
        //     canvas.width = this.naturalWidth;
        //     ctx.drawImage(this, 0, 0);
        //     dataURL = canvas.toDataURL(outputFormat);
        //     callback(dataURL);
        // };
        // image.src = src;
        // if (image.complete || image.complete === undefined) {
        //     image.src = "data:image/gif;base64, R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
        //     image.src = src;
        // }

        var reader = new FileReader();
        reader.readAsDataURL(url);
        reader.onload = function () {
           return reader.result;
            
        };
        reader.onerror = function (error) {
            alert("Erroe caricamento immagine, riprovare...")
        };
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
                                        <label>Id</label>
                                        <input type="number" name="id" placeholder="" className="newProductUpdateInput"></input>
                                    </div>
                                </div>
                                <div className="rigaForm">
                                    <div className="newProductUpdateItem">
                                        <label>Prezzo</label>
                                        <input  name="prezzo" placeholder="" className="newProductUpdateInput"></input>
                                    </div>
                                    <div className="newProductUpdateItem" style={{marginLeft:"5vw"}}>
                                        <label>Quantità</label>
                                        <input type="number" name="disponibilità" placeholder="" className="newProductUpdateInput"></input>
                                    </div>
                                </div>
                                <div className="rigaForm">
                                    <div className="newProductUpdateItem">
                                        <label>Immagine</label>
                                        <input  name="immagine" type="string" placeholder="Copia url immagine" className="newProductUpdateInput"></input>
                                    </div>
                                    <div className="newProductUpdateItem" style={{marginLeft:"5vw"}}>
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