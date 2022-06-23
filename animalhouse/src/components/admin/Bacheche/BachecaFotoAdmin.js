import React, {Component} from "react";
import { BachecaFotoService} from "../../UserSection/service/BachecaFotoService";
class BachecaFotoAdmin extends Component {
    // testo(){
    //     let bachecaFotoService = new BachecaFotoService();
    //     var textarea=document.getElementById('textarea');
    //     var valore=textarea.value;
    //     var path=window.location.href.split("/");
    //     var user=path[5];
    //     bachecaFotoService.savePost(
    //         {
    //             indirizzo: valore,
    //             utente: user
    //         }
    //     )
    //     .then(data1 => {
    //         console.log(data1);
    //     });
    // }
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
        var div=document.getElementById("carosello");
        div.innerHTML="";
        div.style.display="grid";
        div.style.gridTemplateColumns="1fr 1fr";
        //div.style.gridGap="5px";
        for(var a=0;a<json.length;a++){
            var div2=document.createElement('div');
            var indirizzo=JSON.stringify(json[a]);
            var indirizzo2=indirizzo.split('"');
            var img=document.createElement('img');
            var button=document.createElement('button');
            button.style.background="red"
            button.style.width="40px"
            button.style.height="25px"
            button.style.color="white";
            button.style.borderColor="white";
            button.style.borderRadius="50px"
            button.innerHTML="X"
            img.style.width="20vw";
            img.style.height="30vh";
            img.src=indirizzo2[3];
            button.addEventListener("click",function(){
                let bachecaFotoService=new BachecaFotoService();
                this.parentNode.style.display="none";
                var testo=this.parentNode.firstChild.src;
                bachecaFotoService.aggiornaFoto(testo);
            })
            div.appendChild(div2);
            div2.appendChild(img);
            div2.appendChild(button);
        }
    }
    render() {
      return (
        <>
        <div className="wrap" style={{width:"45vw", margin:"15px auto",padding:"15px 10px",background:"white",border:"2px solid #DBDBDB",WebkitBorderRadius:"5px",MozBorderRadius:"5px",borderRadius:"5px", textAlign:"center"}}>
            <div id="bacheca">
                <h1 className="title">Bacheca foto</h1>
                <div id="carosello">

                </div>
            </div>
            <label>
                <p className="users"></p>
                {/* <button type="submit" onClick={() => { this.testo()}} style={{background:"black", color:"white", fontSize:"20px"}}>Invia foto</button> */}
                <button type="submit" onClick={() => {this.richiesta()}} style={{background:"black", color:"white", fontSize:"20px"}}>Visualizza le foto in bacheca</button>
            </label>
        </div>
        </>
      );
    }
}
  
export default BachecaFotoAdmin;