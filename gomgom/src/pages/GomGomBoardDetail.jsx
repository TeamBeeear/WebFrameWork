import React, {useState} from 'react';
import Header from "../components/Header";
import Nav from "../components/Nav";
import GominBox from "../components/Gomin/GominBox";
import GominComment from "../components/Gomin/GominComment";
import GominCommentList from '../components/Gomin/GominCommentList';
import GominStyle from "../components/Gomin/GominStyle";
import UserGomin from "../components/GomGomBoard/UserGomin";

function GomGomBoardDeatail(){
    return (
        <div>
            <Header />
            <Nav />
            <GominStyle UserName="핑핑이"/>
            <UserGomin/>
            <GominComment />
        </div>
    );
}

export default GomGomBoardDeatail;