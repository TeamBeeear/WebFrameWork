import React from 'react';

const LoginForm = ({ handleIdChange, handlePasswordChange, handleLoginClick, id, password, error }) => {
  const errorStyle = {
    color: '#67594C',
    fontSize: '18px',
    fontFamily: 'Pretendard, sans-serif',
    fontWeight: 500,
    lineHeight: '28.80px',
    marginRight: '20rem', 
    wordWrap: 'break-word'
  };

  return (
    <form className="login-form">
      <input type="input" className="id-input" placeholder="아이디를 입력하세요." onChange={handleIdChange} />
      <input type="password" className="passwd-input" placeholder="비밀번호를 입력하세요." onChange={handlePasswordChange} />
      {error && <p style={errorStyle}>{error}</p>}
      <button type="submit" className="submit" style={{
        marginBottom: "2rem",
        background: id && password ? '#FFAB5D' : '#E9E5DA'}}
        disabled={!id || !password} // 입력 필드가 비어 있을 때 버튼 비활성화
        onClick={handleLoginClick}
      >로그인</button>
    </form>
  );
};

export default LoginForm;
