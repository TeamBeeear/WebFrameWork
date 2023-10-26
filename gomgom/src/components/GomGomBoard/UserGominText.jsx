import React, {useState} from 'react';

function UserGominText({gominContents}){
    const box = { 
        display:"flex", 
        width:"32.625rem", 
        margin:"0 auto", 
        marginTop:"3.7%", 
        marginLeft:"2rem"
    }
    const text = { 
        color:"#67594C", 
        fontFamily: "Pretendard",
        fontSize: "0.9375rem",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "160%", 
        margin:"0", 
        textAlign:"start"
    }

    return (
        <div style={box}>
            <p style={text}>{gominContents}</p>
        </div>
    );
}

export default UserGominText;