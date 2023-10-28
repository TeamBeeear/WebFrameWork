import React, {useState, useRef} from 'react';
import Header from "../components/Header";
import Nav from "../components/Nav";
import "../css/SignUp.css";
import "../css/Login.css";
import gomgom from "../img/mainLinkBear.png"
import Footer from '../components/Footer';
import axios from 'axios';
import { useCookies } from 'react-cookie'; // useCookies import


const Login = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [, setCookie] = useCookies(['userId']); // userId 쿠키
    const [error, setError] = useState(''); // 에러 메시지 상태

    const handleIdChange = (e) => {
        setId(e.target.value);
    };
      
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };

    const handleLoginClick = () => {
      // 서버에 로그인 요청을 보내고 응답을 처리
      axios.post('/login', { userId: id, userPw: password })
        .then((response) => {
          if (response.status === 200) {
            const userId = response.data.userId; // userId 추출
  
            // userId를 쿠키에 저장
            setCookie('userId', userId, { path: '/' });
  
            // 로그인 상태로 처리 후 메인 페이지로 이동
            window.location.href = '/';
          }
        })
        .catch((error) => {
          setError('아이디나 비밀번호를 확인하세요.'); // 에러 메시지 설정
          console.error('로그인 요청 중 오류 발생:', error);
        });
    }

    const handleSignupClick = () => {
      // 페이지 이동 처리
      window.location.href = '/signup';
    };

    const errorStyle = {
      color: '#67594C',
      fontSize: '18px',
      fontFamily: 'Pretendard, sans-serif',
      fontWeight: 500,
      lineHeight: '28.80px',
      marginRight: '20rem', 
      wordWrap: 'break-word'
    }


    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Header />
            <Nav />
            <div className="separator-line"></div>
            <img src={gomgom} className="gomgom-img"></img>
            <p className="title1">고민하지말고,<br/></p>
            <p className="title2">곰곰에서 고민을 나누어요</p>
            <form className="login-form">
                <input type="input" className="id-input" placeholder="아이디를 입력하세요." onChange={handleIdChange} />
                <input type="password" className="passwd-input" placeholder="비밀번호를 입력하세요." onChange={handlePasswordChange} />
                {error && <p style={errorStyle}>{error}</p>}
            </form>
            <button type="submit" className="login-submit" style={{
                background: id && password ? '#FFAB5D' : '#E9E5DA'}}
                disabled={!id || !password} // 입력 필드가 비어 있을 때 버튼 비활성화
                onClick={handleLoginClick}
            >로그인</button>
            <p className="to-signup" onClick={handleSignupClick} style={{cursor: "pointer"}}>회원가입</p>
            <Footer />
        </div>
    );
}

export default Login;