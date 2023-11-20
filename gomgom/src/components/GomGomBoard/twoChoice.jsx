import React from 'react';

function twoChoice({gominId, gominText, gominPercent, onClick, selected}){
    const frame = { 
        width: "20.0625rem",
        height: "5.5rem",
        flexShrink: "0",
        borderRadius: "0.5rem",
        border: selected ? "2px solid var(--67594-c, #67594C)" : "2px solid var(--e-9-e-5-da, #E9E5DA)",
        background: selected ? "var(--67594-c, #67594C)" : "var(--faf-9-f-6, #FAF9F6)",
        justifyContent: "center",
        alignItems: "center", 
        marginBottom:"6.8%", 
        marginTop:"3.8%"
    };
    const gomintext = { 
        color: selected? "var(--faf-9-f-6, #FAF9F6)" : "var(--d-2-cdbc, #D2CDBC)", 
        fontFamily: "Pretendard",
        fontSize: "1.25rem",
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: "160%", 
        margin:"0", 
        marginTop:"0.69rem"
    };
    const percenttext = { 
        color: selected? "var(--faf-9-f-6, #FAF9F6)" : "var(--d-2-cdbc, #D2CDBC)", 
        fontFamily: "Pretendard",
        fontSize: "1.25rem",
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: "160%", 
        margin:"0", 
        marginTop:"0.12rem"
    };

    return (
        <div style={frame} onClick={onClick}>
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