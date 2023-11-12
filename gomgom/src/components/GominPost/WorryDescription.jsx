import React from 'react';

const WorryDescription = ({ setContent }) => {
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
      <p className="worry-description" style={titleStyle}>
        설명
      </p>
      <textarea
        className="description"
        placeholder="100자 내외의 짧은 설명을 적어주세요."
        onChange={(e) => setContent(e.target.value)} />
    </>
  );
};

export default WorryDescription;