import React, { useState, useEffect } from 'react';
import Header from "../components/Header";
import Nav from "../components/Nav";
import WorriedBoxContainer from "../components/MyPage/WorriedBoxContainer"
import CategoryBtn from "../components/MyPage/CategoryBtn"
import Footer from '../components/Footer';

function MyPage() {
    const [selectedCategory, setSelectedCategory] = useState(1);
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        // 세션 저장소에서 userId 값을 불러오는 비동기 함수
        const fetchUserIdFromSession = async () => {
            try {
                // 세션 저장소에서 userId를 가져오는 비동기 처리 (예시)
                const storedUserId = await getSessionStorageValue('userId');

                // 가져온 userId를 state에 설정
                setUserId(storedUserId);
            } catch (error) {
                console.error('Error fetching userId from session storage:', error);
            }
        };

        // 함수 호출
        fetchUserIdFromSession();
    }, []); // 최초 렌더링 시 한 번만 호출

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div>
            <Header />
            <Nav />
            <CategoryBtn onButtonClick={handleCategoryChange} />
            {/* userId 값이 존재하면 WorriedBoxContainer에 전달 */}
            {userId && <WorriedBoxContainer id={userId} category={selectedCategory} />}
            <Footer />
        </div>
    );
}

// 예시로 사용할 세션 저장소에서 값 가져오는 함수
const getSessionStorageValue = async (key) => {
    return new Promise((resolve, reject) => {
        try {
            const value = sessionStorage.getItem(key);
            resolve(value);
        } catch (error) {
            reject(error);
        }
    });
};

export default MyPage;
