import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from "../components/Header";
import Nav from "../components/Nav";
import GominSlider from "../components/GomGomBoard/GominSlider";
import Footer from "../components/Footer";
import TodayGomin from "../components/GomGomBoard/TodayGomin"; 
import GominBoxContainer from "../components/GomGomBoard/GominBoxContainer"; 
import WorriedBoxContainer from '../components/main/WorriedBoxContainer';

function GomGomBoard(){
    const [board, setBoard] = useState(''); 
    const { boardId } = useParams();

    // useEffect(() => { //특정 -> 확인 완료
    //     axios.get(`/board/${boardId}`) 
    //         .then(response => {
    //             console.log(response.data); // 데이터 형태 확인
    //             setBoard(response.data); // JSON.parse()를 호출하지 않습니다.
    //         })
    //         .catch(error => console.log(error));
    //   }, [boardId]);

    // useEffect(() => { //전체 -> 확인 완료 
    //     axios.get('/api/board') 
    //         .then(response => {
    //             const parsedData = JSON.parse(response.data);
    //             setBoard(parsedData);
    //         })
    //         .catch(error => console.log(error))
    // }, []);

    return (
        <div>
            <Header />
            <Nav />
            <GominSlider/>
            <TodayGomin/>
            {/* <GominBoxContainer/> */}
            <WorriedBoxContainer url = 'api/posts'/>
            <Footer/>
        </div>
    );
}

export default GomGomBoard;
