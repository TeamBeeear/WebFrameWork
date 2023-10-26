import React from "react";
import sunde from "../../img/sunde.png"; 
import userImg from "../../img/smallUserImg.png"; 

function GominCommentList(){
    const idText = { 
        margin:"0", 
        color: "var(--67594-c, #67594C)",
        fontFamily: "Pretendard",
        fontSize: "1rem",
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: "160%"
    }
    const commnetText = { 
        margin:"0", 
        color: "var(--67594-c, #67594C)",
        fontFamily: "Pretendard",
        fontSize: "1rem",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "160%", 
        marginTop:"0.94rem"
    }
    const timeText = { 
        margin:"0", 
        color: "var(--d-2-cdbc, #D2CDBC)",
        fontFamily: "Pretendard",
        fontSize: "0.875rem",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "160%", 
        marginTop:"2.94rem"
    }

    return(
        <div style={{backgroundColor:"var(--ffffff, #FFF)"}}>
            <div style={{backgroundColor: "var(--ffffff, #FFF)", paddingTop:"2.5rem", display:"flex", justifyContent:"center"}}> {/* 이미지까지 감싸는 div */}
                <div style={{display:"flex"}}>
                    <div>
                        <img src={userImg}/>
                    </div>
                    <div style={{textAlign:"start", marginLeft:"1rem"}}>
                        <p style={idText}>작성자 아이디</p>
                        <p style={commnetText}>한국인은 이열치열! 시원한 콩국수먹다 질리면 순대국은 어때?</p>
                        <p style={timeText}>6시간 전</p>
                    </div>
                </div>
                <div style={{alignSelf:"flex-end", marginLeft:"14.06rem"}}>
                    <img src={sunde}/>
                </div>
            </div>
            <div style={{width:"68.25rem", height:"0.125rem", background:"#FAF9F6", paddingTop:"0.87rem"}}/>
        </div>
    )
}

export default GominCommentList;