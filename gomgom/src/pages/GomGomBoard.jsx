import React, {useState} from 'react';
import Header from "../components/Header";
import Nav from "../components/Nav";
import GominSlider from "../components/GomGomBoard/GominSlider";
import Footer from "../components/Footer";
import TodayGomin from "../components/GomGomBoard/TodayGomin"; 

function GomGomBoard(){
    return (
        <div>
            <Header />
            <Nav />
            <GominSlider/>
            <TodayGomin/>
            <Footer/>
        </div>
    );
}

export default GomGomBoard;