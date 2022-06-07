import React, {Component} from "react";

class Login extends Component{
    render(){
        return(
        <>
        <div className="container" style={{marginTop:100}}>
        <div className="row justify-content-center">
        <div className="col-lg-5">
        <div className="card shadow-lg border-0 rounded-lg mt-5">
        <h3 className="text-center font-weight-light my-4">Login</h3>
        <div className="card-body">
            <form>
                <div className="form-floating mb-3" >
                    <input className="form-control" id="inputUsername" type="username" placeholder="Username" name="username"/>
                    <label>Username</label>
                </div>
                <div className="form-floating mb-3">
                    <input className="form-control" id="inputPassword" type="password" placeholder="Password" name="password"/>
                    <label>Password</label>
                </div>
                <div className="form-check mb-3">
                    <label className="form-check-label ml-3"></label>
                </div>
                <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                    <button className="btn btn-primary" type="submit">Login</button>
                </div>
            </form>
        </div>
        </div>
        </div>
        </div>
        </div>
        </>
        );
    }
}
export default Login;