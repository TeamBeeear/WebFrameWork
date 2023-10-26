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

function App(){
  const [hello, setHello] = useState('')

  useEffect(() => {
    axios.get('/test/hello')
        .then(response => setHello(response.data))
        .catch(error => console.log(error))
  }, []);
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
            <Route path="/gomgom-board" element={<GomGomBoard />} />
          </Routes>
      </BrowserRouter>
      <div>
      {/* 백엔드에서 가져온 데이터입니다 : {hello} */}
      {/* 위에 일단 각주처리 */}
      </div>
    </div>
  );
}

export default App;
