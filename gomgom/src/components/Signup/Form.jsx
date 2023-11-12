// CredentialInput.js
import React from 'react';

const Form = ({ handleIdChange, handlePasswordChange, id, password }) => {
    
    const SignupCategoryStyle = {
        color: '#67594C',
        fontSize: 20,
        fontFamily: 'Pretendard',
        fontWeight: 700,
        wordWrap: 'break-word',
        marginRight: '32rem',
        marginBottom: '1.5rem',
    };

  return (
    <>
      <p style={SignupCategoryStyle}>아이디</p>
      <input 
        type="input" 
        className="id-input" 
        placeholder="아이디를 입력하세요." 
        onChange={handleIdChange} 
        value={id} />
      <p style={SignupCategoryStyle}>비밀번호</p>
      <input 
        type="password" 
        className="passwd-input"
        placeholder="비밀번호를 입력하세요." 
        onChange={handlePasswordChange}
        value={password} />
    </>
  );
};

export default Form;
