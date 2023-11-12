import React from 'react';

const WorryTitleInput = ({ setTitle }) => {
    const titleStyle = {
        color: "rgba(103.06, 88.99, 76.01, 0.50)",
        fontSize: "15px",
        fontFamily: "Pretendard",
        fontWeight: "700",
        lineHeight: "15px",
        wordWrap: "break-word"
    };
    
  return (
    <>
      <p className="worry-title" style={titleStyle}>
        고민 제목<br />
      </p>
      <input
        type="input"
        className="worry-title-input"
        placeholder="제목을 입력하세요."
        onChange={(e) => setTitle(e.target.value)}
      />
    </>
  );
};

export default WorryTitleInput;