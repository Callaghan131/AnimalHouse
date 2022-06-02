import React from 'react'
export default function Profiles({Classifica}){
    return(
        <div id="profile">
            {item(Classifica)}
        </div>
    )
}
function item(data){
    return(
        <>
        {
        data.map((value, index)=>(
        <div className="grid" style={{justifyContent:"space-between", gap:"1em", marginBottom:"2px" }}>
            <div className="item" style={{width:"50%", display:"grid", gridTemplateColumns:"1fr 1fr", alignItems:"center", border:"3px solid black",
        textAlign:"center", marginBottom:"10px", marginLeft:"400px"}}>
                <img src={value.img} style={{width:"20%", borderRadius:"50%", marginLeft:"50px" }}/>
                <div className="info" style={{padding:"1em"}}>
                    <h3 className="name text-dark">{value.name}</h3>
                    <span style={{fontSize:"20px", fontWeight:"bold"}}>{value.score}</span>
                </div>
            </div>
        </div>
        ))
            }
            </>
    )
}