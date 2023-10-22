import React from 'react';
import Header from "../components/Header";
import Nav from "../components/Nav";
import gomgom from "../img/mainLinkBear.png"
import Footer from '../components/Footer';
import "../css/PostComplete.css";


const PostComplete = () => {
      const handleBoardClick = () => {
        window.location.href = '/signup'; // 게시판 페이지 만들어지면 수정
      };

      const handleMypageClick = () => {
        window.location.href = '/signup'; // 마이페이지 만들어지면 수정
      };


    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <Header />
            <Nav />
            <div className="separator-line"></div>
            <img src={gomgom} className="gomgom-img"></img>
            <p className="complete-text">고민 올리기 완료!</p>
            <p className="complete-detail">곧 사람들이 고민 선택을 도와줄 거예요!<br/>나의 고민은 마이페이지에서 확인 가능해요.</p>
            <button type="submit" className="move-to-board" onClick={handleMypageClick} style={{cursor: "pointer"}}>게시판으로 이동</button>
            <p className="move-to-mypage" onClick={handleBoardClick} style={{cursor: "pointer"}}>마이페이지로 이동</p>
            <Footer />
        </div>
    );
}

export default PostComplete;