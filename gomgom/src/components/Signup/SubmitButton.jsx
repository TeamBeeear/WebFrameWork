import React from "react";

const SubmitButton = ({ onClick, isDisabled, buttonText }) => {
  const buttonStyle = {
    width: "340px",
    height: "75px",
    background: isDisabled ? "#E9E5DA" : "#FFAB5D",
    borderRadius: "44px",
    display: "block",
    margin: "0 auto",
    marginTop: "5rem",
    border: "none",
    color: "white",
    fontSize: "24px",
    fontFamily: "'Pretendard', sans-serif",
    fontWeight: "700",
    lineHeight: "24px",
    wordWrap: "break-word",
    marginBottom: "15rem",
  };

  return (
    <button
      type="submit"
      style={buttonStyle}
      disabled={isDisabled}
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
};

export default SubmitButton;