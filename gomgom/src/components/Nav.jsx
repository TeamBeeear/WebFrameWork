import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import userIcon from "../img/userIcon.png"
function Nav(){
    const navStyle = {
        display:"flex",
        flexDirection: "row",
        justifyContent:"space-between",
        marginRight:"20%",
        marginLeft:"20%",
        color:"#67594C",
        fontSize: "16px",
        fontWeight: "700",
        lineHeight: "100%",
    }

    const userIconSizeStyle={
        width:"30px",
        height:"30px",
        margin:"auto 0",
        marginLeft:"20px"
    }
    return(
        <div style={navStyle}>
            <div></div>
            <p>메인</p>
            <p>고민올리기</p>
            <p>게시판</p>
            <p>곰곰이</p>
            <div>
                <img src={userIcon} style={userIconSizeStyle} alt="" />
            </div>
        </div>
    )
}

export default Nav;