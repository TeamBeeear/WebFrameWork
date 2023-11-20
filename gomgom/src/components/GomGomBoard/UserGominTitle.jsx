import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import HeartBefore from "../../img/heartBefore.png";
import HeartAfter from "../../img/heartAfter.png";

function UserGominTitle({ gominTitle }) {
    const [hasLiked, setHasLiked] = useState(false);
    const userId = sessionStorage.getItem("userId");
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('postId');

    useEffect(() => {
        // 사용자가 게시물에 좋아요를 눌렀는지 확인하기 위해 GET 요청 수행
        Axios.get(`/api/heart/${userId}/${postId}`)
            .then(response => {
                console.log(response.data);
                // 응답을 기반으로 heartClicked 상태 업데이트
                setHasLiked(response.data);
            })
            .catch(error => {
                console.error("좋아요 상태 확인 중 오류:", error);
            });
    }, [userId, postId]); 

    const handleHeartClick = () => {
        const url = '/api/heart';

        // 반환된 좋아요 상태에 따라 다른 api 요청 수행
        const axiosRequest = hasLiked ? 
        Axios.delete(url, { data: { userId, postId } }) : Axios.post(url, { userId, postId });

        axiosRequest
            .then(response => {
                console.log(hasLiked ? "좋아요 취소:" : "좋아요:", response);
                setHasLiked(!hasLiked);
            })
            .catch(error => {
                console.error(hasLiked ? "좋아요 취소 중 오류:" : "좋아요 중 오류:", error);
            });
        setHasLiked(!hasLiked)
    };

    
    const subBox = {
        textAlign: "start",
        marginLeft: "3.7%",
        marginTop: "5%",
        width: "fit-content",
        height: "1.9375rem",
        flexShrink: "0",
        background: "var(--e-9-e-5-da, #E9E5DA)"
    };
    const text = {
        margin: "0",
        color: "#67594C",
        fontFamily: "Pretendard",
        fontSize: "1.25rem",
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: "100%",
        padding: "0.38rem",
        textAlign: "center"
    };
    const hearttext = {
        color: "#67594C",
        fontFamily: "Pretendard",
        fontSize: "0.9375rem",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "160%",
        margin: "0",
        // marginLeft: "60%",
        marginTop: "5%"
    };

    return (
        <div style={{ display: "flex", justifyContent:"space-between"}}>
            <div style={subBox}>
                <p style={text}>{gominTitle}</p>
            </div>

            <div style={{marginRight:"5%", display:"-webkit-inline-box", marginTop:"5%"}}>
            <p style={hearttext}>공감돼요!</p>
            <img
                style={{ marginLeft: "0.63rem", marginTop: "4%", cursor: "pointer" }}
                src={hasLiked? HeartAfter : HeartBefore}
                onClick={handleHeartClick}
            />
            </div>

        </div>
    );
}

export default UserGominTitle;
