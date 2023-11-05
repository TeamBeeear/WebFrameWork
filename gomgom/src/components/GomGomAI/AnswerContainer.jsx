import React, { useState } from "react";
import NormalGomGom from "../../img/ai/normal.png";
import GominGomGom from "../../img/ai/gomin.png";
import AnswerGomGom from "../../img/ai/answer.png";

const AnswerContainer = () => {
    const [question, setQuestion] = useState('');
    const [imageSrc, setImageSrc] = useState(NormalGomGom);

    const handleInputChange = (e) => {
        setQuestion(e.target.value);
    };

    const changeImage = () => {
        if (question) {
            setImageSrc(GominGomGom);
        } else {
            setImageSrc(NormalGomGom);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // 여기에서 폼 제출 로직 추가
    };

    const containerStyle = {
        marginTop: "25px",
        marginBottom: "50px",
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
        background: "var(--ffffff, #FFF)",
        boxShadow: "0px 2px 4px 0px rgba(210, 205, 189, 0.50)",
        textAlign: "center",
        border: "1px solid #FFF",
        display: "flex", 
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "50px",
    };

    const worryTextStyle = {
        width: "100%",
        height: "100%",
        border: "none",
        resize: "none",
        outline: "none",
        textAlign: "center",
        lineHeight: "248px",
        verticalAlign: "middle",
        color: "var(--D2CDBC, #D2CDBC)",
        fontSize: "24px",
        fontWeight: "700",
        borderRadius: "24px",
    }

    const placeholderStyle = {
        color: "var(--67594C, #67594C)",
        letterSpacing: "-1.8px",
    };

    const imgBtnStyle = {
        border: "none",
        backgroundColor: "transparent",
    }

    const btnImgStyle = {
        backgroundColor: "transparent"
    }

    return (
        <div style={containerStyle}>
            <form onSubmit={handleSubmit}>
                <div className="worry-box">
                    <div className="worry-box-contents" style={worryBoxContentsStyle}>
                        <textarea
                            className="worry-text"
                            name="question"
                            placeholder="고민을 간단히 적어주세요"
                            onBlur={changeImage}
                            value={question}
                            onChange={handleInputChange}
                            style={{ ...worryTextStyle, ...placeholderStyle }}
                        />
                    </div>
                </div>
                <div className="image-box">
                    <button type="submit" className="img-button" style={imgBtnStyle} id="submit-button">
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
};

export default AnswerContainer;
