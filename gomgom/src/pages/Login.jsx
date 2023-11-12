import React, { useState } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import GomGomImage from "../components/Login/GomGomImage";
import LoginForm from "../components/Login/LoginForm";
import PageTitle from "../components/Login/PageTitle";
import SignupLink from "../components/Login/SignupLink";
import Footer from "../components/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // 에러 메시지 상태
  const navigate = useNavigate();

  const handleIdChange = (e) => {
    setId(e.target.value);
  };
  
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginClick = (e) => {
    e.preventDefault();

    // 서버에 로그인 요청을 보내고 응답을 처리
    axios.post("/api/login", { userId: id, userPw: password })
      .then((response) => {
        if (response.status === 200) {
          const userId = response.data.userId; // userId 추출

          // userId를 세션 스토리지에 저장
          sessionStorage.setItem("userId", userId);

          // 로그인 상태로 처리 후 메인 페이지로 이동
          window.location.href = "/";
        }
      })
      .catch((error) => {
        setError("아이디나 비밀번호를 확인하세요."); // 에러 메시지 설정
        console.error("로그인 요청 중 오류 발생:", error);
      });
  };

  const handleSignupClick = () => {
    navigate("/signup");
  };

  const pageTitleStyle = {
    color: "#67594C",
    fontSize: "24px",
    fontFamily: "Pretendard, sans-serif",
    fontWeight: 700,
    wordWrap: "break-word",
    marginTop: "2rem",
    marginBottom: "1rem",
  };

  const pageTitle2Style = {
    color: "#67594C",
    fontSize: "32px",
    fontFamily: "Pretendard, sans-serif",
    fontWeight: 900,
    wordWrap: "break-word",
    marginTop: "0.25rem",
    marginBottom: "3rem",
  };
  
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Header />
      <Nav />
      <GomGomImage />
      <PageTitle text="고민하지말고," style={pageTitleStyle} />
      <PageTitle text="곰곰에서 고민을 나누어요" style={pageTitle2Style} />
      <LoginForm
        handleIdChange={handleIdChange}
        handlePasswordChange={handlePasswordChange}
        handleLoginClick={handleLoginClick}
        id={id}
        password={password}
        error={error}
      />
      <SignupLink handleSignupClick={handleSignupClick} />
      <Footer />
    </div>
  );
}

export default Login;