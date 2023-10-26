import React, {useState} from 'react';
import userImg from "../../img//mediumUserImg.png"; 
import TwoChoice from "../GomGomBoard/twoChoice";

function UserGomin(){
    const gominContent = { 
        width: "46.125rem",
        height: "auto",
        flexShrink: "0",
        borderRadius: "1.5rem",
        background: "var(--ffffff, #FFF)",
        boxShadow: "0px 2px 4px 0px rgba(210, 205, 189, 0.50)", 
        marginLeft:"2.5rem"
    }

    return (
        <div style={{paddingTop:"4.25rem", display:"flex", justifyContent:"center", marginBottom:"6.56rem"}}>
            <div>
                <img src={userImg}/>
            </div>
            <div style={gominContent}>
                <div>
                    <div></div>
                    <div></div>
                </div>
                <div>
                    <TwoChoice/>
                    <TwoChoice gominText="종이모래" gominPercent="40%" />
                </div>
            </div>
        </div>
    );
}

export default UserGomin;