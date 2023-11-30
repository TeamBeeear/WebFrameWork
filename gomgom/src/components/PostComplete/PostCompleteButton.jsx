import React from "react";
import { useNavigate } from "react-router-dom";

const PostCompleteButton = () => {
    const navigate = useNavigate();
    const handleBoardClick = () => {
        navigate("/board");
    };
    const handleMypageClick = () => {
        navigate("/my-page");
    };
    const moveToBoardStyle =  {
        width: "340px",
        height: "75px",
        background: "#FFAB5D",
        borderRadius: "44px",
        display: "block",
        margin: "0 auto",
        marginTop: "88px",
        marginBottom: "32px",
        border: "none",
        color: "white",
        fontSize: "20px",
        fontFamily: "Pretendard, sans-serif",
        fontWeight: 700,
        lineHeight: "20px",
        wordWrap: "break-word",
        cursor: "pointer"
    };
    const moveToMypageStyle = {
        color: "#67594C",
        fontSize: "20px",
        fontFamily: "Pretendard, sans-serif",
        fontWeight: 700,
        lineHeight: "20px",
        wordWrap: "break-word",
        marginBottom: "300px",
        cursor: "pointer"
        
    }

    return (
        <>
        <button type="submit" onClick={handleBoardClick} style={moveToBoardStyle}>게시판으로 이동</button>
        <p onClick={handleMypageClick} style={moveToMypageStyle}>마이페이지로 이동</p>
        </>
    );
}

export default PostCompleteButton;