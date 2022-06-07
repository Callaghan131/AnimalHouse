import React, {Component} from "react";
import { Service } from "../utilities/ZooAPI2";
class Curiosity2 extends Component{
      render()
    {
        return(
            <section id="animal" style={{ color:"white",margin: 20}}>
                <p style={{fontWeight:"bold", fontSize:25}}> Ecco alcune curiosità relative a cani e gatti:</p>
                         <button style={{marginBottom:20, background: "white"}} id="btn" className="button-1" type="button" onClick={this.getCats}>Curiosità feline</button>
                         <button style={{marginBottom:20, marginLeft:20, background: "white"}} id="btn" className="button-1" type="button" onClick={this.getZoo}>Fatti animali</button>
                <div id="contenitore" style={{display: "grid", gridTemplateColumns:"1fr 1fr 1fr", gridGap:10}}>
                <div id="img" style={{height:"60vh", width:"30vw"}}>
                <img id="image_link"  style={{maxHeight:"100%", maxWidth:"100%", objectFit:"contain"}} src="https://http2.mlstatic.com/D_NQ_NP_967840-MLM26976300618_032018-W.jpg" />
                </div>
                <div id="testo" style={{ overflowY:"scroll", marginLeft:-40, padding:10, border:"3px dashed black", width:550 , height:600,fontWeight:"bold",  lineHeight:2, fontSize:17, fontFamily:"Courier" , fontStyle:"italic"}}>
                    Curiosità feline
                </div>
                    <div id="testo2" style={{marginLeft:-40,padding: 10, border:"3px dashed black", width:550 , height:600,fontWeight:"bold",  lineHeight:2, fontSize:17, fontFamily:"Courier" , fontStyle:"italic"}}>
                    <p> Ecco alcune info su <span style={{color:"green", background:"lightgreen"}} id="name"></span>:</p>
                            <ol id="list1">
                                <li>The latin name is <span style={{color:"green", background:"lightgreen"}} id="latin_name"></span></li>
                                <li>The type of this animal is <span style={{color:"green", background:"lightgreen"}} id="animal_type"></span></li>
                                <li>The active time of the animal is <span style={{color:"green", background:"lightgreen"}} id="active_time"></span></li>
                                <li>The lifespan time of the animal is <span style={{color:"green", background:"lightgreen"}} id="lifespan"></span></li>
                                <li>The habitat of the animal is <span style={{color:"green", background:"lightgreen"}} id="habitat"></span></li>
                                <li>The diet of the animal is <span style={{color:"green", background:"lightgreen"}} id="diet"></span></li>
                                <li>This animal has a minimum length of <span style={{color:"green", background:"lightgreen"}} id="length_min"></span> and a maximum length of <span
                                    style={{color:"green", background:"lightgreen"}} id="length_max"></span></li>
                                <li>This animal has a minimum weight of <span style={{color:"green", background:"lightgreen"}} id="weight_min"></span> and a maximum weight of <span
                                    style={{color:"green", background:"lightgreen"}} id="weight_max"></span></ li>
                            </ol>
                    </div>
                    </div>
            </section>
        );
    }
    getCats = () => {
        this.Service.getCats()
        .then(data1 => {
            this.JSONsetupCats(data1);
        });
    }
     getZoo = () => {
        this.Service.getAnimals()
        .then(data3 => {
            this.JSONsetupAnimals(data3);
        });
    }

    constructor(){
        super()
        this.Service = new Service();
    }
    JSONsetupCats(json1)
    {  
        var arrayFacts=[];
        var random=this.getRandomInt(4);
        var div2=document.getElementById('testo2');
        var div=document.getElementById('testo');
        div.innerHTML="";
        div.innerHTML="Curiosità feline"
        div2.style.display="none";
        div.style.display="block"
        var stringa="";
        for(var a=0;a<5;a++){
            arrayFacts.push(json1[a]["text"])
            var p=document.createElement("p");
            stringa=(a+1)+")"+" "+arrayFacts[a];
            p.innerHTML=stringa;
            console.log(arrayFacts[a]);
            div.appendChild(p);
        }
        //div.innerHTML=stringa;
        var img=document.getElementById('image_link');
        img.src="https://static.kodami.it/wp-content/uploads/sites/31/2020/12/Europeo-gatto-3-1200x1200.jpg"
    }
    JSONsetupAnimals(json3)
    {  
        
        var array=["name","latin_name", "animal_type","active_time","lifespan", "habitat","diet","length_min","length_max","weight_min","weight_max"]
        var div=document.getElementById('testo');
        var div2=document.getElementById('testo2');
        div.style.display="none";
        div2.style.display="block"
        for(var a=0;a<array.length;a++){
            var indice=array[a];
            var contenuto=json3[indice];
            document.getElementById(indice).innerHTML = contenuto
        }
        var img=document.getElementById('image_link');
        img.src=json3["image_link"]

    }
    getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }
}
export default Curiosity2;