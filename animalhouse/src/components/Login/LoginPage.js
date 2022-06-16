import React, {Component} from "react";
import FormLogin from './LoginForm'
import { withRouter } from '../../withRouter';

class LoginPage extends Component{
    state={
        trovato:false,
        error:"",
        logged: false
    }
    render(){
        return(
            <FormLogin error={this.state.error} onClick={this.handleClickLogin}/>
            //document.formLogin.error.value=this.state.error
            //<label id="errore" name="errore">{this.props.error}</label>
        );
    }
}
export default withRouter(LoginPage);