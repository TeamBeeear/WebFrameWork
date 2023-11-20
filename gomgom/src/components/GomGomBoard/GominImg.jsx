import React from 'react';
import GominImgSub from "../GomGomBoard/GominImgSub"; 
import ButtonBack from "../../img/buttonBack.png"; 

function GominImg(){
    const leftbutton = { 
        border:"none",
        background:"none", 
        marginRight:"5.12rem"
    };
    const rightbutton = { 
        border:"none",
        background:"none", 
        marginLeft:"5.12rem"
    };

    return (
        <div style={{marginTop:"1.94rem", display:"flex", justifyContent:"center"}}>
            <button style={leftbutton}>
                <img src={ButtonBack}/>
            </button>
            <GominImgSub/>
            <button style={rightbutton}>
                <img src={ButtonBack}/>
            </button>
        </div>
    );
}

export default GominImg;