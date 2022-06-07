import React, {Component} from "react";
import NavbarUser from "./navbarUser";
import Classifica from "./classifica";

class HomePageUser extends Component{
    render(){
        return(
            <>
                <NavbarUser/>
                <div className="row" style={{width:'98vw'}}>
                    <Classifica
                        title={"Classifica Memory"}
                    />
                    <Classifica
                        title={"Classifica Quiz"}
                    />
                </div>
            </>
           
        );
    }
}
export default HomePageUser;