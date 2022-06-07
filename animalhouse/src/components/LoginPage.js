import React, {Component} from "react";
import Login from './Login';
import { withRouter } from '../withRouter';

class LoginPage extends Component{
    handleClickLogin=()=>{
        this.props.navigate("/LoginPage/HomePageUser");
    }
    render(){
        return(
            <Login onClick={this.handleClickLogin}/>
        );
    }
}
export default withRouter(LoginPage);