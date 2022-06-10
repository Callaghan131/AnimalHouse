import React, {Component} from "react";
import { Table } from "react-bootstrap";
import BoxUsername from "../../BoxUsername";
import LoginPage from "../Login/LoginPage";


/*DA CAPIRE COME PRENDERE IL TIPO DI GIOCO QUIZ O MEMORY */
class ClassificaPlayerForm extends Component{
    render(){
        return(
            <>
                <div className="col" style={{marginLeft: '5vw', marginTop:'10vh', marginRight:'5vw'}}>
                    <h2 style={{textAlign:'center', color:'white', marginBottom:'3vh'}}>{this.props.title}</h2>
                    <Table striped bordered hover variant="dark" name="tabellapunti">
                        <thead>
                            <tr>
                            <th>Username</th>
                            <th>Punteggio</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td name="UsernamePlayer"></td>
                            <td name="UsernamePunteggio"></td>
                            </tr>   
                        </tbody>
                    </Table>
                </div>
            </>
        );
    }
}
export default ClassificaPlayerForm;