import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logoImg from '../img/gomgom.png';
import axios from 'axios'
function Header(){
    const [responseMessage, setResponseMessage] = useState(null);
    // const postData = async () => {
    //     console.log("클릭함");
    //     try {
    //       const data = {
    //         title: '제목제목',
    //         content: '내용내용',
    //       };
    
    //       const response = await axios.get('/test/1', data);
    //       setResponseMessage(response.data.message);
    //       console.log("성공");
    //     } catch (error) {
    //       console.error('데이터를 보내는 중 오류 발생:', error);
    //     }
    //   }
    // const fetchData = async () => {
    //   console.log("클릭함");
    //   try {
    //     const response = await axios.get('http://localhost:3000/test/1'); // Use axios.get for a GET request
    //     setResponseMessage(response.data.message);
    //     console.log("성공");
    //   } catch (error) {
    //     console.error('데이터를 가져오는 중 오류 발생:', error);
    //   }
    // }
    return(
        <div>
            <Link to="/">
                <img src={logoImg} style={{width:"142px",height:"27px,",marginTop:"40px"}}></img>
            </Link>
        </div>
    )
}

export default Header;