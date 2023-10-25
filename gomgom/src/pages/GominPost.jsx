import React, {useState} from 'react';
import Header from "../components/Header";
import Nav from "../components/Nav";
import GominBox from "../components/Gomin/GominBox";
import GominComment from "../components/Gomin/GominComment";
import GominCommentList from '../components/Gomin/GominCommentList';

function GominPost(){
    return (
        <div>
            <Header />
            <Nav />
            <div style={{height:"0.25rem", backgroundColor:"var(--e-9-e-5-da, #E9E5DA)"}}/>  {/* 윗 라인 */}
            <p style={{color:"var(--67594-c, #67594C)",fontFamily: "Pretendard", fontSize:"1.25rem", fontStyle:"normal", 
            fontWeight:"700", lineHeight:"100%", marginTop:"4.37rem"}}>곰곰이의 고민</p>
            <GominBox />
            <GominCommentList/>
            <GominComment />
        </div>
    );
}

export default GominPost;