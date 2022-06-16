import React, {Component} from "react";
import { withRouter } from '../../withRouter';
import { RegisterForm } from './RegisterForm';
import { RegisterService } from "./RegisterService";

class RegisterPage extends Component{
    state={
        trovato:false,
        error:"",
        logged: false
    }
    handleClickLogin=(event)=>{
        

        var username=document.formRegister.username.value;
        var password= document.formRegister.password.value;
        var data=[];

        // fetch("http://localhost:2700/users")
        //   .then(res => res.json())
        //   .then(
        //     (result) => {
        //       data=result;
        //       for(var i=0; i<data.length;i++){
        //         if(data[i].username==username&&data[i].password==password){
        //             this.state.trovato=true;
        //         }
        //     }
        //     if((this.state.trovato)==false){
        //        this.setState({error:"Username o password non corretti"})
        //        //this.state.error="Username o password non corretti";
               
        //    }
        //    else{
        //         this.props.navigate("/RegisterPage");
        //    }
        //     }
        // )
        let registerService = new RegisterService();
        registerService.saveUser(
            {
                username: username,
                password: password
            }
        )
        .then(data1 => {
            switch(data1.status){
                case 201: //Utente creato
                this.props.navigate("/LoginPage/HomePageUser");
                break;
                case 304: //Utente gia' esistente
                break;
                default:
                    throw 'Stato non gestito';
                    break;
            }
            console.log(data1)
        });

      

       event.preventDefault();
    }
    render(){
        return(
            <RegisterForm error={this.state.error} onClick={this.handleClickLogin}/>
            //document.formLogin.error.value=this.state.error
            //<label id="errore" name="errore">{this.props.error}</label>
        );
    }
}
export default withRouter(RegisterPage);