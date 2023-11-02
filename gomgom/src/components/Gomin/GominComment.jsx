import React from "react";
import gominPost from "../../img/gominPost.png";
import imageUpload from "../../img/image-gallery.png";
 
function GominComment(){
    const commnetMainStyle={
        width: "100%",
        height: "13.1875rem",
        background: "var(--e-9-e-5-da, #E9E5DA)"
    }
    const commentSubStyle = {
        width: "51.625rem",
        height: "4.5rem",
        borderRadius: "2.75rem",
        background: "#FFF",
        alignItems: "center"
    }
    const commentAbout = { 
        color: "var(--67594-c, #67594C)",
        fontFamily: "Pretendard",
        fontSize: "1.25rem",
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: "160%", 
        margin: "0",
        border: "none",
        outline: "none",
        resize: "none",
        width: "60%",
        height:"30%",
        reSize: "vertical",
        marginTop:"1.25rem"
    }
    const imagePostButton = { 
        border:"none",
        background:"none", 
        marginLeft:"10.5rem"
    }
    const gominPostButton = { 
        border:"none",
        background:"none", 
        marginLeft:"1.25rem"
    }

    return(
        <div style={commnetMainStyle}> 
            <div style={{display:"flex", paddingTop:"2.5rem", justifyContent:"center"}}>
                <div style={commentSubStyle}>
                        <textarea style={commentAbout} placeholder="곰곰이의 고민에 댓글을 써주세요."/>
                        {/* <button style={imagePostButton}>
                            <img src={imageUpload}/>
                        </button> */}
                </div>
                    <button style={gominPostButton}>
                        <img src={gominPost}/>
                    </button>
                </div>
        </div>
    )
}

export default GominComment;