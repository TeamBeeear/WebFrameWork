import React from "react";
import gomgom from "../../img/mainLinkBear.png";

const GomGomImage = () => {
    const GomGomImageStyle = {
        width: "10%",
        height: "auto",
        marginTop: "8rem",
        marginRight: "auto", 
        marginLeft: "auto",
        marginBottom: "2rem"
    };
    
    return (
        <img 
            src={gomgom}
            style={GomGomImageStyle}
            className="gomgom-img"
            alt="곰곰이 이미지" />
    );
}

export default GomGomImage;