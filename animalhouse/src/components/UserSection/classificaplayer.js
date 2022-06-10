import React, {Component} from "react";
import FormLogin from './LoginForm'
import { withRouter } from '../../withRouter';

class ClassificaPlayer extends Component{
    state={
        trovato:false,
        error:""
    }

    /*CAPIRE COME PASSARE GIOCO IN INPUT ALL'HANDLECLICK*/
    handleClickClassificaPlayer=(gioco)=>{
        //this.props.navigate("/LoginPage/HomePageUser");
        const data=require('../../JSON/users.json')
        /*
        DA CAMBIARE ASSOLUTAMENTE
        */
        var username="Username1";

        for(var i=0; i<data.length;i++){
            if(data[i].username==username){
                if(data[i].gioco==gioco)
                {
                    document.tabellapunti.username.value=username;
                    document.tabellapunti.punteggio.value=punteggio;
                }
                this.state.trovato=true;
                break;
            }
        }
       if((this.state.trovato)==false){
           this.setState({error:"Username non trovato"})
       }
       else{

       }
    }
    render(){
        return(
            <FormLogin error={this.state.error} onClick={this.handleClickClassificaPlayer}/>
        );
    }
}
export default withRouter(ClassificaPlayer);