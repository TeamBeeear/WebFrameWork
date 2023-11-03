import React,{useEffect, useState}  from 'react';
import './App.css';
import Main from './components/main/main';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Post from './pages/Post';
import PostComplete from './pages/PostComplete';
import GominPost from './pages/GominPost';
import GomGomBoard from './pages/GomGomBoard';
import GomGomBoardDetail from './pages/GomGomBoardDetail';

function App(){
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/post" element={<Post />} />
            <Route path="/post-complete" element={<PostComplete />} />
            <Route path="/gomin-post" element={<GominPost />} />
            <Route path="/board" element={<GomGomBoard />} />
            <Route path="/board/:boardId" element={<GomGomBoard />} />
            <Route path="/gomgom-board/detail" element={<GomGomBoardDetail />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
