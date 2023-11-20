import React from 'react';

function GominStyle({UserName}){
    return (
        <div>
            <div style={{height:"0.25rem", backgroundColor:"var(--e-9-e-5-da, #E9E5DA)"}}/>
            <p style={{color:"var(--67594-c, #67594C)",fontFamily: "Pretendard", fontSize:"1.25rem", fontStyle:"normal", 
            fontWeight:"700", lineHeight:"100%", marginTop:"4.37rem"}}>{UserName}의 고민</p>
        </div>
    );
}

export default GominStyle;