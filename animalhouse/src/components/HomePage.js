import Navbar from './navbar';
import CardSfondo from './cardSfondo';
import ImmagineSfondo from '../images/sfondo.jpg';
import React, {Component} from "react";
import { withRouter } from '../withRouter';
import Bottone from './Button';


class HomePage extends Component {
  
  handleClickGamePage=()=>{
    this.props.navigate('/GamePage');
  }
  handleClickLoginPage=()=>{
    this.props.navigate('/LoginPage');
  }

  render(){
    return (
      <>
      <CardSfondo></CardSfondo>
      <h1 style={{textAlign:"center", color:"white", position:"absolute", top:"30vh", width:"100vw", fontSize:"100px"}}>ANIMAL HOUSE</h1>
      <button style={{fontWeight:"bold", color:"lightblue", fontSize:"50px", border:"5px solid lightblue", float:"left", marginRight:"10px", backgroundColor:"transparent", position:"absolute", top:"57vh", left:"50vw"}} type="submit" onClick={this.handleClickGamePage} className="btn">GAME</button>
      <button style={{fontWeight:"bold", color:"lightblue", fontSize:"50px", border:"5px solid lightblue", float:"left", marginRight:"10px", backgroundColor:"transparent", position:"absolute", top:"57vh", left:"35vw"}} type="submit" onClick={this.handleClickLoginPage} className="btn">LOGIN</button>
      
      </>
    );
  }
}

export default withRouter(HomePage);
