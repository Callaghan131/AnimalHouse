import React, {Component} from "react";
import { BachecaFotoService } from "./service/BachecaFotoService";
class BachecaFoto extends Component {
    testo(){
        let bachecaFotoService = new BachecaFotoService();
        var textarea=document.getElementById('textarea');
        var valore=textarea.value;
        var path=window.location.href.split("/");
        var user=path[5];
        bachecaFotoService.savePost(
            {
                indirizzo: valore,
                utente: user
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
        var utenti=[];
        for(var a=0;a<json.length;a++){
            var indirizzo=JSON.stringify(json[a]);
            var indirizzo2=indirizzo.split('"');
            immagini[a]=indirizzo2[3];
            utenti[a]=indirizzo2[7];
        }
        var img=document.getElementsByTagName('img');
        var p=document.getElementsByClassName('users');
        img[0].src=immagini[0];
        if(utenti[0]!=undefined){
        p[0].innerHTML=utenti[0];
        p[0].style.fontWeight="bold";
        setTimeout(this.ripeti(json,img,immagini,p,utenti),3000);
    }
}
    ripeti(json,img,immagini,p,utenti){
        var contatore=1;
        setInterval(function(){
            img[0].src=immagini[contatore];
            p[0].innerHTML=utenti[contatore];
            p[0].style.fontWeight="bold";
            contatore++;
            if(contatore==json.length){
                contatore=0;
            }
        },5000);
    }
    render() {
      return (
        <>
        <div className="wrap" style={{width:"45vw", margin:"15px auto",padding:"15px 10px",background:"white",border:"2px solid #DBDBDB",WebkitBorderRadius:"5px",MozBorderRadius:"5px",borderRadius:"5px", textAlign:"center"}}>
            <div id="bacheca">
                <h1 className="title">Bacheca foto</h1>
                <div id="carosello">
                    <img style={{width:"25vw", height:"35vh", marginBottom:"20px"}} src="" alt="Clicca una volta su visualizza per vedere lo slideshow delle immagini pubblicate in bacheca"></img>
                </div>
            </div>
            <label>
                <p className="users"></p>
                <textarea placeholder="Inserisci l'URL dell'immagine che vuoi pubblicare" id="textarea" rows={2} cols={88}></textarea>
                <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gridGap:"10px"}}>
                <button type="submit" onClick={() => { this.testo()}} style={{background:"black", color:"white", fontSize:"20px"}}>Invia foto</button>
                <button type="submit" onClick={() => {this.richiesta()}} style={{background:"black", color:"white", fontSize:"20px"}}>Visualizza slideshow</button>
                </div>
            </label>
        </div>
        </>
      );
    }
}
  
export default BachecaFoto;