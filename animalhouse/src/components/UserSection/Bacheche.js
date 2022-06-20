import React, {Component} from "react";
import NavbarUser from "./navbarUser";
import { withRouter } from '../../withRouter';
import Bacheca from "./Bacheca";
import BachecaFoto from "./BachecaFoto";

class Bacheche extends Component{

    handleLoginPage=()=>{
        this.props.navigate("/LoginPage");
    }        
    render(){
        return(
            
            <>
                <NavbarUser
                 onClickLoginPage={this.handleLoginPage}
                />
                <div className="bacheche" style={{display:"flex"}}>
                <div className="sx" style={{ width:"50vw"}}>
                    <Bacheca/>
                </div>
                <div className="dx" style={{width:"50vw"}}>
                    <BachecaFoto/>
                </div>
                </div>
            </>
           
        );

       
    }
}
export default withRouter(Bacheche);