import React from "react";

const SubmitButton = ({ onClick, isDisabled, buttonText }) => {
  const buttonStyle = {
    marginBottom: "15rem",
    background: isDisabled ? "#E9E5DA" : "#FFAB5D",
  };

  return (
    <button
      type="submit"
      className="submit"
      style={buttonStyle}
      disabled={isDisabled}
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
};

export default SubmitButton;