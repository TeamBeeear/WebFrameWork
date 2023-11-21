import React,{useEffect, useState} from "react";
import WorriedBox from "../main/WorriedBox";
import axios from 'axios';

function WorriedBoxContainer({ category = 1 }) {
    const [userId, setUserId] = useState(''); 
    const getUserIdFromSession = () => {
        const userIdFromSession = sessionStorage.getItem('userId'); 
        setUserId(userIdFromSession); 
    };
    useEffect(() => {
        getUserIdFromSession(); 
    }, []);
    const apiUrl = `/api/my-page?id=${userId}&category=${category}`; 
    const [data, setData] = useState('');
    useEffect(() => {
        axios.get(apiUrl)
            .then(response => setData(response.data))
            .catch(error => console.log(error))
    }, [apiUrl, userId]); 
    const titleDivStyle={
        display:"flex",
        flexDireaction:"row",
        marginBottom:"34px",
        justifyContent:"space-between",
    };
    const separateDivStyle={
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
    };
    const colDivStyle={
        display:"flex",
        flexDirection:"column",
    };
    const colRightDivStyle={
        display:"flex",
        flexDirection:"column",
        marginLeft:"20px"
    };

    useEffect(() => {
        axios.get(apiUrl)
            .then(response => setData(response.data))
            .catch(error => console.log(error))
    }, [apiUrl]);

    return(
        <div style={{backgroundColor:"#FAF9F6", display:"flex", justifyContent:"center",}}>
                <div style={titleDivStyle}></div>
                <div style={separateDivStyle}>
                    <div style={colDivStyle}>
                        {Array.isArray(data) && data.slice().reverse().map((item, index) => (
                            index % 2 === 0 ? ( 
                                <WorriedBox
                                    key={item.postId}
                                    data={item}
                                    postId={item.postId}
                                    boardId={item.boardId}
                                    title={item.title}
                                    content={item.content}
                                    commentsCount={item.commentsCount}
                                    heartsCount={item.heartsCount}
                                    userId={item.userId}
                                    firstSelectionContent={item.firstSelectionContent}
                                    secondSelectionContent={item.secondSelectionContent}
                                    nminutesAgo={item.nminutesAgo}
                                />
                            ) : null
                        ))}
                    </div>
                    <div style={colRightDivStyle}>
                        {Array.isArray(data) && data.slice().reverse().map((item, index) => (
                            index % 2 === 1 ? ( 
                                <WorriedBox
                                    key={item.postId}
                                    data={item}
                                    postId={item.postId}
                                    boardId={item.boardId}
                                    title={item.title}
                                    content={item.content}
                                    commentsCount={item.commentsCount}
                                    heartsCount={item.heartsCount}
                                    userId={item.userId}
                                    firstSelectionContent={item.firstSelectionContent}
                                    secondSelectionContent={item.secondSelectionContent}
                                    nminutesAgo={item.nminutesAgo}
                                />
                            ) : null
                        ))}
                    </div>
                </div>
            </div>
    )
}

export default WorriedBoxContainer;