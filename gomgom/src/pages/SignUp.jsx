import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Login.css";
import "../css/Whole.css";
import Header from "../components/Header";
import Nav from "../components/Nav";
import userIcon from "../img/userIcon.png";
import PageTitle from "../components/Signup/PageTitle";
import UserImageUpload from "../components/Signup/UserImageUpload";
import InputLabel from "../components/Signup/InputLabel";
import InputField from "../components/Signup/InputField";
import SubmitButton from "../components/Signup/SubmitButton";
import Footer from "../components/Footer";
import axios from "axios";

const SignUp = () => {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [idError, setIdError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [selectedImage, setSelectedImage] = useState(userIcon);
    const navigate = useNavigate();

    const handleIdChange = (e) => {
        setId(e.target.value);
    };

    const handlePasswordChange = (e) => {
        const enteredPassword = e.target.value;
        setPassword(enteredPassword);
        // 비밀번호가 6자리 미만이거나 영문/숫자 조합이 아닐 경우
        if (enteredPassword.length < 6 ||
            !( /(?=.*[0-9])(?=.*[a-zA-Z])[0-9a-zA-Z]{6,}/.test(enteredPassword))) {
            setPasswordError("비밀번호는 6자리 이상의 영문/숫자 조합이어야 합니다.");
        } else {
            setPasswordError("");
        }
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
            const base64String = reader.result;
            setSelectedImage(base64String); // 이미지를 화면에 표시하기 위해 이미지를 Base64 형태로 인코딩
            sessionStorage.setItem("profileImage", base64String); // 세션 스토리지에 이미지 URL 저장
        };
        reader.readAsDataURL(file);
        }
    };

    const handleSignupClick = async (e) => {
        e.preventDefault();

    try {
        const response = await axios.post("/api/signup", {
            userId: id,
            userPw: password,
        });

        const securedResponse = {
            userId: response.data.userId,
            userPw: "****",
        };

        console.log("회원가입 응답:", securedResponse);
        navigate("/login");

        } catch (error) {
            // 서버에서 반환한 에러에 따라 다른 메시지 설정
            if (error.response.status === 409) {
                setIdError("이미 존재하는 아이디입니다.");
            } else {
                console.error("회원가입 실패:", error);
            }
        }
    };

    const idErrorStyle = {
        color: "#67594C",
        fontSize: "18px",
        fontFamily: "Pretendard, sans-serif",
        fontWeight: 500,
        lineHeight: "28.80px",
        marginRight: "22rem", 
        wordWrap: "break-word"
    };

    const passwordErrorStyle = {
        color: "#67594C",
        fontSize: "18px",
        fontFamily: "Pretendard, sans-serif",
        fontWeight: 500,
        lineHeight: "28.80px",
        marginRight: "10rem", 
        wordWrap: "break-word"
    };

    return (
        <div>
        <Header />
        <Nav />
        <PageTitle text="회원가입" />
        <UserImageUpload selectedImage={selectedImage} handleImageUpload={handleImageUpload} />
        <InputLabel text="아이디" />
        <InputField
            type="text"
            placeholder="아이디를 입력하세요."
            onChange={handleIdChange}
            value={id}
        />
        {idError && <p style={idErrorStyle}>{idError}</p>}
        <InputLabel text="비밀번호" />
        <InputField
            type="password"
            placeholder="비밀번호를 입력하세요."
            onChange={handlePasswordChange}
            value={password}
        />
        {passwordError && <p style={passwordErrorStyle}>{passwordError}</p>}
        <SubmitButton onClick={handleSignupClick} isDisabled={!id || !password} buttonText={"완료"} />
        <Footer />
        </div>
    );
};

export default SignUp;