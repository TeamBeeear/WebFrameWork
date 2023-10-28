import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from "../components/Header";
import Nav from "../components/Nav";
import GominSlider from "../components/GomGomBoard/GominSlider";
import Footer from "../components/Footer";
import TodayGomin from "../components/GomGomBoard/TodayGomin"; 
import GominBoxContainer from "../components/GomGomBoard/GominBoxContainer"; 

function GomGomBoard(){
    const [data, setData] = useState('')

    useEffect(() => {
        axios.get('/board')
            .then(response => setData(response.data))
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
