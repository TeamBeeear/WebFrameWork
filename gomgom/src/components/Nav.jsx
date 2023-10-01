import React from "react";

function Nav(){
    let navStyle = {
        display:"flex",
        flexDirection: "row",
        justifyContent:"space-between",
        marginRight:"30%",
        marginLeft:"30%",
        color:"#67594C",
        fontSize: "16px",
        fontWeight: "700",
        lineHeight: "100%",
    }
    return(
        <div style={navStyle}>
            <p>메인</p>
            <p>고민올리기</p>
            <p>게시판</p>
            <p>곰곰이</p>
        </div>
    )
}

export default Nav;