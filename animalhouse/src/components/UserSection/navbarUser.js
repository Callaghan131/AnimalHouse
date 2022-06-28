import React, {Component} from "react";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";

class NavbarUser extends Component{
    
    render(){
        const ecommerce="/LoginPage/HomePageUser/"+this.props.name+"/Ecommerce"
        const bacheca="/LoginPage/HomePageUser/"+this.props.name+"/Bacheche"
        const classifiche="/LoginPage/HomePageUser/"+this.props.name
        const home="/"
        return( 
             <nav className="navbar navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand" href={home} >Animal House</a>
                    <a className="navbar-brand" href={ecommerce}>E-commerce</a>
                    <a className="navbar-brand" href={bacheca}>Bacheche</a>
                    <a className="navbar-brand" href={classifiche}>Classifiche</a>
                    <a className="navbar-brand" href="/LoginPage">Logout</a>
                </div>
            </nav>
            );
        }
}
export default NavbarUser;