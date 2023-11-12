import React from "react";

const InputLabel = ({ text }) => {
    const SignupLabelStyle = {
        color: "#67594C",
        fontSize: 20,
        fontFamily: "Pretendard",
        fontWeight: 700,
        wordWrap: "break-word",
        marginRight: "32rem",
        marginBottom: "1rem",
    };

    return (
        <p style={SignupLabelStyle}>
        {text}
        </p>
    );
};

export default InputLabel;