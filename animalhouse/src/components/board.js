import React from 'react'
import Profiles from './profiles';
import {Classifica} from './database'

export default function Board(){
    const handleClick=(e)=>{
        console.log(e.target)
    }
    return(
    <><div className="board" style={{textAlign:"center"}}>
            <h1 className="leaderboard" style={{marginTop:"10px", marginBottom:"10px"}}>Classifica Memory</h1>
            </div><Profiles Classifica={Classifica}></Profiles></>

    )
}