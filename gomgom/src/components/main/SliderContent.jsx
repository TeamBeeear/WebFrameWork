import React from "react";
import img from "../../img/sliderImg.png"

function SliderContent({
    title
}){
    const boxStyle={
        width:"280px",
        height:"220px",
        borderRadius:"24px",
        position:"relative",
    }
    const imgStyle={
        width:"280px",
        height:"220px",
        borderRadius:"24px 24px 0px 0px",
    }
    const textContainerStyle={
        position: "absolute",
        bottom: "0",
        left: "0",
        width: "100%",
        height:"50px",
        backgroundColor: "rgba(103, 89, 76, 0.50)" /* 불투명한 배경 색상 및 투명도 조절 */,
        borderRadius:"0px 0px 24px 24px",
    }
    const textStyle={
        color:"#FFF",
        fontSize: "15px",
        fontWeight: "700",
        lineHeight: "160%",
        textAlign:"center",
    }
    return(
        <div>
            <div style={boxStyle}>
                <img src={img} style={imgStyle} alt="" />
                <div style={textContainerStyle}>
                    <p style={textStyle}>{title}</p>
                </div>
            </div>
        </div>
    )
}

export default SliderContent;