import React, {Component} from "react";
import NavbarUser from "../../UserSection/navbarUser";
import { withRouter } from '../../../withRouter';
import BachecaAdmin from "./BachecaAdmin";
import Bacheca from "../../UserSection/Bacheca";
import BachecaFoto from "../../UserSection/BachecaFoto";
import BachecaFotoAdmin from "./BachecaFotoAdmin";
import NavbarAdmin from "../NavbarAdmin";

class Bacheche extends Component{

    handleLoginPage=()=>{
        this.props.navigate("/LoginPage");
    }        
    render(){
        const path=window.location.href.split("/");
        return(
            
            <>
                <NavbarAdmin
                 onClickLoginPage={this.handleLoginPage}
                 name={path[5]}
                />
                <div className="bacheche" style={{display:"flex"}}>
                <div className="sx" style={{ width:"50vw"}}>
                    <BachecaAdmin/>
                </div>
                <div className="dx" style={{width:"50vw"}}>
                    <BachecaFotoAdmin/>
                </div>
                </div>
            </>
           
        );

       
    }
}
export default withRouter(Bacheche);