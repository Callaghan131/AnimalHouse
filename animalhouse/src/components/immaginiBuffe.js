import React, {Component} from "react";
import {Carousel} from 'react-bootstrap';

class ImmaginiBuffe extends Component{
  /*constructor(props){
    super(props);
    this.state={
      isLoaded:true
    };
  }*/
  state={
    imgs: [],
    //foo: false
  }
  // componentDidMount() {
  //   var newArray=[...this.state.imgs]; //array ausiliario che contiene tutti i valori
  //   var data=[];
  //   fetch("https://api.thecatapi.com/v1/images/search")
  //         .then(res =>  res.json())
  //         .then(
  //           (result) => {
  //             data=result;
  //             newArray.push(data["image"]);
  //             this.setState({imgs:newArray})
  //                        this.setState({foo:!this.state.foo})
  //             console.log(data);
  //             }
  //             )
  //              //console.log(newArray);
  // }
    componentWillMount() {
      this.funzione();
       // this.setState=({isLoaded:false});
      //}else{
        //console.log("Errore")
      //}
    }
    funzione(){
      //if(this.state.isLoaded){
        let a = this.state.imgs.slice();
        for (var b=0;b<15;b++){
          fetch("https://api.thecatapi.com/v1/images/search")
          .then(res =>  res.json())
          .then(
            (result) => {
              a.push(result[0]["url"]);
              this.setState({imgs:a});
            })
          }
        }
    getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }
      render(){
        return(
          <Carousel>
  <Carousel.Item>
    <h3 id="titolo" style={{color:"black", textAlign:"center", marginTop:20}}>Immagini Buffe
    </h3>
    <img
      className="d-block"
      style={{height: 500, width: 700, position:"relative", left:450, marginBottom:60}}
      src={this.state.imgs[0]}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
     <h3 id="titolo" style={{color:"black", textAlign:"center", marginTop:20}}>Immagini Buffe
    </h3>
    <img
      className="d-block"
      style={{height: 500, width: 700, position:"relative", left:450, marginBottom:60}}
      src={this.state.imgs[1]}
      alt="First slide"
    />
  </Carousel.Item>
    <Carousel.Item>
          <h3 id="titolo" style={{color:"black", textAlign:"center", marginTop:20}}>Immagini Buffe
    </h3>
    <img
      className="d-block"
      style={{height: 500, width: 700, position:"relative", left:450, marginBottom:60}}
      src={this.state.imgs[2]}
      alt="First slide"
    />
  </Carousel.Item>
    <Carousel.Item>
       <h3 id="titolo" style={{color:"black", textAlign:"center", marginTop:20}}>Immagini Buffe
    </h3>
    <img
      className="d-block"
      style={{height: 500, width: 700, position:"relative", left:450, marginBottom:60}}
      src={this.state.imgs[3]}
      alt="First slide"
    />
  </Carousel.Item>
    <Carousel.Item>
    <h3 id="titolo" style={{color:"black", textAlign:"center", marginTop:20}}>Immagini Buffe
    </h3>
    <img
      className="d-block"
      style={{height: 500, width: 700, position:"relative", left:450, marginBottom:60}}
      src={this.state.imgs[4]}
      alt="First slide"
    />
  </Carousel.Item>
    <Carousel.Item>
       <h3 id="titolo" style={{color:"black", textAlign:"center", marginTop:20}}>Immagini Buffe
    </h3>
    <img
      className="d-block"
      style={{height: 500, width: 700, position:"relative", left:450, marginBottom:60}}
      src={this.state.imgs[5]}
      alt="First slide"
    />
  </Carousel.Item>
    <Carousel.Item>
    <h3 id="titolo" style={{color:"black", textAlign:"center", marginTop:20}}>Immagini Buffe
    </h3>
    <img
      className="d-block"
      style={{height: 500, width: 700, position:"relative", left:450, marginBottom:60}}
      src={this.state.imgs[6]}
      alt="First slide"
    />
  </Carousel.Item>
    <Carousel.Item>
    <h3 id="titolo" style={{color:"black", textAlign:"center", marginTop:20}}>Immagini Buffe
    </h3>
    <img
      className="d-block"
      style={{height: 500, width: 700, position:"relative", left:450, marginBottom:60}}
      src={this.state.imgs[7]}
      alt="First slide"
    />
  </Carousel.Item>
    <Carousel.Item>
      <h3 id="titolo" style={{color:"black", textAlign:"center", marginTop:20}}>Immagini Buffe
    </h3>
    <img
      className="d-block"
      style={{height: 500, width: 700, position:"relative", left:450, marginBottom:60}}
      src={this.state.imgs[8]}
      alt="First slide"
    />
  </Carousel.Item>
    <Carousel.Item>
     <h3 id="titolo" style={{color:"black", textAlign:"center", marginTop:20}}>Immagini Buffe
    </h3>
    <img
      className="d-block"
      style={{height: 500, width: 700, position:"relative", left:450, marginBottom:60}}
      src={this.state.imgs[9]}
      alt="First slide"
    />
   
  </Carousel.Item>
    <Carousel.Item>
     <h3 id="titolo" style={{color:"black", textAlign:"center", marginTop:20}}>Immagini Buffe
    </h3>
    <img
      className="d-block"
      style={{height: 500, width: 700, position:"relative", left:450, marginBottom:60}}
      src={this.state.imgs[10]}
      alt="First slide"
    />
  </Carousel.Item>
    <Carousel.Item>
    <h3 id="titolo" style={{color:"black", textAlign:"center", marginTop:20}}>Immagini Buffe
    </h3>
    <img
      className="d-block"
      style={{height: 500, width: 700, position:"relative", left:450, marginBottom:60}}
      src={this.state.imgs[11]}
      alt="First slide"
    />
  </Carousel.Item>
    <Carousel.Item>
    <h3 id="titolo" style={{color:"black", textAlign:"center", marginTop:20}}>Immagini Buffe
    </h3>
    <img
      className="d-block"
      style={{height: 500, width: 700, position:"relative", left:450, marginBottom:60}}
      src={this.state.imgs[12]}
      alt="First slide"
    />
  </Carousel.Item>
    <Carousel.Item>
     <h3 id="titolo" style={{color:"black", textAlign:"center", marginTop:20}}>Immagini Buffe
    </h3>
    <img
      className="d-block"
      style={{height: 500, width: 700, position:"relative", left:450, marginBottom:60}}
      src={this.state.imgs[13]}
      alt="First slide"
    />
  </Carousel.Item>
    <Carousel.Item>
     <h3 id="titolo" style={{color:"black", textAlign:"center", marginTop:20}}>Immagini Buffe
    </h3>
    <img
      className="d-block"
      style={{height: 500, width: 700, position:"relative", left:450, marginBottom:60}}
      src={this.state.imgs[14]}
      alt="First slide"
    />
  </Carousel.Item>
  </Carousel>
        );
  }
}
export default ImmaginiBuffe;