import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from "../components/Header";
import Nav from "../components/Nav";
import GominSlider from "../components/GomGomBoard/GominSlider";
import Footer from "../components/Footer";
import TodayGomin from "../components/GomGomBoard/TodayGomin"; 
import GominBoxContainer from "../components/GomGomBoard/GominBoxContainer"; 

function GomGomBoard(){
    const [board, setBoard] = useState('')
    
    // useEffect(() => { //통신코드
    //     axios.get('/board') 
    //     .then(response => setBoard(response.data))
    //     .catch(error => console.log(error))
    // }, []);


    useEffect(() => {
        axios.get('/api/board') 
            .then(response => {
                // 응답 데이터를 JSON 객체로 파싱하여 상태로 설정
                const parsedData = JSON.parse(response.data);
                setBoard(parsedData);
            })
            .catch(error => console.log(error))
    }, []);

    return (
        <div>
            <Header />
            <Nav />
            <GominSlider/>
            <TodayGomin/>
            <GominBoxContainer/>
            <Footer/>
        </div>
    );
}

export default GomGomBoard;
