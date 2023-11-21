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
        const fetchUserIdFromSession = async () => {
            try {
                const storedUserId = await getSessionStorageValue('userId');
                setUserId(storedUserId);
            } catch (error) {
                console.error('Error fetching userId from session storage:', error);
            }
        };
        fetchUserIdFromSession();
    }, []);
    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div>
            <Header />
            <Nav />
            <CategoryBtn onButtonClick={handleCategoryChange} />
            {userId && <WorriedBoxContainer id={userId} category={selectedCategory} />}
            <Footer />
        </div>
    );
}

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
