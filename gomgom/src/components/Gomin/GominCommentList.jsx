import React from "react";
import userImg from "../../img/smallUserImg.png"; 

function GominCommentList({
    userId,
    content,
    nminutesAgo
}){
    const profileImg = sessionStorage.getItem("profileImage");
    const loggedInUserId = sessionStorage.getItem("userId");

    const idText = { 
        margin:"0", 
        color: "var(--67594-c, #67594C)",
        fontFamily: "Pretendard",
        fontSize: "1rem",
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: "160%"
    };
    const commnetText = { 
        margin:"0", 
        color: "var(--67594-c, #67594C)",
        fontFamily: "Pretendard",
        fontSize: "1rem",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "160%", 
        marginTop:"0.94rem"
    };
    const timeText = { 
        margin:"0", 
        color: "var(--d-2-cdbc, #D2CDBC)",
        fontFamily: "Pretendard",
        fontSize: "0.875rem",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "160%", 
        marginTop:"2.94rem"
    };

    const userImgStyle = {
        width: "30px",
        height: "30px",
        margin: "auto 0",
        marginLeft: "20px",
        marginRight: "10px",
        borderRadius: "50%",
    };

    // 렌더링 시 작성자 ID와 로그인한 사용자의 ID를 비교하여 이미지를 조건부로 설정
    const displayImg = userId === loggedInUserId ? profileImg : userImg;

    return(
        <div style={{backgroundColor:"var(--ffffff, #FFF)"}}>
            <div style={{backgroundColor:"var(--ffffff, #FFF)", marginLeft:'30%'}}> 
                <div style={{backgroundColor: "var(--ffffff, #FFF)", paddingTop:"2.5rem", display:"flex"}}> {/* 이미지까지 감싸는 div */}
                    <div style={{display:"flex"}}>
                        <div>
                            <img src={displayImg} style={userImgStyle} alt="프로필 사진" />
                        </div>
                        <div style={{textAlign:"start", marginLeft:"1rem"}}>
                            <p style={idText}>{userId}</p>
                            <p style={commnetText}>{content}</p>
                            <p style={timeText}>{nminutesAgo}</p>
                        </div>
                    </div>
                    <div style={{alignSelf:"flex-end", marginLeft:"14.06rem"}}>
                    </div>
                </div>
                <div style={{width:"68.25rem", height:"0.125rem", background:"#ffffff", paddingTop:"0.87rem"}}/>
            </div>
        </div>
    )
}

export default GominCommentList;