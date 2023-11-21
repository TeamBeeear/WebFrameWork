import React from "react";

const WorryDescription = ({ setContent }) => {
    const descriptionStyle = {
        resize: "none",
        width: "701px",
        height: "94px",
        background: "white",
        borderRadius: "8px",
        borderStyle: "none",
        paddingLeft: "28px",
        paddingRight: "41px",
        paddingTop: "20px",
        marginTop: "5px",
        color: "#67594C",
        fontSize: "16px",
        fontFamily: "Pretendard",
        fontWeight: "400",
        lineHeight: "25.60px",
        wordWrap: "break-word",
        marginLeft: "4rem"
    };
    
    return (
        <>
        <textarea
            className="description"
            style={descriptionStyle}
            placeholder="100자 내외의 짧은 설명을 적어주세요."
            onChange={(e) => setContent(e.target.value)} />
        </>
    );
}

export default WorryDescription;