import React, {Component} from "react";
import { Table } from "react-bootstrap";

class Classifica extends Component{
    render(){
        return(
            <>
                
                <div className="col" style={{marginLeft: '5vw', marginTop:'10vh', marginRight:'5vw'}}>
                    <h2 style={{textAlign:'center', color:'white', marginBottom:'3vh'}}>{this.props.title}</h2>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                            <th>Username</th>
                            <th>Punteggio</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>Giocatore1</td>
                            <td>100</td>
                            </tr>
                            <tr>
                            <td>Giocatore2</td>
                            <td>200</td>
                            </tr>
                            <tr>
                            <td>Giocatore3</td>
                            <td>300</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </>
        );
    }
}
export default Classifica;