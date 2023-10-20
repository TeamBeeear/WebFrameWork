import React,{useEffect, useState}  from 'react';
import './App.css';
import Main from './components/main/main';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp';
import Login from './pages/Login';

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
          </Routes>
      </BrowserRouter>
      <div>
      백엔드에서 가져온 데이터입니다 : {hello}
      </div>
    </div>
  );
}

export default App;
