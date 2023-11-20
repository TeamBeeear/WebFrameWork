import React, { useState, useEffect } from "react";
import NormalGomGom from "../../img/ai/normal.png";
import GominGomGom from "../../img/ai/gomin.png";
import AnswerGomGom from "../../img/ai/answer.png";
import RefreshBtn from "../../img/ai/refresh.png";

const AnswerContainer = () => {
    const [question, setQuestion] = useState("");
    const [imageSrc, setImageSrc] = useState(NormalGomGom);
    const [answer, setAnswer] = useState("");
    const [showAnswer, setShowAnswer] = useState(false);
    const [isTextareaDisabled, setIsTextareaDisabled] = useState(false);

    const handleInputChange = (e) => {
        if (!isTextareaDisabled) {
            setQuestion(e.target.value);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !isTextareaDisabled) {
            handleSubmit(e);
        }
    };

    const changeImage = () => {
        if (question) {
            setImageSrc(GominGomGom);
        } else {
            setImageSrc(NormalGomGom);
        }
    };

    const handleShowAnswerClick = () => {
        setShowAnswer(false);
        setAnswer("");
        setImageSrc(NormalGomGom);
        setIsTextareaDisabled(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsTextareaDisabled(true);
        fetch("http://localhost:8080/api/gpt", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({ question }),
        })
            .then((response) => response.json())
            .then((data) => {
            setAnswer(data.answer);
            setQuestion("");

            if (data.answer) {
                setShowAnswer(true);
            } else {
                setShowAnswer(false);
            }
            })
            .catch((error) => {
            console.error("Error:", error);
            });

        setIsTextareaDisabled(false);

    };

    useEffect(() => {
        if (answer) {
            setImageSrc(AnswerGomGom);
        } else {
            setImageSrc(NormalGomGom);
        }
        }, [answer]);

    const containerStyle = {
        marginTop: "2em", // 25px
        marginBottom: "3em", // 50px
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "24px",
    };

    const worryBoxContentsStyle = {
        width: "680px",
        height: "248px",
        flexShrink: 0,
        borderRadius: "24px",
        boxShadow: answer? "none" : "0px 2px 4px 0px rgba(210, 205, 189, 0.50)",
        textAlign: "center",
        border: "1px solid #FFF",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "2em",
        background: "var(--e-9-e-5-da, #E9E5DA)"
    };

    const lineHeightValue = answer ? "" : "248px";

    const worryTextStyle = {
        width: "100%",
        height: "100%",
        border: "none",
        resize: "none",
        outline: "none",

        textAlign: "center",
        verticalAlign: "middle",
        justifyContent: "center",
        alignItems : "center",

        color: "var(--D2CDBC, #D2CDBC)",
        background: answer ? "var(--E9E5DA, #E9E5DA)" : "var(--ffffff, #FFF)",
        fontSize: "24px",
        fontWeight: "700",
        borderRadius: "24px",
        whiteSpace: answer ? "pre-wrap" : "nowrap", // answer 값이 있을 때 줄바꿈 허용, 없을 때는 허용하지 않음
        lineHeight: lineHeightValue, // 동적으로 결정된 lineHeight 값 적용
        ...(answer
            ? {
            cursor: "pointer", // 커서를 숨김
            caretColor: "transparent", // 커서 색상을 투명하게 설정
            }
            : {}),
        wordBreak: "keep-all",
    };

    const placeholderStyle = {
        color: "var(--67594C, #67594C)",
        letterSpacing: "-1px",
        wordSpacing: "-2px",
    };

    const imgBtnStyle = {
        border: "none",
        backgroundColor: "transparent",
    };

    const btnImgStyle = {
        backgroundColor: "transparent",
    };

    // 다시하기 버튼
    const showAnswerButtonStyle = {
        margin: "1.5em",
        padding: "10px 20px",
        fontSize: "20px",
        cursor: "pointer",
        color: "var(--67594C, #67594C)",
        backgroundColor: "#FAF9F6",
        fontWeight: "700",
        borderRadius: "24px",
        alignItems: "center",
    };

    const refreshIconStyle = {
        marginRight: "0.8em", // 8px
    };

    return (
    <div style={containerStyle}>
        <form onSubmit={handleSubmit}>
            <div className="worry-box-contents" style={worryBoxContentsStyle}>
                <textarea
                    className="worry-text"
                    name="question"
                    placeholder="고민을 간단히 적어주세요"
                    onBlur={changeImage}
                    value={answer || question}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    disabled={isTextareaDisabled}
                    style={{ ...worryTextStyle, ...placeholderStyle }}
                    wrap="soft"
                />    
            </div>
        
            {showAnswer && (
                    <button style={showAnswerButtonStyle} onClick={handleShowAnswerClick}>
                    <img src={RefreshBtn} alt="Refresh" style={refreshIconStyle} />
                    다시하기
                    </button>
                )}
            
        <div className="image-box">
            <button
            type="submit"
            className="img-button"
            style={imgBtnStyle}
            id="submit-button"
            >
            <img
                className="btn-img"
                style={btnImgStyle}
                src={imageSrc}
                alt="GomGom"
            />
            </button>
        </div>
        </form>
    </div>
    );
}

export default AnswerContainer;