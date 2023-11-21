import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import userIcon from "../img/userIcon.png";
import { useNavigate } from "react-router-dom";

function Nav() {
    const [userId, setUserId] = useState(null); 
    const profileImage = sessionStorage.getItem("profileImage");
    const navigate = useNavigate(); 
    useEffect(() => {
        const storedUserId = sessionStorage.getItem("userId"); 
        if (storedUserId) {
            setUserId(storedUserId);
        }
    }, []);
    const isLoggedIn = !!userId;
    const handleLogout = () => {
        setUserId(null); 
        sessionStorage.removeItem("userId");
        navigate("/login");
    };
    const navStyle = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginRight: "20%",
        marginLeft: "20%",
        color: "#67594C",
        fontSize: "16px",
        fontWeight: "700",
        lineHeight: "100%",
    };
    const userIconSizeStyle = {
        width: "30px",
        height: "30px",
        margin: "auto 0",
        marginLeft: "20px",
        marginRight: "10px",
        borderRadius: "50%",
    };
    const linkStyle = {
        textDecoration: "none",
        color: "inherit",
    };
    const logoutStyle = {
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10,
        background: "#E9E5DA",
        borderRadius: 17,
        color: "rgba(103, 88, 76, 0.50)",
        border: "none",
        fontSize: "14",
        fontFamily: "Pretendard",
        fontWeight: "700",
        wordWrap: "break-word",
        marginLeft: "10px"
    };

    return (
        <div style={navStyle}>
            <div></div>
            <Link to="/" style={linkStyle}><p>메인</p></Link>
            <Link to="/post" style={linkStyle}><p>고민올리기</p></Link>
            <Link to="/board" style={linkStyle}><p>게시판</p></Link>
            <Link to="/gomgom-ai" style={linkStyle}><p>곰곰이</p></Link>
            <Link to="/my-page" style={linkStyle}><p>마이페이지</p></Link>
            <div className="separator-line"></div>
            <div style={{ display: "flex", alignItems: "center" }}>
                {isLoggedIn ? (
                <div style={{ display: "flex", alignItems: "center" }}>
                <img src={profileImage || userIcon} style={userIconSizeStyle} alt="프로필 사진" />
                {userId ? `${userId}님 환영합니다` : null}
                <button onClick={handleLogout} style={logoutStyle}>로그아웃</button>
                </div>
                ) : (
                <div>
                    <Link to="/login" style={linkStyle}>로그인</Link> | <Link to="/signup" style={linkStyle}>회원가입</Link>
                </div>
                )}
            </div>
        </div>
    );
}

export default Nav;
