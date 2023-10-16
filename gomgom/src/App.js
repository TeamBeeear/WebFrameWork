import React,{useEffect, useState}  from 'react';
import './App.css';
import Main from './components/main/main';
import axios from 'axios'

function App(){
  const [hello, setHello] = useState('')

  useEffect(() => {
    axios.get('/test/hello')
        .then(response => setHello(response.data))
        .catch(error => console.log(error))
  }, []);
  return (
    <div className="App">
      <Main/>
      <div>
      백엔드에서 가져온 데이터입니다 : {hello}
      </div>
    </div>
  );
}

export default App;
