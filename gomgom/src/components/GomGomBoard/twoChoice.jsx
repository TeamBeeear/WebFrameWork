import React, {useState} from 'react';

function twoChoice({gominText, gominPercent}){
    const frame = { 
        width: "20.0625rem",
        height: "5.5rem",
        flexShrink: "0",
        borderRadius: "0.5rem",
        border: "2px solid var(--e-9-e-5-da, #E9E5DA)",
        background: "var(--faf-9-f-6, #FAF9F6)", 
        justifyContent: "center",
        alignItems: "center"
    }
    const gomintext = { 
        color: "var(--d-2-cdbc, #D2CDBC)",
        fontFamily: "Pretendard",
        fontSize: "1.25rem",
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: "160%", 
        margin:"0", 
        marginTop:"0.69rem"
    }
    const percenttext = { 
        color: "var(--d-2-cdbc, #D2CDBC)",
        fontFamily: "Pretendard",
        fontSize: "1.25rem",
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: "160%", 
        margin:"0", 
        marginTop:"0.12rem"
    }

    return (
        <div style={frame}>
           <p style={gomintext}>
            {gominText}
           </p>
           <p style={percenttext}>
            {gominPercent}
           </p>
        </div>
    );
}

export default twoChoice;