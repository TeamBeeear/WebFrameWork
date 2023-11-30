import React from "react";

const WorryOption = ({ id, setSelectionContent, placeholder }) => {
    const worryOptionStyle = {
        width: "743px",
        height: "74px",
        background: "white",
        border: "2px solid #E9E5DA",
        borderRadius: "8px",
        display: "block",
        marginBottom: "16px",
        paddingLeft: "20px",
        marginTop: "5px",
        color: "#67594C",
        fontSize: "20px",
        fontFamily: "Pretendard",
        fontWeight: "700",
        lineHeight: "32px",
        wordWrap: "break-word",
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '4rem' }}>
            <input
                type="input"
                className={`worry-option-${id}`}
                style={worryOptionStyle}
                placeholder={placeholder}
                onChange={(e) => setSelectionContent(e.target.value)} />
        </div>
    );
}

export default WorryOption;