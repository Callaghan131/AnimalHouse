import React, {Component} from "react";
import { Service } from "./utilities/ZooAPI2";
class Curiosity2 extends Component{
      render()
    {
        return(
            <section id="animal" style={{display:"grid", gridTemplateColumns:"1fr 1fr", margin: 20}}>
                <img src="https://http2.mlstatic.com/D_NQ_NP_967840-MLM26976300618_032018-W.jpg" height="600px" width="400px"/>
                    <div id="listoffacts">
                        <p style={{fontWeight:"bold", fontSize:25}}> Ecco alcune curiosità relative a cani e gatti:</p>
                         <button style={{marginBottom:20, background: "violet"}} id="btn" className="button-1" type="button" onClick={this.getZoo}>Curiosità feline</button>
                         <button style={{marginBottom:20, marginLeft:20, background: "violet"}} id="btn" className="button-1" type="button" onClick={this.getZoo}>Curiosità canine</button>
                    <div id="testo" style={{border:"3px dashed black", width:600 , height:500,fontWeight:"bold",  lineHeight:2, fontSize:17, fontFamily:"Courier" , fontStyle:"italic"}}>
                    </div>
                    </div>
            </section>
        );
    }
     getZoo = () => {
        this.Service.get()
        .then(data => {
            this.JSONsetupZOO(data);
        });
    }

    constructor(){
        super()
        this.Service = new Service();
    }
    JSONsetupZOO(json1)
    {  
        var arrayFacts=[];
        var random=this.getRandomInt(4);
        var div=document.getElementById('testo');
        var stringa=""
        for(var a=0;a<5;a++){
            arrayFacts.push(json1[a]["text"])
            stringa=" "+stringa+" "+a+")"+" "+arrayFacts[a];
        }
        div.innerHTML=stringa
        //arrayFacts.push(json["facts"][b])
    }
    getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }
}
export default Curiosity2;