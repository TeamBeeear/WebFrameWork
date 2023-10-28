import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import userIcon from "../img/userIcon.png"

function Nav(){
    const [userId, setUserId] = useState('');

    useEffect(() => {
      const userCookie = document.cookie
        .split('; ')
        .find(row => row.startsWith('userId='));
  
      if (userCookie) {
        const [, userIdValue] = userCookie.split('=');
        setUserId(userIdValue);
      }
    }, []);

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
        marginLeft:"20px",
        marginRight: "10px"
    }

    const linkStyle = {
        textDecoration: 'none',
        color: 'inherit'
    };

    return(
        <div style={navStyle}>
            <div></div>
            <Link to = '/' style={linkStyle}><p>메인</p></Link>
            <Link to="/post" style={linkStyle}><p>고민올리기</p></Link>
            <Link to="/board" style={linkStyle}><p>게시판</p></Link>
            <Link to="/gomgom-board/detail" style={linkStyle}><p>곰곰이</p></Link>
            <div className="separator-line"></div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={userIcon} style={userIconSizeStyle} alt="" />
                {userId}님
            </div>
        </div>
    )
}

export default Nav;