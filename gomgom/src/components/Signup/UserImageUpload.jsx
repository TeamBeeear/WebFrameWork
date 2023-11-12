// ImageUpload.js
import React from "react";

const UserImageUpload = ({ selectedImage, handleImageUpload }) => {
  const userImageStyle = {
    width: "150px",
    height: "150px",
    objectFit: "cover",
    borderRadius: "50px",
    display: "block",
    margin: "0 auto",
  };

  const uploadBtnStyle = {
    width: "120px",
    height: "44px",
    background: "#E9E5DA",
    border: "1px solid #D2CDBC",
    borderRadius: "32px",
    display: "block",
    margin: "0 auto",
    marginTop: "2rem",
    color: "rgba(103, 88, 76, 0.50)",
    fontSize: "15px",
    fontFamily: "Pretendard, sans-serif",
    fontWeight: 700,
    lineHeight: "44px",
    wordWrap: "break-word",
  };

  return (
    <>
      <img style={userImageStyle} src={selectedImage} alt="사용자 이미지" />
      <label htmlFor="fileInput" style={uploadBtnStyle}>
        <input 
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            accept="image/*"
            onChange={handleImageUpload} />
        사진 등록
      </label>
    </>
  );
};

export default UserImageUpload;
