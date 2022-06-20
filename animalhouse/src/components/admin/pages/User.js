import React, {Component} from "react";
import { withRouter } from '../../../withRouter';
import utente from '../../../images/utente.png';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ScoreIcon from '@mui/icons-material/Score';
import '../../../css/user.css';
import NavbarAdmin from "../NavbarAdmin";

class User extends Component{
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
                                <span className="userShowUsername">Username1</span>
                            </div>
                        </div>
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                            <PermIdentityIcon className="userShowIcon"></PermIdentityIcon>
                            <span className="userShowInfoTitle"></span>
                        </div>
                        <span className="userShowTitle">Score Details</span>
                        <div className="userShowInfo">
                            <ScoreIcon className="userShowIcon"></ScoreIcon>
                            <span className="userShowInfoTitle"></span>
                        </div>
                        <div className="userShowInfo">
                            <ScoreIcon className="userShowIcon"></ScoreIcon>
                            <span className="userShowInfoTitle"></span>
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
                                    <input type="text" placeholder="" className="userUpdateInput"></input>
                                </div>
                                <div className="userUpdateItem">
                                    <label>Score Quiz</label>
                                    <input type="number" placeholder="" className="userUpdateInput"></input>
                                </div>
                                <div className="userUpdateItem">
                                    <label>Score Memory</label>
                                    <input type="number" placeholder="" className="userUpdateInput"></input>
                                </div>
                            </div>
                            <div className="userUpdateRight">
                                <button className="userUpdateButton">DELETE</button>
                                <button className="userUpdateButton">UPDATE</button>
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