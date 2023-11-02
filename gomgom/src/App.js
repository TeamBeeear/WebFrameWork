import React,{useEffect, useState}  from 'react';
import './App.css';
import Main from './components/main/main';
import axios from 'axios';
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Post from './pages/Post';
import PostComplete from './pages/PostComplete';
import GominPost from './pages/GominPost';
import GomGomBoard from './pages/GomGomBoard';
import GomGomBoardDetail from './pages/GomGomBoardDetail';

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const location = useLocation();

  // 로그인 상태 확인
  useEffect(() => {
    const isLoggedIn = !!sessionStorage.getItem('userId'); // 세션 스토리지에서 userId 가져오기
    if (!isLoggedIn && location.pathname !== '/login') {
      // 로그인되지 않은 경우, 로그인 페이지로 리디렉션
      navigate('/login');
    }
  }, [location, navigate]);

  return children;
}

function App(){
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/post" element={<ProtectedRoute><Post /></ProtectedRoute>} />
            <Route path="/post-complete" element={<ProtectedRoute><PostComplete /></ProtectedRoute>} />
            <Route path="/gomin-post" element={<ProtectedRoute><GominPost /></ProtectedRoute>} />
            <Route path="/board" element={<ProtectedRoute><GomGomBoard /></ProtectedRoute>} />
            <Route path="/gomgom-board/detail" element={<ProtectedRoute><GomGomBoardDetail /></ProtectedRoute>} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
