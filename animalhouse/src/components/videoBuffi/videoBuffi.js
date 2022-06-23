import React, {Component} from "react";

class VideoBuffi extends Component{
    render(){
        return(
        <><h1 id="titolo" style={{height:"60px",borderRadius:"6px",background:"white",color: "purple", textAlign: "center", marginBottom: 20, paddingTop:"5px"}}>Carrellata di video buffi a tema animale!</h1>
        <div id="contenitore" style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
                <table cellPadding="10" id="sx">
                    <tr style={{textAlign:"center"}}>
                        <td style={{color:"white"}}><b>Paperissima Sprint 2000</b></td>
                    </tr>
                    <tr style={{textAlign:"center"}}>
                        <td><iframe width="560" height="315" src="https://www.youtube.com/embed/JEY9HnA2Kl0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></td>
                    </tr>
                    <tr style={{textAlign:"center"}}>
                         <td style={{color:"white"}}><b>Animali dispettosi</b>
                        </td>
                    </tr>
                    <tr style={{textAlign:"center"}}>
                        <td>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/DKkoU-zBBJE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </td>
                    </tr>
                    <tr style={{textAlign:"center"}}>
                        <td style={{color:"white"}}>
                            <b>Prova a non ridere challenge</b>
                        </td>
                    </tr>
                    <tr style={{textAlign:"center"}}>
                        <td>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/jgpgB1zteAs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </td>
                    </tr>
                </table>
                <table cellPadding="10" id="dx">
                    <tr style={{textAlign:"center"}}>
                        <td style={{color:"white"}}><b>La vendetta di Fabrizio</b>
                        </td>
                    </tr>
                    <tr style={{textAlign:"center"}}>
                        <td><iframe width="560" height="315" src="https://www.youtube.com/embed/tt5GTlwu8oI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></td>
                    </tr>
                    <tr style={{textAlign:"center"}}>
                         <td style={{color:"white"}}><b>Imagine Dragons - Believer (Animal Cover)</b>
                        </td>
                    </tr>
                    <tr style={{textAlign:"center"}}>
                        <td>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/-2YYF5Ysvdg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </td>
                    </tr>
                    <tr style={{textAlign:"center"}}>
                        <td style={{color:"white"}}>
                            <b>Cani nelle vesti di esseri umani
                            </b>
                        </td>
                    </tr>
                    <tr style={{textAlign:"center"}}>
                        <td>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/IdmBz3PRivI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </td>
                    </tr>
                </table>
            </div></>
        );
        }
        }
export default VideoBuffi;