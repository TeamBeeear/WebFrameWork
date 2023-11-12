import React from "react";

const SignupLink = ({ handleSignupClick }) => {
  const toSignupStyle = {
    color: "#606067",
    fontSize: "24px",
    fontFamily: "Pretendard",
    fontWeight: 700,
    lineHeight: "24px",
    wordWrap: "break-word",
    marginBottom: "15rem",
    cursor: "pointer"
  };

  return <p onClick={handleSignupClick} style={toSignupStyle}>회원가입</p>;
};

export default SignupLink;