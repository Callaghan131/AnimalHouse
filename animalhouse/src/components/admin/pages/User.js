import React, {Component} from "react";
import { withRouter } from '../../../withRouter';
import utente from '../../../images/utente.png';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ScoreIcon from '@mui/icons-material/Score';
import '../../../css/user.css';
import NavbarAdmin from "../NavbarAdmin";

class User extends Component{

    state={
        user:{},
        scoreMemory:{},
        scoreQuiz:{},
        loaded:false,
    }

    getDataUser=()=>{
        const path=window.location.href.split("/");
        var url="http://localhost:2700/users/"+path[6];
        fetch(url)
          .then(res => res.json())
          .then(
            (result) => {
              console.log(result);
              this.setState({user:result});
              this.setState({loaded:true})
            }
        )
    }
    
    getDataQuiz=()=>{
        const path=window.location.href.split("/");
        var url="http://localhost:2700/scoreQuiz/"+path[6];
        fetch(url)
        .then(res => res.json())
        .then(
            (result) => {
            this.setState({scoreQuiz:result});
            }
        )
    }

    getDataMemory=()=>{
        const path=window.location.href.split("/");
        var url="http://localhost:2700/scoreMemory/"+path[6];
        fetch(url)
        .then(res => res.json())
        .then(
            (result) => {
            this.setState({scoreMemory:result});
            }
        )
    }

    componentWillMount=()=>{
        this.getDataUser();
        this.getDataMemory();
        this.getDataQuiz();
    }

    render(){
        
        const path=window.location.href.split("/");
        return(
            <>
            <NavbarAdmin/>
            <div className="user">
                <div className="userConteiner">
                    <div className="userShow">
                        <div className="userShowTop">
                            <img src={utente} alt="" className="userShowImg"></img>
                            <div className="userShowTopTitle">
                                <span className="userShowUsername">{path[6]}</span>
                            </div>
                        </div>
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                            <PermIdentityIcon className="userShowIcon"></PermIdentityIcon>
                            <span className="userShowInfoTitle">{this.state.user["username"]}</span>
                        </div>
                        <span className="userShowTitle">Score Details</span>
                        <div className="userShowInfo">
                            <ScoreIcon className="userShowIcon"></ScoreIcon>
                            <span className="userShowInfoTitle">{this.state.scoreMemory["punteggio"]}</span>
                        </div>
                        <div className="userShowInfo">
                            <ScoreIcon className="userShowIcon"></ScoreIcon>
                            <span className="userShowInfoTitle">{this.state.scoreQuiz["punteggio"]}</span>
                        </div>
                    </div>
                    <div className="userUpdate">
                        <span className="userUpdateTitle">Edit</span>
                        <form className="userUpdateForm">
                            <div className="userUpdateLeft">
                                <div className="userUpdateItem">
                                </div>
                                <div className="userUpdateItem">
                                    <label>Password</label>
                                    <input type="text" placeholder={this.state.user["password"]} className="userUpdateInput"></input>
                                </div>
                                <div className="userUpdateItem">
                                    <label>Score Quiz</label>
                                    <input type="number" placeholder={this.state.scoreQuiz["punteggio"]} className="userUpdateInput"></input>
                                </div>
                                <div className="userUpdateItem">
                                    <label>Score Memory</label>
                                    <input type="number" placeholder={this.state.scoreMemory["punteggio"]} className="userUpdateInput"></input>
                                </div>
                            </div>
                            <div className="userUpdateRight">
                                <button className="userUpdateButton">UPDATE</button>
                                <button className="userUpdateButton">RESET PASSWORD</button>
                            </div>
                        </form>
                    </div>
                </div>
               
            </div>
            </>
            
        );
    }
   
}
export default withRouter(User);