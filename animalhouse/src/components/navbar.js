import React, {Component} from "react";


class Navbar extends Component{
    render(){
      return(
        <nav className="navbar navbar-dark bg-dark">
          <div className="container">
            <div className="navbar-brand" onClick={this.props.click}>Animal House</div>
          </div>
        </nav>
        );
    }
}
export default Navbar;

