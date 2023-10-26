import React, {useState} from 'react';
import Header from "../components/Header";
import Nav from "../components/Nav";
import GominSlider from "../components/GomGomBoard/GominSlider";

function GomGomBoard(){
    return (
        <div>
            <Header />
            <Nav />
            <GominSlider/>
        </div>
    );
}

export default GomGomBoard;