import React, {useState,useEffect} from 'react';
import Header from "../components/Header";
import Nav from "../components/Nav";
import GominBox from "../components/Gomin/GominBox";
import GominCommentGomgomPost from "../components/Gomin/GominCommentGomgomPost";
import GominCommentList from '../components/Gomin/GominCommentList';
import GominStyle from "../components/Gomin/GominStyle";
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import guksuImg from "../img/gominImg/guksu.png";
import img1 from "../img/gominImg/GominImg1.jpeg";
import img2 from "../img/gominImg/GominImg2.jpeg";
import img3 from "../img/gominImg/GominImg3.jpeg";
import img4 from "../img/gominImg/GominImg4.jpeg";
import img5 from "../img/gominImg/GominImg5.jpeg";
import img6 from "../img/gominImg/GominImg6.jpeg";
import img7 from "../img/gominImg/GominImg7.jpeg";
import img8 from "../img/gominImg/GominImg8.jpeg";

function GominPost(){
    const location = useLocation();
    const id = new URLSearchParams(location.search).get("id");
    const [data, setData] = useState('')
    const [commentData, setCommentData] = useState('')
    const [images, setImages] = useState([]);
    
    useEffect(() => {
        axios.get('https://3.34.129.245/api/gomgom-post/'+id)
            .then(response => setData(response.data))
            .catch(error => console.log(error))
    }, []);

    useEffect(() => {
        axios.get('https://3.34.129.245/api/comment/'+id)
        .then(response => {
            console.log('Comment Data:', response.data);
            setCommentData(response.data);
        })
            .catch(error => console.log(error))
    }, []);

    useEffect(() => {
        const imagePaths = [guksuImg, img1, img2, img3, img4, img5, img6, img7, img8, img1, img2];
        setImages(imagePaths);
    }, []);

    return (
        <div>
            <Header />
            <Nav />
            <GominStyle UserName="곰곰이"/>
            <GominBox 
                title = {data.title}
                content = {data.content}
                imagePath={images[id - 1]}
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