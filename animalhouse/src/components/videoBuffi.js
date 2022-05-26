import React, {Component} from "react";
import '../videoBuffi.css'

class VideoBuffi extends Component{
    render(){
        return(
        <div id="contenitore">
            <h3>Ecco una carrellata di video buffi a tema animale!</h3>
        <table cellPadding="10" id="sx">
                <tr>
                     <td><b>Video 1</b>
                    </td>
                     <td><iframe width="560" height="315" src="https://www.youtube.com/embed/JEY9HnA2Kl0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></td>
                </tr>
                <tr>
                    <td><b>Video 2</b>
                    </td>
                    <td>
                       <iframe width="560" height="315" src="https://www.youtube.com/embed/DKkoU-zBBJE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </td>
                </tr>
                <tr>
                    <td>
                        <b>Video 3</b>
                    </td>
                    <td>
                       <iframe width="560" height="315" src="https://www.youtube.com/embed/jgpgB1zteAs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </td>
                </tr>
        </table>
             <table cellPadding="10" id="dx">
                <tr>
                     <td><b>Video 4</b>
                    </td>
                     <td><iframe width="560" height="315" src="https://www.youtube.com/embed/tt5GTlwu8oI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></td>
                </tr>
                <tr>
                    <td><b>Video 5</b>
                    </td>
                    <td>
                       <iframe width="560" height="315" src="https://www.youtube.com/embed/-2YYF5Ysvdg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </td>
                </tr>
                <tr>
                    <td>
                        <b>Video 6</b>
                    </td>
                    <td>
                       <iframe width="560" height="315" src="https://www.youtube.com/embed/IdmBz3PRivI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </td>
                </tr>
            </table>
            </div>
        );
        }
        }
export default VideoBuffi;