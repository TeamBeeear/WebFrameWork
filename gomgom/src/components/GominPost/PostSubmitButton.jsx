import React from "react";

const PostSubmitButton = ({ onClick, buttonText, isDisabled }) => {
    const postWorryStyle = {
        width: "176px",
        height: "64px",
        borderRadius: "32px",
        display: "block",
        margin: "0 auto",
        marginTop: "88px",
        marginBottom: isDisabled ? "297px" : "10rem",
        border: "none",
        color: "white",
        fontSize: "20px",
        fontFamily: "Pretendard, sans-serif",
        fontWeight: "700",
        lineHeight: "20px",
        wordWrap: "break-word",
        marginRight: "330px",
        background: isDisabled ? "#E9E5DA" : "#FFAB5D",
    };

    return (
        <button
            type="submit"
            onClick={onClick}
            style={postWorryStyle}
            disabled={isDisabled}
        >
        {buttonText}
        </button>
    );
};

export default PostSubmitButton;