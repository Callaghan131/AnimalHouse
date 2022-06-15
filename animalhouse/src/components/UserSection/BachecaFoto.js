import React, {Component} from "react";
import { BachecaFotoService } from "./service/BachecaFotoService";
class BachecaFoto extends Component {
    testo(){
        let bachecaFotoService = new BachecaFotoService();
        var textarea=document.getElementById('textarea');
        var valore=textarea.value;
        console.log(valore);
        bachecaFotoService.savePost(
            {
                indirizzo: valore
            }
        )
        .then(data1 => {
            console.log(data1);
        });
    }
    richiesta(){
        let request=new XMLHttpRequest();
        request.open("GET","http://localhost:2700/bachecaFoto")
        request.send();
        request.onload=()=>{
            if(request.status==200){
                var json=JSON.parse(request.response);
                this.presenta(json);
            }else{
                console.log("Errore")
            }
        }
    }
    presenta(json){
        var immagini=[];
        for(var a=0;a<json.length;a++){
            var indirizzo=JSON.stringify(json[a]);
            var indirizzo2=indirizzo.split('"');
            immagini[a]=indirizzo2[3];
        }
        var img=document.getElementsByTagName('img');
        img[0].src=immagini[0];
        setTimeout(this.ripeti(json,img,immagini),3000);
    }
    ripeti(json,img,immagini){
        var contatore=1;
        setInterval(function(){
            img[0].src=immagini[contatore];
            contatore++;
            if(contatore==json.length){
                contatore=0;
            }
        },5000);
    }
    render() {
      return (
        <>
        <div className="wrap">
            <div id="bacheca">
                <h1 className="title">Bacheca foto</h1>
                <div id="carosello">
                    <img style={{width:"300px", height:"300px", marginBottom:"20px"}} src="" alt="Clicca su visualizza per vedere lo slideshow delle immagini pubblicate in bacheca"></img>
                </div>
            </div>
            <label>
                <textarea placeholder="Inserisci l'URL dell'immagine che vuoi pubblicare" id="textarea" rows={2} cols={88}></textarea>
                <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gridGap:"10px"}}>
                <button type="submit" onClick={() => { this.testo()}} style={{background:"black", color:"white", fontSize:"20px"}}>Invia</button>
                <button type="submit" onClick={() => {this.richiesta()}} style={{background:"black", color:"white", fontSize:"20px"}}>Visualizza</button>
                </div>
            </label>
        </div>
        </>
      );
    }
}
  
export default BachecaFoto;