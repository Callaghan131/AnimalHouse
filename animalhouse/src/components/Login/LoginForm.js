import React, {Component} from "react";
import { withRouter } from '../../withRouter';
import { LoginService } from './LoginService';


class FormLogin extends Component{
    state={
        error:""
    }
    render(){
        return(
            <div className="container" style={{marginTop:100}}>
                <div className="row justify-content-center">
                    <div className="col-lg-5">
                        <div className="card shadow-lg border-0 rounded-lg mt-5">
                            <h3 className="text-center font-weight-light my-4">Login AnimalHouse</h3>
                            <div className="card-body">
                                <form name="formLogin" onSubmit={(e) => this.props.onClick(e)}>
                                    <div className="form-floating mb-3" >
                                        <input className="form-control" id="inputUsername" type="username" placeholder="Username" name="username"/>
                                        <label>Username</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input className="form-control" id="inputPassword" type="password" placeholder="Password" name="password"/>
                                        <label>Password</label>
                                    </div>
                                    <div className="form-check mb-3">
                                        <label style={{color:'red'}} id="errore" name="errore">{this.state.error}</label>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                                        <button className="btn btn-primary" onClick={this.login}>Login</button>
                                        <a className="btn btn-primary" onClick={this.redirect}>Registrati</a>
                                        {/* <button className="btn btn-primary">Registrati</button> */}
                                        
                                    </div>
                                    
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    login = (e) =>{
        var username=document.formLogin.username.value;
        var password= document.formLogin.password.value;
        this.error = ""

        let data = {
            username: username,
            password: password
        }

        let loginService = new LoginService();
        loginService.login(data)
        .then(data =>{
            switch(data.status){
                case 200: //Login riuscito
                    this.props.navigate("/LoginPage/HomePageUser/"+username);
                    break;
                case 401: //Login fallito
                    this.setState({error:"Username o password non corretti"}) 
                    break;
                default:
                throw 'Eccezione non gestita';
            }
        });

        e.preventDefault();
    }
    onClick = () =>
    {
        // document.getElementById("errore").innerHTML=this.props.error;
    }
    redirect =()=>
    {
        this.props.navigate("../Register/RegisterPage");
    }
}
export default withRouter(FormLogin);