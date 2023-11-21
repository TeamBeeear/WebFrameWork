import React, { useEffect }  from 'react';
import './App.css';
import Main from './components/main/main';
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Post from './pages/Post';
import PostComplete from './pages/PostComplete';
import GominPost from './pages/GominPost';
import GomGomBoard from './pages/GomGomBoard';
import GomGomBoardDetail from './pages/GomGomBoardDetail';
import GomGomAI from './pages/GomGomAI';
import MyPage from './pages/MyPage';
import UserGominTitle from './components/GomGomBoard/UserGominTitle'; 
import NotFound from './pages/NotFound';

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const isLoggedIn = !!sessionStorage.getItem('userId'); 
    if (!isLoggedIn && location.pathname !== '/login') {
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
            <Route path="/gomgom-ai" element={<ProtectedRoute><GomGomAI /></ProtectedRoute>} />
            <Route path="/my-page" element={<ProtectedRoute><MyPage /></ProtectedRoute>} />
            <Route path="/heart" element={<ProtectedRoute><UserGominTitle /></ProtectedRoute>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
