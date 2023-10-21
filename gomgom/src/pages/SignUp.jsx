import React, {useState} from 'react';
import Header from "../components/Header";
import Nav from "../components/Nav";
import "../css/SignUp.css";
import userIcon from "../img/userIcon.png"
import Footer from '../components/Footer';


const SignUp= () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [selectedImage, setSelectedImage] = useState(userIcon);

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

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <Header />
            <Nav />
            <div className="separator-line"></div>
            <p className="signup-heading">회원가입</p>
            <form className="signup-form">
                <img className="user-img" src={selectedImage || userIcon} alt="userImage" />
                <label for="fileInput" className="upload-button">
                <input type="file" id="fileInput" style={{ display: "none" }} accept="image/*" onChange={handleImageUpload} />
                사진 등록</label>
                <p className="id-heading">아이디</p>
                <input type="input" className="id-input" placeholder="아이디를 입력하세요." onChange={handleIdChange} />
                <p className="passwd-heading">비밀번호</p>
                <input type="password" className="passwd-input" placeholder="비밀번호를 입력하세요." onChange={handlePasswordChange} />
                <button type="submit" className="signup-submit" style={{
                    background: id && password ? '#FFAB5D' : '#E9E5DA'}}
                    disabled={!id || !password} // 입력 필드가 비어 있을 때 버튼 비활성화
                >완료</button>
            </form>
            <Footer />
        </div>
    );
}

export default SignUp;