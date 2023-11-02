import React, {useState} from 'react';
import Header from "../components/Header";
import Nav from "../components/Nav";
import "../css/Login.css";
import userIcon from "../img/userIcon.png"
import Footer from '../components/Footer';


const SignUp = () => {
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
          setSelectedImage(imageURL); // 파일을 선택해서 받아온 url로 이미지 설정
        }
      };

      const handleSignupClick = () => {
        window.location.href = '/login'; // 로그인 페이지로 이동
      };

      const separatorLineStyle = {
        width: '100%',
        height: '4px',
        left: 0,
        top: '115px',
        position: 'absolute',
        background: '#E9E5DA',
      };

      const SignupTitleStyle = {
        color: "#67594C",
        fontSize: '36px',
        fontFamily: "Pretendard",
        fontWeight: 700,
        marginTop: "5rem",
        marginBottom: "3rem",
        wordWrap: "break-word"
      }

      const userImageStyle = {
        width: "150px",
        height: "150px",
        objectFit: "cover",
        borderRadius: "50px", 
        display: "block",
        margin: "0 auto"
      }

      const uploadBtnStyle = {
        width: '120px',
        height: '44px',
        background: '#E9E5DA',
        border: '1px solid #D2CDBC',
        borderRadius: '32px',
        display: 'block',
        margin: '0 auto',
        marginTop: '2rem',
        color: 'rgba(103, 88, 76, 0.50)',
        fontSize: '15px',
        fontFamily: 'Pretendard, sans-serif',
        fontWeight: 700,
        lineHeight: '44px',
        wordWrap: 'break-word'
      }

      const SignupCategoryStyle = {
        color: "#67594C",
        fontSize: 20,
        fontFamily: "Pretendard",
        fontWeight: 700,
        wordWrap: "break-word",
        marginRight: "32rem",
        marginBottom: "1.5rem"
      }

      const signupSubmitStyle = {
          width: '340px',
          height: '75px',
          background: '#FFAB5D',
          borderRadius: '44px',
          display: 'block',
          margin: '0 auto',
          marginTop: '5rem',
          marginBottom: '10rem',
          border: 'none',

          color: 'white',
          fontSize: '24px',
          fontFamily: 'Pretendard, sans-serif',
          fontWeight: 700,
          lineHeight: '24%',
          wordWrap: 'break-word',
          background: id && password ? '#FFAB5D' : '#E9E5DA',
      }

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <Header />
            <Nav />
            <div className="separator-line"></div>
            <p style={SignupTitleStyle}>회원가입</p>
            <form className="signup-form">
                <img style={userImageStyle} src={selectedImage || userIcon} alt="사용자 이미지" />
                <label for="fileInput" style={uploadBtnStyle}>
                <input type="file" id="fileInput" style={{ display: "none" }} accept="image/*" onChange={handleImageUpload} />
                사진 등록</label>
                <p style={SignupCategoryStyle}>아이디</p>
                <input type="input" className="id-input"  placeholder="아이디를 입력하세요." onChange={handleIdChange} />
                <p style={SignupCategoryStyle}>비밀번호</p>
                <input type="password" className="passwd-input" placeholder="비밀번호를 입력하세요." onChange={handlePasswordChange} />
                <button type="submit" className="submit" style={{
                  marginBottom: "15rem",
                  background: id && password ? '#FFAB5D' : '#E9E5DA'}}
                  disabled={!id || !password} // 입력 필드가 비어 있을 때 버튼 비활성화
                  onClick={handleSignupClick}  
                >완료</button>
            </form>
            <Footer />
        </div>
    );
}

export default SignUp;