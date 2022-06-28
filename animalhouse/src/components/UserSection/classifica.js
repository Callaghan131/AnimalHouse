import React, {Component} from "react";
import { Table } from "react-bootstrap";
import QuizResult from '../../JSON/scoreQuiz.json';

class Classifica extends Component{

  
    render(){
        
        const dataQuiz=require('../../JSON/scoreQuiz.json')
        const path=window.location.href.split("/");
        return(
            <>
                <style>
                    .noHover{"{"}
                        pointer-events:none;
                        background-color: green !important;
                        --bs-table-striped-bg:none !important;
                    {"}"}

                </style>
                <div className="col" style={{marginLeft: '5vw', marginTop:'10vh', marginRight:'5vw'}}>
                    <h2 style={{textAlign:'center', color:'black', marginBottom:'3vh'}}>{this.props.title}</h2>
                    <Table striped bordered hover variant="dark" name="table">
                        <thead>
                            <tr>
                            <th>Username</th>
                            <th>Punteggio</th>
                            </tr>
                        </thead>
                        <tbody >
                           
                            {this.props.data.map((user)=>(
                                path[5]===user.username ?
                                <tr >
                                    <td className="noHover" >{user.username}</td>
                                    <td className="noHover" >{user.punteggio}</td>
                                </tr>
                                :
                                <tr>
                                    <td>{user.username}</td>
                                    <td>{user.punteggio}</td>
                                </tr>
                            ))}
                            
                        </tbody>
                    </Table>
                </div>
            </>
        );
    }
}
export default Classifica;