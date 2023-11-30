import React from "react";
import Header from '../Header';
import Nav from '../Nav';
import MainContent from "./MainContent";
import Slider from "./Slider";
import LinkBlock from "./LinkBlock";
import WorriedBoxContainer from "./WorriedBoxContainer";
import Footer from "../Footer";

function Main(){
    return(
        <div>
            <Header/>
            <Nav/>
            <MainContent/>
            <Slider style={{backgroundColor:"#D2CDBC"}}/>
            <LinkBlock/>
            <WorriedBoxContainer url = 'https://3.34.129.245/api/posts'/>
            <Footer/>
        </div>
    );
}

export default Main;
