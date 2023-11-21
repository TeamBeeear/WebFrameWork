import React, { useEffect, useState } from 'react';
import Header from "../components/Header";
import Nav from "../components/Nav";
import GominSlider from "../components/GomGomBoard/GominSlider";
import Footer from "../components/Footer";
import TodayGomin from "../components/GomGomBoard/TodayGomin";
import WorriedBoxs from '../components/main/WorriedBoxs';

function GomGomBoard(){
    const [gominUrl, setGominUrl] = useState('/api/posts');
    const updateGominUrl = (newUrl) => {
        setGominUrl(newUrl);
        console.log(newUrl);
    };
    useEffect(() => {
        console.log('gominUrl updated:', gominUrl);
    }, [gominUrl]);

    return (
        <div>
            <Header />
            <Nav />
            <GominSlider/>
            <TodayGomin updateUrl={updateGominUrl} />
            <div style={{display: 'flex', justifyContent: 'center', marginTop:'5%'}}>
                <WorriedBoxs url={gominUrl} />
            </div>
            <Footer/>
        </div>
    );
}

export default GomGomBoard;
