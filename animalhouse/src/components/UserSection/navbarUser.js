import React, {Component} from "react";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";

class NavbarUser extends Component{
    render(){
        return(
            <>
                
                <Navbar bg="dark" variant="dark" >
                    <Container>
                        <Navbar.Brand href="#home">Animal House</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="../Ecommerce/Ecommerce">Shop</Nav.Link>
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