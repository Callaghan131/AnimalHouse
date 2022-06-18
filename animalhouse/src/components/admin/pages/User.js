import React, {Component} from "react";
import { withRouter } from '../../../withRouter';



class User extends Component{
    render(){
        const path=window.location.href.split("/");
        
        return(
            <h1>Ciao {path[6]}</h1>
        );
    }
   
}
export default withRouter(User);