import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Login.css";
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
  const [selectedImage, setSelectedImage] = useState(userIcon);
  const navigate = useNavigate();

  const handleIdChange = (e) => {
    setId(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setSelectedImage(imageURL);
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
      console.error("회원가입 실패:", error);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
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
      <InputLabel text="비밀번호" />
      <InputField
        type="password"
        placeholder="비밀번호를 입력하세요."
        onChange={handlePasswordChange}
        value={password}
      />
      <SubmitButton onClick={handleSignupClick} isDisabled={!id || !password} buttonText={"완료"} />
      <Footer />
    </div>
  );
};

export default SignUp;