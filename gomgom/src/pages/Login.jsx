import React, { useState } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import GomGomImage from "../components/Login/GomGomImage";
import PageTitle from "../components/Login/PageTitle";
import InputField from "../components/Signup/InputField";
import SubmitButton from "../components/Signup/SubmitButton";
import SignupLink from "../components/Login/SignupLink";
import Footer from "../components/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(""); 
    const navigate = useNavigate();

    const handleIdChange = (e) => {
        setId(e.target.value);
    };
    
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLoginClick = (e) => {
        e.preventDefault();
    
    
    axios.post("https://3.34.129.245/api/login", { userId: id, userPw: password })
		.then((response) => {
			if (response.status === 200) {
            	const userId = response.data.userId; 
            	sessionStorage.setItem("userId", userId); 
            	navigate("/"); 
			}
		})
        .catch((error) => {
			if (error.response) {
            	// 에러 메시지 설정
				if (error.response.status === 404) {
					setError("존재하지 않는 아이디입니다.");
				} else if (error.response.status === 401) {
					setError("비밀번호가 일치하지 않습니다.");
				} else {
				setError("아이디나 비밀번호가 일치하지 않습니다.");
				}
			} else {
				setError("로그인 요청 중 오류가 발생했습니다.");
			}
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

    const errorStyle = {
		color: "#67594C",
		fontSize: "18px",
		fontFamily: "Pretendard, sans-serif",
		fontWeight: 500,
		lineHeight: "28.80px",
		marginRight: "22rem", 
		wordWrap: "break-word"
    };

    return (
        <div>
			<Header />
			<Nav />
			<GomGomImage />
			<PageTitle text="고민하지말고," style={pageTitleStyle} />
			<PageTitle text="곰곰에서 고민을 나누어요" style={pageTitle2Style} />
			<form className="login-form">
			<InputField
				type="text"
				placeholder="아이디를 입력하세요."
				onChange={handleIdChange}
				value={id}
			/>
			<InputField
				type="password"
				placeholder="비밀번호를 입력하세요."
				onChange={handlePasswordChange}
				value={password}
			/>
            {error && <p style={errorStyle}>{error}</p>}
            <SubmitButton onClick={handleLoginClick} isDisabled={!id || !password} buttonText={"로그인"} />
			</form>
			<SignupLink handleSignupClick={handleSignupClick} />
			<Footer />
		</div>
    );
}

export default Login;