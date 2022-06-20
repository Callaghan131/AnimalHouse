import React, {Component} from "react";
import {Carousel} from 'react-bootstrap';

class ImmaginiBuffe extends Component{
  state={
    imgs: [],
  }
    componentWillMount() {
      this.funzione();
    }
    funzione(){
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
           <><h1 id="titolo" style={{height:"60px",borderRadius:"6px",background:"white",color: "purple", textAlign: "center", marginBottom: 30, paddingTop:"5px"}}>Immagini buffe a tema animale</h1>
           <Carousel>
            <Carousel.Item>
              <img
                className="d-block"
                style={{ height: 500, width: 700, position: "relative", left:450, marginBottom: 60 }}
                src={this.state.imgs[0]}
                alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block"
                style={{ height: 500, width: 700, position: "relative", left:450, marginBottom: 60 }}
                src={this.state.imgs[1]}
                alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block"
                style={{ height: 500, width: 700, position: "relative", left:450, marginBottom: 60 }}
                src={this.state.imgs[2]}
                alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block"
                style={{ height: 500, width: 700, position: "relative", left:450, marginBottom: 60 }}
                src={this.state.imgs[3]}
                alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block"
                style={{ height: 500, width: 700, position: "relative", left:450, marginBottom: 60 }}
                src={this.state.imgs[4]}
                alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block"
                style={{ height: 500, width: 700, position: "relative", left:450, marginBottom: 60 }}
                src={this.state.imgs[5]}
                alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block"
                style={{ height: 500, width: 700, position: "relative", left:450, marginBottom: 60 }}
                src={this.state.imgs[6]}
                alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block"
                style={{ height: 500, width: 700, position: "relative", left:450, marginBottom: 60 }}
                src={this.state.imgs[7]}
                alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block"
                style={{ height: 500, width: 700, position: "relative", left:450, marginBottom: 60 }}
                src={this.state.imgs[8]}
                alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block"
                style={{ height: 500, width: 700, position: "relative", left:450, marginBottom: 60 }}
                src={this.state.imgs[9]}
                alt="First slide" />

            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block"
                style={{ height: 500, width: 700, position: "relative", left:450, marginBottom: 60 }}
                src={this.state.imgs[10]}
                alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block"
                style={{ height: 500, width: 700, position: "relative", left:450, marginBottom: 60 }}
                src={this.state.imgs[11]}
                alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block"
                style={{ height: 500, width: 700, position: "relative", left:450, marginBottom: 60 }}
                src={this.state.imgs[12]}
                alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block"
                style={{ height: 500, width: 700, position: "relative", left:450, marginBottom: 60 }}
                src={this.state.imgs[13]}
                alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block"
                style={{ height: 500, width: 700, position: "relative", left:450, marginBottom: 60 }}
                src={this.state.imgs[14]}
                alt="First slide" />
            </Carousel.Item>
          </Carousel></>
        );
  }
}
export default ImmaginiBuffe;