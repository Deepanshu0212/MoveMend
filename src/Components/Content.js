import React from "react";
import '../Pages/JoinTeam.css'

function Content({h, p, index}){
    return(
        <div id={`content${index}`}>
            <div style={{marginTop: "5vh"}}>
                <span className="heading2">{h}</span>
            </div>
            <p style={{marginTop: "2vh"}}>{p}</p>
        </div>
    );
}
export default Content;