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
        Axios.get(`/api/heart/${userId}/${postId}`)
            .then(response => {
                console.log(response.data);
                setHasLiked(response.data);
            })
            .catch(error => {
                console.error("좋아요 상태 확인 중 오류:", error);
            });
    }, [userId, postId]); 
    const handleHeartClick = () => {
        const url = '/api/heart';
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
                alt="heart Img"
                style={{ marginLeft: "0.63rem", marginTop: "4%", cursor: "pointer" }}
                src={hasLiked? HeartAfter : HeartBefore}
                onClick={handleHeartClick}
            />
            </div>
        </div>
    );
}

export default UserGominTitle;
