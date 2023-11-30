import React from "react";

const InputField = ({ type, placeholder, onChange, value }) => {
    const inputStyle = {
        width: "557px",
        height: "80px",
        background: "white",
        borderRadius: "24px",
        border: "2px solid #E9E5DA",
        display: "block",
        margin: "0 auto", 
        marginBottom: "22px",
        marginTop: "10px",
        color: "#67594C",
        fontSize: "24px",
        fontFamily: "'Pretendard', sans-serif",
        fontWeight: "700",
        lineHeight: "38.40px",
        paddingLeft: "31px",
        wordWrap: "break-word",
    };

    return (
        <input
        type={type}
        className="input-field"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        style={inputStyle}
        />
    );
}

export default InputField;