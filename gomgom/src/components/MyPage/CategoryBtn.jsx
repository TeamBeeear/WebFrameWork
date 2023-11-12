import React, { useState } from "react";

function CategoryBtn( { onButtonClick } ) {
  const [selectedButton, setSelectedButton] = useState(0);

  const handleButtonClick = (index) => {
    setSelectedButton(index);
    onButtonClick(index + 1);
  };

  const buttons = [
    "나의 고민",
    "내가 공감한 고민",
    "내가 답변한 고민"
  ];

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    margin: "50px 0"
  };

  const buttonStyle = {
    width: "248px",
    height: "104px",
    fontSize: "20px",
    fontWeight: "700",
    lineHeight: "100%",
    padding: "10px 20px",
    borderRadius: "24px",
    cursor: "pointer",
    margin: "0 20px"
  };

  const selectedButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#67594C",
    color: "#FAF9F6",
    border:"2px solid #67594C",
  };

  const unselectedButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#E9E5DA",
    color: "#67594C",
    border:"2px solid #D2CDBC",
  };

  return (
    <div style={containerStyle}>
      {buttons.map((button, index) => (
        <button
          key={index}
          style={index === selectedButton ? selectedButtonStyle : unselectedButtonStyle}
          onClick={() => handleButtonClick(index)}
        >
          <div>{button}</div>
        </button>
      ))}
    </div>
  );
}

export default CategoryBtn;
