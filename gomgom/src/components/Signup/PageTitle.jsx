import React from "react";

const PageTitle = ({ text }) => {
    const titleStyle = {
        color: "#67594C",
        fontSize: "36px",
        fontFamily: "Pretendard",
        fontWeight: 700,
        marginTop: "5rem",
        marginBottom: "3rem",
        wordWrap: "break-word",
    };

    return <p style={titleStyle}>{text}</p>;
};

export default PageTitle;