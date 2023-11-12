import React, { useState } from 'react';
import Header from "../components/Header";
import Nav from "../components/Nav";
import gomgom from "../img/mainLinkBear.png"
import Footer from '../components/Footer';
import axios from 'axios';
import LoginForm from '../components/Login/LoginForm';
import PageTitle from '../components/Login/PageTitle';

const Login = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // 에러 메시지 상태

  const handleIdChange = (e) => {
    setId(e.target.value);
  };
  
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginClick = (e) => {
    e.preventDefault();

    // 서버에 로그인 요청을 보내고 응답을 처리
    axios.post('/api/login', { userId: id, userPw: password })
      .then((response) => {
        if (response.status === 200) {
          const userId = response.data.userId; // userId 추출

          // userId를 세션 스토리지에 저장
          sessionStorage.setItem('userId', userId);

          // 로그인 상태로 처리 후 메인 페이지로 이동
          window.location.href = '/';
        }
      })
      .catch((error) => {
        setError('아이디나 비밀번호를 확인하세요.'); // 에러 메시지 설정
        console.error('로그인 요청 중 오류 발생:', error);
      });
  };

  const handleSignupClick = () => {
    // 페이지 이동 처리
    window.location.href = '/signup';
  };

  const gomgomImgStyle = {
    width: '110px',
    height: '82px',
    margin: '0 auto',
    marginTop: '5rem',
  };

  const pageTitleStyle = {
    color: '#67594C',
    fontSize: '24px',
    fontFamily: 'Pretendard, sans-serif',
    fontWeight: 700,
    wordWrap: 'break-word',
    marginTop: '2rem',
    marginBottom: '1rem',
  };

  const pageTitle2Style = {
    color: '#67594C',
    fontSize: '32px',
    fontFamily: 'Pretendard, sans-serif',
    fontWeight: 900,
    wordWrap: 'break-word',
    marginTop: '0.25rem',
    marginBottom: '3rem',
  };

  const toSignupStyle = {
    color: "#606067",
    fontSize: "24px",
    fontFamily: "Pretendard",
    fontWeight: 700,
    lineHeight: "24px",
    wordWrap: "break-word",
    marginBottom: "15rem",
    cursor: "pointer"
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Header />
      <Nav />
      <img src={gomgom} style={gomgomImgStyle}></img>
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
      <p onClick={handleSignupClick} style={toSignupStyle}>회원가입</p>
      <Footer />
    </div>
  );
}

export default Login;