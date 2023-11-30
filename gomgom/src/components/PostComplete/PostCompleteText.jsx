import React from "react";

const PostCompleteText = () => {
    const completeTextStyle = {
        color: "#67594C",
        fontSize: "24px",
        fontFamily: "Pretendard, sans-serif",
        fontWeight: 700,
        lineHeight: "24px",
        wordWrap: "break-word",
    };
    const completeDetailStyle = {
        color: "#67594C",
        fontSize: "18px",
        fontFamily: "Pretendard, sans-serif",
        fontWeight: 500,
        lineHeight: "28.80px",
        wordWrap: "break-word",
    };

    return (
        <>
        <p style={completeTextStyle}>고민 올리기 완료!</p>
        <p style={completeDetailStyle}>
            곧 사람들이 고민 선택을 도와줄 거예요!<br/>
            나의 고민은 마이페이지에서 확인 가능해요.</p>
        </>
    );
}

export default PostCompleteText;