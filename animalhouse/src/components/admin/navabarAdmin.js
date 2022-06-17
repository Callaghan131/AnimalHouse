import React, {Component} from "react";


class NavbarAdmin extends Component{
    render(){
      return(
        <nav className="navbar navbar-dark bg-dark">
          <div className="container">
            <a className="navbar-brand">Animal House</a>
            <a className="navbar-brand">Utenti</a>
            <a className="navbar-brand" >E-commerce</a>
          </div>
        </nav>
        );
    }
}
export default NavbarAdmin;