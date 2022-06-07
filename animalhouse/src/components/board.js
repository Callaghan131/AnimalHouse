import React from 'react'
import Profiles from './profiles';
import '../css/classifica.css';
import Classifica from './classifica';
export default function Board(){
    const handleClick=(e)=>{
        console.log(e.target)
    }
    return(
    <><div className="board" style={{textAlign:"center"}}>
            <h1 className="titoloBoard" style={{marginTop:"20px", marginBottom:"10px"}}>Classifica Memory</h1>
            </div><Classifica/></>

    )
}