import React, { useState } from "react";
import gominPost from "../../img/gominPost.png";

function GominCommentUserPost() {
    const [content, setContent] = useState("");
    const [error, setError] = useState(null);
    const commnetMainStyle = {
        width: "100%",
        height: "13.1875rem",
        background: "var(--e-9-e-5-da, #E9E5DA)",
    };
    const commentSubStyle = {
        width: "51.625rem",
        height: "4.5rem",
        borderRadius: "2.75rem",
        background: "#FFF",
        alignItems: "center",
    };
    const commentAbout = {
        color: "var(--67594-c, #67594C)",
        fontFamily: "Pretendard",
        fontSize: "1.25rem",
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: "160%",
        margin: "0",
        border: "none",
        outline: "none",
        resize: "none",
        width: "60%",
        height: "30%",
        reSize: "vertical",
        marginTop: "1.25rem",
        overflow: "hidden",
    };
    const gominPostButton = {
        border: "none",
        background: "none",
        marginLeft: "1.25rem",
    };
    const handleCommentPost = () => {
        const postId = new URLSearchParams(window.location.search).get("postId");
        const userId = sessionStorage.getItem("userId");
        const requestBody = {
            postId: postId,
            userId: userId,
            content: content,
        };
        fetch("http://localhost:8080/api/comment/user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestBody),
            })
            .then((response) => response.text())
            .then((data) => {
                console.log("서버 응답:", data);
                if (data === "댓글이 정상적으로 등록되었습니다.") {
                setContent("");
                setError(null);
                window.location.reload();
                } else {
                setError("서버 응답 형식이 올바르지 않습니다.");
                }
            })
            .catch((error) => {
                console.error("댓글 작성 중 오류가 발생했습니다.", error);
                setError("댓글 작성 중 오류가 발생했습니다.");
            });
    };
    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleCommentPost();
        }
    };

    return (
        <div style={commnetMainStyle}>
        <div
            style={{
            display: "flex",
            paddingTop: "2.5rem",
            justifyContent: "center",
            }}
        >
            <div style={commentSubStyle}>
            <textarea
                style={commentAbout}
                placeholder="사용자의 고민에 댓글을 써주세요."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                onKeyPress={handleKeyDown}
            />
            </div>
            <button style={gominPostButton} onClick={handleCommentPost}>
            <img src={gominPost} alt="Gomin Post" />
            </button>
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
}

export default GominCommentUserPost;
