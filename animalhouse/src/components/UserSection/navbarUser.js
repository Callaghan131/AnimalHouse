import React, {Component} from "react";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";

class NavbarUser extends Component{
    
    render(){
        const ecommerce="/LoginPage/HomePageUser/"+this.props.name+"/Ecommerce"
        const bacheca="/LoginPage/HomePageUser/"+this.props.name+"/Bacheche"
        const classifiche="/LoginPage/HomePageUser/"+this.props.name
        return(
            <>
                
                <Navbar bg="dark" variant="dark" >
                    <Container>
                        <Navbar.Brand href="#home">Animal House</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            {/* <Nav.Link href="#home">Home</Nav.Link> */}
                            <Nav.Link href={ecommerce}>Shop</Nav.Link>
                            <Nav.Link href={classifiche}>Classifiche</Nav.Link>
                            <Nav.Link href={bacheca}>Bacheche</Nav.Link>
                            <Nav.Link onClick={this.props.onClickLoginPage} style={{marginLeft:'60vw'}}>Logout</Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        );
    }
}
export default NavbarUser;