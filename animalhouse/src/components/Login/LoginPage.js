import React, {Component} from "react";
import FormLogin from './LoginForm'
import { withRouter } from '../../withRouter';

class LoginPage extends Component{
    state={
        trovato:false,
        error:""
    }
    handleClickLogin=()=>{
        //this.props.navigate("/LoginPage/HomePageUser");
        const data=require('../../JSON/users.json')

        var username=document.getElementById("inputUsername").nodeValue;
        for(var i=0; i<data.length;i++){
            if(data[i].username==username){
                this.setState({trovato:true})
            }
        }
       if(!(this.state.trovato)){
           this.setState({error:"Username o password non corretti"})
       }
    }
    render(){
        return(
            <FormLogin error={this.state.error} onClick={this.handleClickLogin}/>
        );
    }
}
export default withRouter(LoginPage);