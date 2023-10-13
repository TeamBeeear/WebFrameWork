import React, { useState } from "react";
import logoImg from '../img/gomgom.png';
import axios from 'axios'
function Header(){
    const [responseMessage, setResponseMessage] = useState(null);
    const postData = async () => {
        console.log("클릭함");
        try {
          const data = {
            title: '제목제목',
            content: '내용내용',
          };
    
          const response = await axios.post('http://223.130.137.75:8080/test', data);
          setResponseMessage(response.data.message);
          console.log("성공");
        } catch (error) {
          console.error('데이터를 보내는 중 오류 발생:', error);
        }
      }
    return(
        <div>
            <img onClick={postData} src={logoImg} style={{width:"142px",height:"27px,",marginTop:"40px"}}></img>
        </div>
    )
}

export default Header;