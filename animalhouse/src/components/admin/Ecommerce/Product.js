import React, {Component} from "react";
import { withRouter } from '../../../withRouter';
import utente from '../../../images/utente.png';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import InventoryIcon from '@mui/icons-material/Inventory';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import EuroIcon from '@mui/icons-material/Euro';
import CategoryIcon from '@mui/icons-material/Category';
import ScoreIcon from '@mui/icons-material/Score';
import '../../../css/product.css';
import NavbarAdmin from "../NavbarAdmin";
import {EcommerceService} from "../service/EcommerceService"

class product extends Component{

    state={
        product:{},
        loaded:false,
    }

    getDataProduct=()=>{
        const path=window.location.href.split("/");
        
        var url="http://localhost:2800/magazzino/"+path[6]+"/"+path[7];
        fetch(url)
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({product:result});
              this.setState({loaded:true})
            }
        )
    }
    
   
    componentWillMount=()=>{
        this.getDataProduct();
    }

    handleUpdate=(e)=>{
        e.preventDefault();
        var productname=document.getElementById("productname1").textContent;
        var password=document.form.password.value;
        var quiz=document.form.quiz.value;
        var memory=document.form.memory.value;
        var spanQuiz=document.getElementById('scoreQuiz');
        var spanMemory=document.getElementById('scoreMemory');
        
        var cont=0;

        if(password!=""){
            var data={
                productname:productname,
                password:password,
                admin: false
            }
    
            let productService=new EcommerceService();
            productService.product(data,productname)
            .then(data =>{
                switch(data.status)
                {
                    case 200:
                        if(cont<1){
                            alert("Dati utente aggiornati correttamente");
                            cont+=1;
                        }
                        
                }
            });
        }

        

        

       
        
    }

   

    render(){
        
        const path=window.location.href.split("/");
        return(
            <>
            <NavbarAdmin/>
            <div className="productSection">
                <div className="productConteiner">
                    <div className="productShow">
                        <div className="productShowTop">
                            <img src={`data:image/jpeg;base64,${this.state.product["immagine"]}`} alt="" className="productShowImg"></img>
                            <div className="productShowTopTitle">
                                <span className="productShowproductname">{this.state.product["nome"]}</span>
                            </div>
                        </div>
                        <span className="productShowTitle">Product Details</span>
                        <div name="info" className="productShowInfo">
                            <InventoryIcon className="productShowIcon"></InventoryIcon>
                            <span name="productname" id="name" className="productShowInfoTitle">{this.state.product["nome"]}</span><br></br>
                            
                        </div>
                        <div className="productShowInfo">
                            <ProductionQuantityLimitsIcon className="productShowIcon"></ProductionQuantityLimitsIcon>
                            <span className="productShowInfoTitle" id="disponibilità">{this.state.product["disponibilità"]}</span>
                        </div>
                        <div className="productShowInfo">
                            <EuroIcon className="productShowIcon"></EuroIcon>
                            <span className="productShowInfoTitle" id="prezzo">{this.state.product["prezzo"]}</span>
                        </div>
                        <div className="productShowInfo">
                            <CategoryIcon className="productShowIcon"></CategoryIcon>
                            <span className="productShowInfoTitle" id="categoria">{this.state.product["categoria"]}</span>
                        </div>
                    </div>
                    <div className="productUpdate">
                        <span className="productUpdateTitle">Edit</span>
                        <form className="productUpdateForm" onSubmit={this.handleUpdate} name="form">
                            <div className="productUpdateLeft">
                                <div className="productUpdateItem">
                                </div>
                                <div className="productUpdateItem">
                                    <label>Nome</label>
                                    <input type="text" name="nome" placeholder={this.state.product["nome"]} className="productUpdateInput"></input>
                                </div>
                                <div className="productUpdateItem">
                                    <label>Prezzo</label>
                                    <input type="number" name="quiz" placeholder={this.state.product["prezzo"]} className="productUpdateInput"></input>
                                </div>
                                <div className="productUpdateItem">
                                    <label>Quantità</label>
                                    <input type="number" name="memory" placeholder={this.state.product["disponibilità"]} className="productUpdateInput"></input>
                                </div>
                            </div>
                            <div className="productUpdateRight">
                                <button className="productUpdateButton"  type="submit">UPDATE</button>
                            </div>
                        </form>
                    </div>
                </div>
               
            </div>
            </>
            
        );
    }
   
}
export default withRouter(product);