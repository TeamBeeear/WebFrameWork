import React, {useState} from 'react';
import Slider from "../main/Slider";
import "../../css/GominSlider.css";

function GominSlider(){
    return (
        <div>
            <div style={{backgroundColor:"var(--faf-9-f-6, #FAF9F6)"}}>
                <Slider style={{backgroundColor: "var(--faf-9-f-6, #FAF9F6)"}}/>
            </div>
            <div style={{background: "#E9E5DA", width:"73.8125rem", height:"0.125rem", margin:"0 auto"}}/>
        </div>
    );
}

export default GominSlider;