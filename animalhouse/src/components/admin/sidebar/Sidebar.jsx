import React from "react";
export default function Sidebar(){
    return(
    <div className="sidebar" style={{backgroundColor:"lightgrey",flex:1,height:"calc(100vh-50px)",position:"sticky", top:"50px"}}>
        <div className="sidebarWrapper" style={{padding:"20px", color:"#555"}}>
            <div className="sidebarMenu" style={{marginBottom:"10px"}}>
                <h3 className="sidebarTitle" style={{fontSize:"30px", color:"black"}}>Dashboard</h3>
                <ul className="sidebarList" style={{listStyle:"none", padding:"5px"}}>
                    <li className="sidebarListItem">
                        Home
                    </li>
                    <li className="sidebarListItem">
                        E-commerce
                    </li>
                    <li className="sidebarListItem">
                        Utenti
                    </li>
                </ul>
            </div>
        </div>
    </div>
    )
}