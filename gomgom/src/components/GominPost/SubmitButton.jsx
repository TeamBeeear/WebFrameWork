import React from "react";

const SubmitButton = ({ onClick, buttonText, isDisabled }) => {
    const postWorryStyle = {
      width: "176px",
      height: "64px",
      background: "#FFAB5D",
      borderRadius: "32px",
      display: "block",
      margin: "0 auto",
      marginTop: "88px",
      marginBottom: "297px",
      border: "none",
      color: "white",
      fontSize: "20px",
      fontFamily: "Pretendard, sans-serif",
      fontWeight: "700",
      lineHeight: "20px",
      wordWrap: "break-word",
      marginRight: "330px",
      marginBottom: "10rem",
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

export default SubmitButton;