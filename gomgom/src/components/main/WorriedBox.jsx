import React from "react";
import worriedImg from "../../img/worriedImg.png"
import chatIcon from "../../img/worriedBoxIcon1.png"
import heartIcon from "../../img/worriedBoxIcon2.png"
import userIcon from "../../img/userIcon.png"
import { Link } from "react-router-dom";

function WorriedBox({
    postId,
    boardId,
    firstSelectionContent,
    secondSelectionContent,
    title,
    commentsCount,
    heartsCount,
    content,
    userId,
    nminutesAgo
}){
    const data = [
        {
          imgSrc: worriedImg, // 이미지 URL
          question: firstSelectionContent, // 문제 텍스트
        },
        {
          imgSrc: worriedImg,
          question: secondSelectionContent,
        },
      ];
    
    const boxStyle = {
        borderRadius: "8px",
        background: "#FFF",
        boxShadow: "0px 2px 4px 0px rgba(210, 205, 189, 0.50)",
        padding: "24px 20px 15px 20px",
        height:"fit-content",
        width:"27em"
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
        width:"10em",
        height:"3.5em",
        borderRadius:"8px",
        border:"2px solid #E9E5DA",
        backgroundColor:"#FAF9F6",
        color:"67594C",
        fontSize: "16px",
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
        width:"4.5em",
        height:"4.5em"
    }
    const verticalCenterStyle={
        margin:"auto 0",
    }
    const linkStyle = {
        textDecoration: 'none',
        color: 'inherit',
      };
    return(
        <div style={{width:"30em",height:"fit-content",paddingBottom:"45px"}}>
            <div style={boxStyle}>
                <div style={rowSpaceFlexStyle}>
                    <Link  to={`/gomgom-board/detail?postId=${postId}&boardId=${boardId}` } style={linkStyle}><p style={titleFontStyle}>{title}</p></Link>
                    <div style={rowflexStyle}>
                        <div style={rowflexStyle}>
                            <img style={iconSizeStyle} src={chatIcon} alt="" />
                            <p style={numFontStyle}>{commentsCount}</p>
                        </div>
                        <div style={rowflexStyle}>
                            <img style={iconSizeStyle} src={heartIcon} alt="" />
                            <p style={numFontStyle}>{heartsCount}</p>
                        </div>
                    </div>
                </div>
                <div style={rowSpaceFlexStyle} >
                    {data.map((item, innerIndex) => (
                        <div key={innerIndex} style={rowflexStyle}>
                            {/* <img src={item.imgSrc} style={imgSizeStyle} alt="" /> */}
                            <div style={textDivStyle}>
                                <p>{item.question}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div style={contentFontStyle}>{content}</div>
            </div>
            <div style={rowSpaceFlexStyle}>
                <div style={rowflexStyle}>
                    <img src={userIcon} style={userIconSizeStyle} alt="" />
                    <p style={userNameFontStyle}>{userId}</p>
                </div>
                <div style={timeFontStyle}>{nminutesAgo}</div>
            </div>
        </div>
    )
}

export default WorriedBox;