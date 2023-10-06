import React from "react";
import worriedImg from "../../img/worriedImg.png"
import chatIcon from "../../img/worriedBoxIcon1.png"
import heartIcon from "../../img/worriedBoxIcon2.png"
import userIcon from "../../img/userIcon.png"

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
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    }
    const colFlexStyle = {
        display:"flex",
        flexDirection:"cloumn",
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
    const userNameFontStyle={
        color: "rgba(103, 89, 76, 0.50)",
        fontSize: "15px",
        fontWeight: "700",
        lineHeight: "160%",
    }
    const timeFontStyle={
        color: "rgba(103, 89, 76, 0.50)",
        fontSize: "13px",
        fontWeight: "500",
        lineHeight: "160%",
        marginRight:"10px",
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
        margin:"auto 0",
        marginLeft: "8px"
    }
    const numFontStyle={
        color: "#D2CDBC",
        fontSize: "13px",
        fontWeight: "500",
        lineHeight: "160%",
    }
    const iconSizeStyle={
        width:"24px",
        height:"24px",
        margin:"auto 0",
        marginRight:"3px"
    }
    const userIconSizeStyle={
        width:"30px",
        height:"30px",
        margin:"auto 0",
        marginRight:"8px",
        marginLeft:"10px"
    }
    const imgSizeStyle={
        width:"72px",
        height:"72px"
    }
    const verticalCenterStyle={
        margin:"auto 0",
    }
    
    return(
        <div style={{width:"580px",height:"fit-content",paddingBottom:"45px"}}>
            <div style={boxStyle}>
                <div style={rowSpaceFlexStyle}>
                    <p style={titleFontStyle}>제목</p>
                    <div style={rowflexStyle}>
                        <div style={rowflexStyle}>
                            <img style={iconSizeStyle} src={chatIcon} alt="" />
                            <p style={numFontStyle}>숫자</p>
                        </div>
                        <div style={rowflexStyle}>
                            <img style={iconSizeStyle} src={heartIcon} alt="" />
                            <p style={numFontStyle}>숫자</p>
                        </div>
                    </div>
                </div>
                <div style={rowSpaceFlexStyle} >
                    {data.map((item, innerIndex) => (
                        <div key={innerIndex} style={rowflexStyle}>
                            <img src={item.imgSrc} style={imgSizeStyle} alt="" />
                            <div style={textDivStyle}>
                                <p>{item.question}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div style={contentFontStyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio at rem hic obcaecati ut quidem placeat dignissimos, impedit asperiores recusandae ducimus rerum culpa, laudantium nemo sequi. Accusantium similique temporibus velit?</div>
            </div>
            <div style={rowSpaceFlexStyle}>
                <div style={rowflexStyle}>
                    <img src={userIcon} style={userIconSizeStyle} alt="" />
                    <p style={userNameFontStyle}>작성자 이름</p>
                </div>
                <div style={timeFontStyle}>시간</div>
            </div>
        </div>
    )
}

export default WorriedBox;