import React, {useState} from 'react';
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from '../components/Footer';
import AskToGomGom from '../components/GomGomAI/AskToGomGom';
import AskToGomGomExplain from '../components/GomGomAI/AskToGomGomExplain';
import AnswerContainer from '../components/GomGomAI/AnswerContainer';

function GomGomAI(){
    return (
        <div>
            <Header />
            <Nav />
            <AskToGomGom/>
            <AskToGomGomExplain/>
            <AnswerContainer/>
            <Footer/>
        </div>
    );
}

export default GomGomAI;