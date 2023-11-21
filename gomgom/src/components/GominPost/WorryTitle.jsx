import React from "react";

const WorryTitle = ({titleText}) => {
    const titleStyle = {
        color: "rgba(103.06, 88.99, 76.01, 0.50)",
        fontSize: "15px",
        fontFamily: "Pretendard",
        fontWeight: "700",
        lineHeight: "15px",
        wordWrap: "break-word",
        marginRight: "40rem",
        marginTop: "5rem"
    };

    return (
        <p className="worry-description" style={titleStyle}>
            {titleText}
        </p>
    );
}

export default WorryTitle;