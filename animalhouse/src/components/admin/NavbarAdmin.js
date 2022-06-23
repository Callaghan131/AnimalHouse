import React, {Component} from "react";


class NavbarAdmin extends Component{
    render(){
      return(
        <nav className="navbar navbar-dark bg-dark">
          <div className="container">
            <a className="navbar-brand" >Animal House</a>
            <a className="navbar-brand" href="/LoginPage/HomePageAdmin/">Utenti</a>
            <a className="navbar-brand" href="/LoginPage/HomePageAdmin/ProductList">E-commerce</a>
            <a className="navbar-brand" href="/LoginPage">Logout</a>
          </div>
        </nav>
        );
    }
}
export default NavbarAdmin;