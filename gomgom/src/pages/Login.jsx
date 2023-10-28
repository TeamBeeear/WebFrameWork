import React, {useState} from 'react';
import Header from "../components/Header";
import Nav from "../components/Nav";
import "../css/SignUp.css";
import "../css/Login.css";
import gomgom from "../img/mainLinkBear.png"
import Footer from '../components/Footer';


const Login = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const handleIdChange = (e) => {
        setId(e.target.value);
      };
      
      const handlePasswordChange = (e) => {
        setPassword(e.target.value);
      };

      const handleSignupClick = () => {
        // 페이지 이동 처리
        window.location.href = '/';
      };

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
                <button type="submit" className="login-submit" style={{
                    background: id && password ? '#FFAB5D' : '#E9E5DA'}}
                    disabled={!id || !password} // 입력 필드가 비어 있을 때 버튼 비활성화
                >로그인</button>
                <p className="to-signup" onClick={handleSignupClick} style={{cursor: "pointer"}}>회원가입</p>
            </form>
            <Footer />
        </div>
    );
}

export default Login;