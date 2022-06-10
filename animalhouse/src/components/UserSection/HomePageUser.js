import React, {Component} from "react";
import NavbarUser from "./navbarUser";
import Classifica from "./classifica";
import { withRouter } from '../../withRouter';

class HomePageUser extends Component{

    handleLoginPage=()=>{
        this.props.navigate("/LoginPage");
    }

  
    render(){
        const scoreQuiz=require('../../JSON/scoreQuiz.json')
        const scoreMemory=require('../../JSON/scoreMemory.json')
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