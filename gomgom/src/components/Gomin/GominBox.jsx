import React from "react";
import GomgomGomin from "../Gomin/GomgomGomin"; 

function GominBox({
    title,
    content, 
    imagePath
}){
    const imgSize = { 
        width:'177px', 
        height:'230px'
    }

    return(
        <div>
            <div style={{marginTop:"4.25rem",  marginBottom:"7.5rem"}}>
                <GomgomGomin
                title = {title}
                content = {content}
                imagePath= {imagePath}
                style={imgSize}
                />
            </div>
            <div style={{height:"0.125rem", backgroundColor:"#E9E5DA"}} />
        </div>
    );
}

export default GominBox;