import React, {Component} from "react";
import NavbarUser from "./navbarUser";
import Classifica from "./classifica";
import { withRouter } from '../../withRouter';

class HomePageUser extends Component{

    handleLoginPage=()=>{
        this.props.navigate("/LoginPage");
    }

    handleOrder(json, column){
        json.sort(function (a, b) {
            
            var textA=parseInt(a[column]);
            var textB=parseInt(b[column]);
           
            return (textA > textB) ? -1 : (textA < textB) ? 1 : 0;
        });
             
    }
  
    render(){
        const scoreQuiz=require('../../JSON/scoreQuiz.json')
        this.handleOrder(scoreQuiz,"punteggio")
        const scoreMemory=require('../../JSON/scoreMemory.json')
        this.handleOrder(scoreMemory,"punteggio")
        const path=window.location.href.split("/");
        

        return(
            
            <>
                <NavbarUser
                 name={path[5]}
                 onClickLoginPage={this.handleLoginPage}
                />
                <div className="row" style={{width:'98vw',marginTop:"-30px"}}>
                    <Classifica
                        title={"Classifica Memory"}
                        data={scoreMemory}
                        activeUser={path[5]}
                        
                    />
                    <Classifica
                        title={"Classifica Quiz"}
                        data={scoreQuiz}
                        activeUser={path[5]}
                    />
                </div>
            </>
           
        );

       
    }
}
export default withRouter(HomePageUser);