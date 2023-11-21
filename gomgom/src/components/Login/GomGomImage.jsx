import React from "react";
import gomgom from "../../img/mainLinkBear.png";

const GomGomImage = () => {
    const gomgomImgStyle = {
        width: "110px",
        height: "82px",
        margin: "0 auto",
        marginTop: "5rem",
    };

    return <img src={gomgom} style={gomgomImgStyle} alt="곰곰이 이미지" />;
}

export default GomGomImage;