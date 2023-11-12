import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import "../css/Login.css";
import Header from "../components/Header";
import Nav from "../components/Nav";
import userIcon from "../img/userIcon.png"
import PageTitle from '../components/Signup/PageTitle';
import UserImageUpload from '../components/Signup/UserImageUpload';
import Form from '../components/Signup/Form';
import SubmitButton from '../components/Signup/SubmitButton';
import Footer from '../components/Footer';
import axios from 'axios';


const SignUp = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
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
          const response = await axios.post('/api/signup', { 
            userId: id, 
            userPw: password,
          });
      
          const securedResponse = {
            userId: response.data.userId,
            userPw: '****',
          };
      
          console.log('회원가입 응답:', securedResponse);
          navigate('/login');
        } catch (error) {
          console.error('회원가입 실패:', error);
        }
      };

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <Header />
            <Nav />
            <PageTitle text="회원가입" />
            <UserImageUpload selectedImage={selectedImage} handleImageUpload={handleImageUpload} />
            <Form handleIdChange={handleIdChange} handlePasswordChange={handlePasswordChange} id={id} password={password} />
            <SubmitButton onClick={handleSignupClick} isDisabled={!id || !password} buttonText={"완료"} />
            <Footer />
        </div>
    );
}

export default SignUp;