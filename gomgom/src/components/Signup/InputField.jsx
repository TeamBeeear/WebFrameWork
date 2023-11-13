import React from "react";

const InputField = ({ type, placeholder, onChange, value }) => {
  const inputStyle = {
        width: "557px",
        height: "80px",
        background: "white",
        borderRadius: "24px",
        border: "2px solid #E9E5DA",
        display: "block",
        margin: "0 auto", // 가운데 정렬
        marginBottom: "22px", // 각 입력 필드 사이의 간격 조절
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
};

export default InputField;