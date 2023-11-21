import React,{useEffect, useState} from "react";
import WorriedBox from "../main/WorriedBox";
import axios from 'axios';

function WorriedBoxContainer({ category = 1 }) {
    
    const [userId, setUserId] = useState(''); // userId 상태값 추가

    const getUserIdFromSession = () => {
        const userIdFromSession = sessionStorage.getItem('userId'); // 세션 저장소에서 userId 가져오기
        setUserId(userIdFromSession); // userId 상태 업데이트
    };

    useEffect(() => {
        getUserIdFromSession(); // 컴포넌트가 마운트될 때 userId 가져오기
    }, []);

    const apiUrl = `/api/my-page?id=${userId}&category=${category}`; // apiUrl에 userId 적용

    const [data, setData] = useState('');

    // ... 이하 동일

    useEffect(() => {
        // userId가 변경될 때마다 업데이트된 URL로 GET 요청 보냄
        axios.get(apiUrl)
            .then(response => setData(response.data))
            .catch(error => console.log(error))
    }, [apiUrl, userId]); // apiUrl과 userId를 의존성으로 지정


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
                            index % 2 === 0 ? ( // 짝수번째 요소
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
                            index % 2 === 1 ? ( // 홀수번째 요소
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