import React, {Component} from "react";
import NavbarUser from "./navbarUser";
import Classifica from "./classifica";
import { withRouter } from '../../withRouter';

class HomePageUser extends Component{

    handleLoginPage=()=>{
        this.props.navigate("/LoginPage");
    }
    render(){
        return(
            <>
                <NavbarUser
                 onClickLoginPage={this.handleLoginPage}
                />
                <div className="row" style={{width:'98vw'}}>
                    <Classifica
                        title={"Classifica Memory"}
                    />
                    <Classifica
                        title={"Classifica Quiz"}
                    />
                </div>
            </>
           
        );
    }
}
export default withRouter(HomePageUser);