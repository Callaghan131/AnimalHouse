import React, {Component} from "react";
import { Carousel } from "react-bootstrap";
import '../../css/Bacheca.css';
import { BachecaService } from "./service/BachecaService";
class Bacheca extends Component {
    testo(){
        let bachecaService = new BachecaService();
        var textarea=document.getElementsByTagName('textarea');
        var testo=textarea[0].value;
        bachecaService.savePost(
            {
                messaggio: testo
            }
        )
        .then(data1 => {
            console.log(data1);
        });
    }

    richiesta(){
        let request=new XMLHttpRequest();
        request.open("GET","http://localhost:2700/bacheca")
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
        div.style.height="150px";
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
            p.style.fontSize="20px";
            p.style.fontStyle="italic";
            div.appendChild(p);
            var testo=JSON.stringify(json[a]);
            var testo2=testo.split('"');
            stringa=(a+1)+")"+" "+testo2[3];

            p.innerHTML=stringa;
        }
    }
    render() {
      return (
        <>
        <div className="wrap">
            <div id="bacheca">
                <h1 className="title">Bacheca aneddoti</h1>
            </div>
            <textarea placeholder="Inserisci l'aneddoto che vuoi pubblicare e poi clicca su visualizza per vederli tutti" rows={2} cols={88}></textarea>
            <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gridGap:"10px"}}>
                <button type="submit" onClick={() => { this.testo()}} style={{background:"black", color:"white", fontSize:"20px"}}>Invia aneddoto</button>
                <button type="submit" onClick={() => { this.richiesta()}} style={{background:"black", color:"white", fontSize:"20px"}}>Visualizza aneddoti</button>
            </div>
        </div>
        </>
      );
    }
}
  
export default Bacheca;