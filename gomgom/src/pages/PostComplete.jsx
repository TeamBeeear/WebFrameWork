import React from 'react';
import Header from "../components/Header";
import Nav from "../components/Nav";
import GomGomImage from '../components/PostComplete/GomGomImage';
import PostCompleteText from '../components/PostComplete/PostCompleteText';
import PostCompleteButton from '../components/PostComplete/PostCompleteButton';
import Footer from '../components/Footer';

const PostComplete = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
        <Header />
        <Nav />
        <GomGomImage />
        <PostCompleteText />
        <PostCompleteButton />
        <Footer />
        </div>
    );
};

export default PostComplete;