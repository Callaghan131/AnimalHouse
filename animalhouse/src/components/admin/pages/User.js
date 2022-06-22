import React, {Component} from "react";
import { withRouter } from '../../../withRouter';
import utente from '../../../images/utente.png';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ScoreIcon from '@mui/icons-material/Score';
import '../../../css/user.css';
import NavbarAdmin from "../NavbarAdmin";
import {UserService} from '../service/UserService'

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

    handleUpdate=(e)=>{
        e.preventDefault();
        var username=document.getElementById("username1").textContent;
        var password=document.form.password.value;
        var quiz=document.form.quiz.value;
        var memory=document.form.memory.value;
        var spanQuiz=document.getElementById('scoreQuiz');
        var spanMemory=document.getElementById('scoreMemory');
        
        var cont=0;

        if(password!=""){
            var data={
                username:username,
                password:password,
                admin: false
            }
    
            let userService=new UserService();
            userService.user(data,username)
            .then(data =>{
                switch(data.status)
                {
                    case 200:
                        if(cont<1){
                            alert("Dati utente aggiornati correttamente");
                            cont+=1;
                        }
                        
                }
            });
        }

        if(quiz!=""){
            var data={
                username:username,
                punteggio:quiz,
            }
    
            let userService=new UserService();
           
            
            userService.quiz(data,username)
            .then(data =>{
                switch(data.status)
                {
                    case 200:
                        spanQuiz.innerText=quiz;
                        console.log(spanQuiz)
                        
                        if(cont<1){
                            alert("Dati utente aggiornati correttamente");
                            cont+=1;
                        }
                        
                }
            });
        }

        if(memory!=""){
            var data={
                username:username,
                punteggio:memory,
            }
    
            let userService=new UserService();
            userService.memory(data,username)
            .then(data =>{
                switch(data.status)
                {
                    case 200:
                        console.log(spanMemory);
                        spanMemory.innerText=memory;
                        if(cont<1){
                            alert("Dati utente aggiornati correttamente");
                            cont+=1;
                        }
                }
            });
        }

       
        
    }

    handleReset=(e)=>{
        e.preventDefault();
        var username=document.getElementById("username1").textContent;
        var inputPassword=document.getElementsByName("password");

        var data={
            username:username,
            password:username,
            admin: false
        }

        inputPassword[0].setAttribute("placeholder",username);
        let userService=new UserService();
        userService.user(data,username)
        .then(data =>{
            switch(data.status)
            {
                case 200:
                    alert("Dati utente aggiornati correttamente");
                    
            }
        });
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
                        <div name="info" className="userShowInfo">
                            <PermIdentityIcon className="userShowIcon"></PermIdentityIcon>
                            <span name="username" id="username1" className="userShowInfoTitle">{this.state.user["username"]}</span>
                        </div>
                        <span className="userShowTitle">Score Details</span>
                        <div className="userShowInfo">
                            <ScoreIcon className="userShowIcon"></ScoreIcon>
                            <span className="userShowInfoTitle" id="scoreQuiz">{this.state.scoreQuiz["punteggio"]}</span>
                        </div>
                        <div className="userShowInfo">
                            <ScoreIcon className="userShowIcon"></ScoreIcon>
                            <span className="userShowInfoTitle" id="scoreMemory">{this.state.scoreMemory["punteggio"]}</span>
                        </div>
                    </div>
                    <div className="userUpdate">
                        <span className="userUpdateTitle">Edit</span>
                        <form className="userUpdateForm" onSubmit={this.handleUpdate} name="form">
                            <div className="userUpdateLeft">
                                <div className="userUpdateItem">
                                </div>
                                <div className="userUpdateItem">
                                    <label>Password</label>
                                    <input type="text" name="password" placeholder={this.state.user["password"]} className="userUpdateInput"></input>
                                </div>
                                <div className="userUpdateItem">
                                    <label>Score Quiz</label>
                                    <input type="number" name="quiz" placeholder={this.state.scoreQuiz["punteggio"]} className="userUpdateInput"></input>
                                </div>
                                <div className="userUpdateItem">
                                    <label>Score Memory</label>
                                    <input type="number" name="memory" placeholder={this.state.scoreMemory["punteggio"]} className="userUpdateInput"></input>
                                </div>
                            </div>
                            <div className="userUpdateRight">
                                <button className="userUpdateButton"  type="submit">UPDATE</button>
                                <button className="userUpdateButton" onClick={this.handleReset}>RESET PASSWORD</button>
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