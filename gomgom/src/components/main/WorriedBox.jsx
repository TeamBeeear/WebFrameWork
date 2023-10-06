import React from "react";
import worriedImg from "../../img/worriedImg.png"
import chatIcon from "../../img/worriedBoxIcon1.png"
import heartIcon from "../../img/worriedBoxIcon2.png"

function WorriedBox(){
    const data = [
        {
          imgSrc: worriedImg, // 이미지 URL
          question: "문제 1", // 문제 텍스트
        },
        {
          imgSrc: worriedImg,
          question: "문제 2",
        },
      ];
    
    const boxStyle = {
        borderRadius: "8px",
        background: "#FFF",
        boxShadow: "0px 2px 4px 0px rgba(210, 205, 189, 0.50)",
        padding: "24px 20px 15px 20px",
        height:"fit-content"
    }
    const rowflexStyle = {
        display:"flex",
        flexDireaction:"row",
    }
    const rowSpaceFlexStyle = {
        display:"flex",
        flexDireaction:"row",
        justifyContent:"space-between"
    }
    const colFlexStyle = {
        display:"flex",
        flexDireaction:"cloumn",
    }
    const titleFontStyle={
        color: "#67594C",
        fontSize: "20px",
        fontWeight: "700",
        lineHeight: "100%",
    }
    const contentFontStyle={
        textAlign:"left",
        color: "#67594C",
        fontSize: "13px",
        fontWeight: "400",
        lineHeight: "100%",
        marginTop:"10px"
    }
    const textDivStyle={
        width:"178px",
        height:"70px",
        borderRadius:"8px",
        border:"2px solid #E9E5DA",
        backgroundColor:"#FAF9F6",
        color:"67594C",
        fontSize: "20px",
        fontWeight: "700",
        lineHeight: "160%",
        textAlign:"center",
        marginLeft: "8px"
    }
    const iconSizeStyle={
        width:"24px",
        height:"24px"
    }
    const imgSizeStyle={
        width:"72px",
        height:"72px"
    }
    
    return(
        <div style={{width:"580px",height:"fit-content",backgroundColor:"pink"}}>
            <div style={boxStyle}>
                <div style={rowSpaceFlexStyle}>
                    <p style={titleFontStyle}>제목</p>
                    <div style={rowflexStyle}>
                        <div style={rowflexStyle}>
                            <img style={iconSizeStyle} src={chatIcon} alt="" />
                            <p>숫자</p>
                        </div>
                        <div style={rowflexStyle}>
                            <img style={iconSizeStyle} src={heartIcon} alt="" />
                            <p>숫자</p>
                        </div>
                    </div>
                </div>
                <div style={rowSpaceFlexStyle} >
                    {data.map((item, innerIndex) => (
                        <div key={innerIndex} style={rowflexStyle}>
                            <img src={item.imgSrc} style={imgSizeStyle} alt="" />
                            <div style={textDivStyle}>{item.question}</div>
                        </div>
                    ))}
                </div>
                <div style={contentFontStyle}>내용</div>
            </div>
            <div style={rowSpaceFlexStyle}>
                <div style={rowflexStyle}>
                    <img src="" alt="" />
                    <p>작성자 이름</p>
                </div>
                <div>시간</div>
            </div>
        </div>
    )
}

export default WorriedBox;