import React from "react";
import GomgomImg from "../../img/mainLinkBear.png";

function GomgomGomin({
    title,
    content, 
    imagePath
}){
    const profile = {
        width:"7.5rem", 
        height:"5.625rem"
    };
    const gominMainPart = {
        width: "46.125rem", 
        backgroundColor: "var(--ffffff, #FFF)", 
        borderRadius:"1.5rem", 
        boxShadow: "0px 2px 4px 0px rgba(210, 205, 189, 0.50)", 
        marginLeft:"1.37rem"
    };
    const gominSubPart = { 
        marginTop:"2.25rem", 
        marginBottom:"2.5rem", 
        marginLeft:"2rem",
        display:"flex"
    };
    const titleFrame = { 
        width: "fit-content", 
        height:"1.9375rem", 
        backgroundColor:"var(--e-9-e-5-da, #E9E5DA)", 
        display:"flex"
    };
    const titleText = { 
        color:" var(--67594-c, #67594C)", 
        textAlign:"center", 
        fontFamily:"Pretendard", 
        fontSize:"1.25rem", 
        fontStyle:"normal", 
        fontWeight:"700", 
        lineHeight:"160%", 
        margin:"0"
    };
    const contentText = {
        margin:"0", 
        color:" var(--67594-c, #67594C)", 
        fontFamily:"Pretendard", 
        fontWeight:"500", 
        lineHeight:"160%", 
        fontStyle:"normal", 
        width: "26rem", 
        marginTop:"1.5rem", 
        textAlign:"start"
    } ;
    const gomimImg = { 
        marginLeft: "1.75rem", 
        alignSelf:"flex-end"
    }
    const imgSize = { 
        width:'177px', 
        height:'230px'
    }

    return(
        <div style={{display:"flex", justifyContent:"center"}}>
            <img style={profile} src={GomgomImg}/>
            <div style={gominMainPart}>
                <div style={gominSubPart}>
                    <div>
                        <div style={titleFrame}>
                            <p style={titleText}>{title}</p>
                        </div>
                        <p style={contentText}>
                            {content}
                        </p>
                    </div>
                    <div style={gomimImg}>
                        <img src={imagePath} style={imgSize}/>    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GomgomGomin;