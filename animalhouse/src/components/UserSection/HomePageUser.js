import React, {Component} from "react";
import NavbarUser from "./navbarUser";
import Classifica from "./classifica";
import { withRouter } from '../../withRouter';
import ScoreQuiz from "../quiz/ScoreQuiz";

class HomePageUser extends Component{

    handleLoginPage=()=>{
        this.props.navigate("/LoginPage");
    }

    handleOrder(json, column){
        json.sort(function (a, b) {
            var textA;
            var textB;
            if (typeof (a[column]) == "number") {
                textA = a[column];
                textB = b[column];
            }
            else {
                textA = a[column].toUpperCase();
                textB = b[column].toUpperCase();
            }
            return (textA > textB) ? -1 : (textA < textB) ? 1 : 0;
        });
             
        console.log(json);
    }
  
    render(){
        const scoreQuiz=require('../../JSON/scoreQuiz.json')
        this.handleOrder(scoreQuiz,"punteggio")
        const scoreMemory=require('../../JSON/scoreMemory.json')
        this.handleOrder(scoreMemory,"punteggio")
        return(
            <>
                <NavbarUser
                 onClickLoginPage={this.handleLoginPage}
                />
                <div className="row" style={{width:'98vw'}}>
                    <Classifica
                        title={"Classifica Memory"}
                        data={scoreMemory}
                        
                    />
                    <Classifica
                        title={"Classifica Quiz"}
                        data={scoreQuiz}
                    />
                </div>
            </>
           
        );
    }
}
export default withRouter(HomePageUser);