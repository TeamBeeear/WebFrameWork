import React from 'react';

function GominCategory({ category, onClick }){
    const box = { 
        display: "inline-block", 
        padding: "0.625rem 1.25rem",
        alignItems: "flex-start",
        gap: "0.625rem",
        borderRadius: "1.0625rem",
        border: "2px solid var(--d-2-cdbc, #D2CDBC)",
        background: "var(--e-9-e-5-da, #E9E5DA)"
    };
    const text = { 
        color: "var(--67594-c, rgba(103, 89, 76, 0.50))",
        fontFamily: "Pretendard",
        fontSize: "0.875rem",
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: "100%",
        margin: "0"
    };

    return (
        <button onClick={onClick} style={box}>
            <p style={text}>{category}</p>
        </button>
    );
}

export default GominCategory;