import React, {useState,useEffect} from 'react';
import Header from "../components/Header";
import Nav from "../components/Nav";
import GominBox from "../components/Gomin/GominBox";
import GominComment from "../components/Gomin/GominComment";
import GominCommentList from '../components/Gomin/GominCommentList';
import GominStyle from "../components/Gomin/GominStyle";
import UserGomin from "../components/GomGomBoard/UserGomin";
import UserCommentList from '../components/Gomin/GominCommentList';
import { useLocation } from "react-router-dom";
import axios from 'axios';

function GomGomBoardDeatail(){
    const location = useLocation();
    const postId = new URLSearchParams(location.search).get("postId");
    const boardId = new URLSearchParams(location.search).get("boardId");
    
    const [data, setData] = useState('')
    const [commentData, setCommentData] = useState('')

    useEffect(() => {
        axios.get('http://localhost:8080/api/post/'+boardId+'/'+postId)
            .then(response => setData(response.data))
            .catch(error => console.log(error))
    }, []);

    useEffect(() => {
        axios.get('http://localhost:8080/api/comment/'+boardId+'/'+postId)
            .then(response => setCommentData(response.commentData))
            .catch(error => console.log(error))
    }, []);

    return (
        <div>
            <Header />
            <Nav />
            <GominStyle UserName={data.userId}/>
            <UserGomin 
            title = {data.title}
            content = {data.content}
            firstSelectionId={data.firstSelectionId}
            firstSelectionContent={data.firstSelectionContent}
            firstSelectionVotePercentage={data.firstSelectionVotePercentage}
            secondSelectionId={data.secondSelectionId}
            secondSelectionContent={data.secondSelectionContent}
            secondSelectionVotePercentage={data.secondSelectionVotePercentage}
            />
             {Array.isArray(commentData) && commentData.map((item) => (
                    <div>
                        <UserCommentList
                          userId={item.userId}
                          content={item.content}
                          nminutesAgo={item.nminutesAgo}
                        />
                       
                    </div>
                ))}
                 <UserCommentList
                 userId="22"
                 content="2222"
                 nminutesAgo="2"/>
            <GominComment />
        </div>
    );
}

export default GomGomBoardDeatail;