import React, {useState,useEffect} from 'react';
import Header from "../components/Header";
import Nav from "../components/Nav";
import GominBox from "../components/Gomin/GominBox";
import GominCommentGomgomPost from "../components/Gomin/GominCommentGomgomPost";
import GominCommentList from '../components/Gomin/GominCommentList';
import GominStyle from "../components/Gomin/GominStyle";
import { useLocation } from 'react-router-dom';
import axios from 'axios';

// 곰곰이 게시글

function GominPost(){
    const location = useLocation();
    const id = new URLSearchParams(location.search).get("id");

    const [data, setData] = useState('')
    const [commentData, setCommentData] = useState('')

    useEffect(() => {
        axios.get('http://localhost:8080/api/gomgom-post/'+id)
            .then(response => setData(response.data))
            .catch(error => console.log(error))
    }, []);
    useEffect(() => {
        axios.get('http://localhost:8080/api/comment/'+id)
        .then(response => {
            // response.data에 서버에서 받은 데이터가 들어 있음
            console.log('Comment Data:', response.data);
            setCommentData(response.data);
        })
            .catch(error => console.log(error))
    }, []);
    return (
        <div>
            <Header />
            <Nav />
            <GominStyle UserName="곰곰이"/>
            <GominBox 
              title = {data.title}
              content = {data.content}
            />
            {Array.isArray(commentData) && commentData.map((item) => (
                    <GominCommentList
                        userId={item.userId}
                      content={item.content}
                      nminutesAgo={item.nminutesAgo}
                    />
                    ))} 
            <GominCommentGomgomPost />
        </div>
    );
}

export default GominPost;