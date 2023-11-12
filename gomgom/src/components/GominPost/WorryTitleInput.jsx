import React from "react";
import "../../css/Post.css";

const WorryTitleInput = ({ setTitle }) => {
    const worrtTitleInputStyle = {
        width: "743px",
        height: "73px",
        background: "white",
        borderRadius: "8px",
        borderStyle: "none",
        paddingLeft: "24px",
        color: "#67594C",
        fontSize: "24px",
        fontFamily: "Pretendard",
        fontWeight: "700",
        lineHeight: "24px",
        wordWrap: "break-word",
        marginLeft: "23rem"
    } 
    
  return (
    <>
      <input
        type="input"
        className="worry-title-input"
        placeholder="제목을 입력하세요."
        style={worrtTitleInputStyle}
        onChange={(e) => setTitle(e.target.value)}
      />
    </>
  );
};

export default WorryTitleInput;