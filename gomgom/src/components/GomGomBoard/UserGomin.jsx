import React, {useState} from 'react';
import userImg from "../../img//mediumUserImg.png"; 
import TwoChoice from "../GomGomBoard/twoChoice";
import UserGominText from "../GomGomBoard/UserGominText"; 
import UserGominTitle from "../GomGomBoard/UserGominTitle";

function UserGomin({
    title,
    content,
    firstSelectionId,
    firstSelectionContent,
    firstSelectionVotePercentage,
    secondSelectionId,
    secondSelectionContent,
    secondSelectionVotePercentage,
}){
    const [selectedOption, setSelectedOption] = useState(null);
    const [updatedFirstVotePercentage, setUpdatedFirstVotePercentage] = useState(firstSelectionVotePercentage);
    const [updatedSecondVotePercentage, setUpdatedSecondVotePercentage] = useState(secondSelectionVotePercentage);
    const [isGetRequest, setIsGetRequest] = useState(true); 

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    }

    const gominContent = { 
        width: "46.125rem",
        height: "auto",
        flexShrink: "0",
        borderRadius: "1.5rem",
        background: "var(--ffffff, #FFF)",
        boxShadow: "0px 2px 4px 0px rgba(210, 205, 189, 0.50)", 
        marginLeft:"2.5rem"
    }

    // userId는 세션 저장소의 userId 값을 가져오는 함수
    function getUserIdFromSessionStorage() {
        const userId = sessionStorage.getItem('userId'); // 세션 저장소에서 userId 가져오기
        return userId;
    }

    // 현재 URL에서 postId 추출하는 함수
    function getPostIdFromURL() {
        const searchParams = new URLSearchParams(window.location.search);
        const postId = searchParams.get('postId'); // URL에서 postId 가져오기
        return postId;
    }

    async function sendVoteToServer(userId, postId, selectionId) {
        const url = `http://localhost:8080/api/vote/${userId}/${postId}/${selectionId}`;
    
        try {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
            'Content-Type': 'application/json',
            },
        });
    
        if (response.ok) {
            const data = await response.json(); // 서버 응답 데이터 파싱
            return data; // 응답 데이터 반환
        } else {
            console.error('투표 저장에 실패했습니다.');
        }
        } catch (error) {
        console.error('네트워크 오류:', error);
        }
    }

    const handleVoteClick = async (selectionId) => {
        const userId = getUserIdFromSessionStorage();
        const postId = getPostIdFromURL();
    
        try {
        const response = await sendVoteToServer(userId, postId, selectionId);
        if (response) {
            setUpdatedFirstVotePercentage(response.updatedFirstVotePercentage);
            setUpdatedSecondVotePercentage(response.updatedSecondVotePercentage);
        }
        setIsGetRequest(false);
        } catch (error) {
        console.error('투표 저장에 실패했습니다.', error);
        }
    };

    return (
        <div style={{paddingTop:"4.25rem", display:"flex", justifyContent:"center", marginBottom:"6.56rem"}}>
            <div>
                <img src={userImg}/>
            </div>
            <div style={gominContent}>
                <UserGominTitle gominTitle = {title}/>
                <UserGominText gominContents = {content}/>
                <div style={{display:"flex", gap:"1.5rem", justifyContent:"center"}}>
                    <TwoChoice 
                        gominId={firstSelectionId}
                        gominText={firstSelectionContent}
                        gominPercent={isGetRequest ? firstSelectionVotePercentage : updatedFirstVotePercentage}
                        onClick={() => handleVoteClick(firstSelectionId)}
                        selected={selectedOption === firstSelectionContent}
                    />
                    <TwoChoice 
                        gominId={secondSelectionId}
                        gominText={secondSelectionContent}
                        gominPercent={isGetRequest ? secondSelectionVotePercentage : updatedSecondVotePercentage}
                        onClick={() => handleVoteClick(secondSelectionId)}
                        selected={selectedOption === secondSelectionContent}
                    />
                </div>
            </div>
        </div>
    );
}

export default UserGomin;