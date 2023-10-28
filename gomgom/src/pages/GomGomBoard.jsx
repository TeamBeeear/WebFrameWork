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
    const [basicTestResult, setBasicTestResult] = useState("");
    const [responseEntityTestResult, setResponseEntityTestResult] = useState("");
    
    useEffect(() => { //통신코드
        axios.get('/api/board') //http://localhost:8080생략
        .then(response => setBoard(response.data))
        .catch(error => console.log(error))

        // axios.get('/test/string') //http://localhost:8080생략
        // .then(response => setBasicTestResult(response.data))
        // .catch(error => console.log(error))

        // axios.get('/test/response-entity') //http://localhost:8080생략
        // .then(response => setResponseEntityTestResult(response.data))
        // .catch(error => console.log(error))
    }, []);

    return (
        <div>
              <p>{basicTestResult}</p>
              <p>{responseEntityTestResult}</p>
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
