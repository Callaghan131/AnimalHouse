import React, {Component} from "react";
import { BachecaService } from "./service/BachecaService";
class Bacheca extends Component {
    testo(){
        let bachecaService = new BachecaService();
        var textarea=document.getElementsByTagName('textarea');
        var testo=textarea[0].value;
        var path=window.location.href.split("/");
        var username=path[5];
        bachecaService.savePost(
            {
                messaggio: testo,
                utente: username 
            }
        )
        .then(data1 => {
            console.log(data1);
        });
    }

    richiesta(){
        let request=new XMLHttpRequest();
        request.open("GET","http://localhost:2800/bacheca")
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
        var div=document.getElementById('bacheca');
        div.style.overflowY="scroll";
        div.style.height="65.2vh";
        var stringa="";
        var elimina=document.getElementsByClassName('paragrafo');
        for(var b=0;b<elimina.length;b++){
            elimina[b].style.display="none";
        }
        for(var a=0;a<json.length;a++){
            var p=document.createElement('p');
            p.className="paragrafo";
            p.style.borderBottom="1px dashed black"
            p.style.textAlign="left";
            p.style.fontSize="17px";
            p.style.fontStyle="italic";
            div.appendChild(p);
            var testo=JSON.stringify(json[a]);
            var testo2=testo.split('"');
            var utente=testo2[7];
            var utenteG=utente.bold();
            stringa=utenteG+":"+" "+testo2[3];

            p.innerHTML=stringa;
        }
    }
    render() {
      return (
        <>
        <div className="wrap" style={{width:"45vw", margin:"15px auto",padding:"15px 10px",background:"white",border:"2px solid #DBDBDB",WebkitBorderRadius:"5px",MozBorderRadius:"5px",borderRadius:"5px", textAlign:"center"}}>
            <div id="bacheca">
                <h1 className="title">Bacheca aneddoti</h1>
            </div>
            <textarea placeholder="Inserisci l'aneddoto che vuoi pubblicare e poi clicca su visualizza per vederli tutti" rows={2} cols={88}></textarea>
            <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gridGap:"10px"}}>
                <button type="submit" onClick={() => { this.testo()}} style={{background:"black", color:"white", fontSize:"20px"}}>Invia aneddoto</button>
                <button id="bella" type="submit" onClick={() => { this.richiesta()}} style={{background:"black", color:"white", fontSize:"20px"}}>Visualizza aneddoti</button>
            </div>
        </div>
        </>
      );
    }
}
  
export default Bacheca;