import React, {Component} from "react";
import FormLogin from './LoginForm'
import { withRouter } from '../../withRouter';

class LoginPage extends Component{
    state={
        trovato:false,
        error:"",
        logged: false
    }
    handleClickLogin=(event)=>{
        

        var username=document.formLogin.username.value;
        var password= document.formLogin.password.value;
        var data=[];

        fetch("http://localhost:2700/users")
          .then(res => res.json())
          .then(
            (result) => {
              data=result;
              for(var i=0; i<data.length;i++){
                if(data[i].username==username&&data[i].password==password){
                    this.state.trovato=true;
                }
            }
            if((this.state.trovato)==false){
               this.setState({error:"Username o password non corretti"})
               //this.state.error="Username o password non corretti";
               
           }
           else{
                this.props.navigate("/LoginPage/HomePageUser");
           }
            }
        )

      

       event.preventDefault();

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