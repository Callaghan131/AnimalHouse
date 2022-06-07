import React, {Component} from "react";
import { Table } from "react-bootstrap";

class Classifica extends Component{
    render(){
        return(
            
            <table id="tabella" cellPadding={15}>
                <tr id="riga1" style={{height:100, color: "green", background: "lightgreen"}}>
                    <th>Username Utente</th>
                    <th>Punteggio Utente</th>
                </tr>
                <tr id="riga2">
                    <th>Giocatore 1</th>
                    <th>100</th>
                </tr>
                <tr id="riga3">
                    <th>Giocatore 2</th>
                    <th>200</th>
                </tr>
                <tr id="riga4">
                    <th>Giocatore 3</th>
                    <th>300</th>
                </tr>
                <tr id="riga5">
                    <th>Giocatore 4</th>
                    <th>400</th>
                </tr>
                <tr id="riga6">
                    <th>Giocatore 5</th>
                    <th>500</th>
                </tr>
            </table>
        );
    }
}
export default Classifica;