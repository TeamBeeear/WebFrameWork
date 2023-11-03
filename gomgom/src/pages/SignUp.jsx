import React, {useState} from 'react';
import Header from "../components/Header";
import Nav from "../components/Nav";
import "../css/SignUp.css";
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

      const SignupTitleStyle = {
        color: "#67594C",
        fontSize: '36px',
        fontFamily: "Pretendard",
        fontWeight: 700,
        marginTop: "7rem",
        marginBottom: "3rem",
        wordWrap: "break-word"
      }

      const userImageStyle = {
        width: "150px",
        height: "150px",
        objectFit: "cover",
        borderRadius: "50%", 
        display: "block",
        margin: "0 auto"
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

      // const inputStyle = {
      //   width: '557px',
      //   height: '80px',
      //   background: 'white',
      //   borderRadius: '24px',
      //   border: '2px solid #E9E5DA',
      //   display: 'block',
      //   margin: '0 auto 22px', // 간격을 마지막에 추가
      //   marginTop: '10rem',
      //   color: '#67594C',
      //   fontSize: '24px',
      //   fontFamily: 'Pretendard, sans-serif',
      //   fontWeight: 700,
      //   lineHeight: '38.40px',
      //   paddingLeft: '31px',
      //   wordWrap: 'break-word',
      // };
      
      // const placeholderStyle = {
      //   color: '#D2CDBC',
      //   fontSize: '18px',
      //   fontFamily: 'Pretendard, sans-serif',
      //   fontWeight: 500,
      //   lineHeight: '18%',
      //   wordWrap: 'break-word',
      // };


    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <Header />
            <Nav />
            <div className="separator-line"></div>
            <p style={SignupTitleStyle}>회원가입</p>
            <form className="signup-form">
                <img style={userImageStyle} src={selectedImage || userIcon} alt="사용자 이미지" />
                <label for="fileInput" className="upload-button">
                <input type="file" id="fileInput" style={{ display: "none" }} accept="image/*" onChange={handleImageUpload} />
                사진 등록</label>
                <p style={SignupCategoryStyle}>아이디</p>
                <input type="input" className="id-input"  placeholder="아이디를 입력하세요." onChange={handleIdChange} />
                <p style={SignupCategoryStyle}>비밀번호</p>
                <input type="password" className="passwd-input" placeholder="비밀번호를 입력하세요." onChange={handlePasswordChange} />
                <button type="submit" className="signup-submit" style={{
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