import React, {Component} from 'react';
import { Dropdown } from "react-bootstrap";
import Badge from '@mui/material/Badge';
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

class NavbarCarrello extends Component{
  render(){
    return(
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand">Shop</a>
        <a className="navbar-brand" onClick={()=>this.props.onClickGiochi()}>Giochi</a>
        <a className="navbar-brand" onClick={()=>this.props.onClickAccessori()}>Accessori</a>
        <a className="navbar-brand" onClick={()=>this.props.onClickSanitari()}>Prodotti sanitari</a>
        <a className="navbar-brand" onClick={()=>this.props.onClickCibo()}>Cibo</a>
        {/* <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
          Carrello
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>{this.props.totale}</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown> */}
        <Badge id="iconCarrello" badgeContent={this.props.totale} color="primary">
            <ShoppingCartIcon style={{color:"white"}} onClick={()=>this.props.onClickCarrello()}></ShoppingCartIcon>
        </Badge>
      </div>
    </nav>
    );
  }
}
export default NavbarCarrello;