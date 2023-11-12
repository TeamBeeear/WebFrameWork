import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import HeartBefore from "../../img/heartBefore.png";
import HeartAfter from "../../img/heartAfter.png";

function UserGominTitle({ gominTitle }) {
    const [heartClicked, setHeartClicked] = useState(false);
    const userId = 'test1';  // 더미 데이터로 userId 설정
    const postId = 1;        // 더미 데이터로 postId 설정

    useEffect(() => {
        // 사용자가 게시물에 좋아요를 눌렀는지 확인하기 위해 GET 요청 수행
        Axios.get(`/api/heart/${userId}/${postId}`)
            .then(response => {
                // 응답을 기반으로 heartClicked 상태 업데이트
                setHeartClicked(response.data.hasLiked);
            })
            .catch(error => {
                console.error("좋아요 상태 확인 중 오류:", error);
            });
    }, []); // 의존성 배열이 비어 있으므로 컴포넌트가 마운트될 때만 이 효과가 실행됨
    const handleHeartClick = () => {
        const url = '/api/heart';

        if (heartClicked) {
            // 이미 좋아요 상태인 경우, DELETE 요청 수행
            Axios.delete(url, { data: { userId, postId } })
                .then(response => {
                    console.log("좋아요 해제:", response);
                })
                .catch(error => {
                    console.error("좋아요 해제 중 오류:", error);
                });
        } else {
            // 좋아요 상태가 아닌 경우, POST 요청 수행
            Axios.post(url, { userId, postId })
                .then(response => {
                    console.log("좋아요:", response);
                })
                .catch(error => {
                    console.error("좋아요 중 오류:", error);
                });
        }
        // 클릭 이벤트 처리 및 좋아요 상태 업데이트
        setHeartClicked(!heartClicked);
    };
    const subBox = {
        textAlign: "start",
        marginLeft: "3.7%",
        marginTop: "5%",
        width: "35%",
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
        marginLeft: "43%",
        marginTop: "5%"
    };

    return (
        <div style={{ display: "flex" }}>
            <div style={subBox}>
                <p style={text}>{gominTitle}</p>
            </div>
            <p style={hearttext}>공감돼요!</p>
            <img
                style={{ marginLeft: "0.63rem", marginTop: "4%", cursor: "pointer" }}
                src={heartClicked ? HeartAfter : HeartBefore}
                onClick={handleHeartClick}
            />
        </div>
    );
}

export default UserGominTitle;
