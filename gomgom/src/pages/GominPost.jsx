import React, {useState} from 'react';
import Header from "../components/Header";
import Nav from "../components/Nav";
import GominBox from "../components/Gomin/GominBox";
import GominComment from "../components/Gomin/GominComment";
import GominCommentList from '../components/Gomin/GominCommentList';
import GominStyle from "../components/Gomin/GominStyle";

function GominPost(){
    return (
        <div>
            <Header />
            <Nav />
            <GominStyle/>
            <GominBox />
            <GominCommentList/>
            <GominComment />
        </div>
    );
}

export default GominPost;