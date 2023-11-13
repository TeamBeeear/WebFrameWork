import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Nav from "../components/Nav";
import WorryTitle from "../components/GominPost/WorryTitle";
import WorryTitleInput from "../components/GominPost/WorryTitleInput";
import WorryOption from "../components/GominPost/WorryOption";
import WorryDescription from "../components/GominPost/WorryDescription";
import WorryCategory from "../components/GominPost/WorryCategory";
import PostSubmitButton from "../components/GominPost/PostSubmitButton";
import Footer from "../components/Footer";
import axios from "axios";

const options = [
    { id: 1, value: "relationship", label: "대인관계" },
    { id: 2, value: "love", label: "연애" },
    { id: 3, value: "education", label: "교육" },
    { id: 4, value: "life", label: "생활" },
    { id: 5, value: "health", label: "건강" },
    { id: 6, value: "pet", label: "반려동물" },
    { id: 7, value: "travel", label: "여행" },
    { id: 8, value: "shopping", label: "쇼핑" },
    { id: 9, value: "other", label: "기타" },
];

const Post = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const userId = sessionStorage.getItem("userId");
    const [firstSelectionContent, setFirstSelectionContent] = useState("");
    const [secondSelectionContent, setSecondSelectionContent] = useState("");
    const [optionImage1, setOptionImage1] = useState(null);
    const [optionImage2, setOptionImage2] = useState(null);
    const navigate = useNavigate();
    const [selectedOption, setSelectedOption] = React.useState(null); // 카테고리 상태값
    const boardId = selectedOption;
    
    const handleImageUpload1 = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageURL = URL.createObjectURL(file);
            setOptionImage1(imageURL);
        }
    };
    
    const handleImageUpload2 = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageURL2 = URL.createObjectURL(file);
            setOptionImage2(imageURL2);
        }
    };

    const handlePostClick = async (e) => {
        e.preventDefault();

        console.log("보낼 데이터:", {
            title: title,
            content: content,
            userId: userId,
            boardId: boardId,
            firstSelectionContent: firstSelectionContent,
            secondSelectionContent: secondSelectionContent
        });

        try {
            const response = await axios.post("/api/post", {
                // POST 요청 보낼 데이터
                title: title,
                content: content,
                userId: userId,
                boardId: boardId,
                firstSelectionContent: firstSelectionContent,
                secondSelectionContent: secondSelectionContent
            });
            console.log("응답 데이터:", response.data);
            navigate("/post-complete");
        } catch (error) {
            console.error("게시글 작성 실패:", error); // 오류 처리
        }
        navigate("/post-complete");
    };

    const handleOptionChange = (value) => {
      setSelectedOption(value.id);
    }

    const outerImageStyle = {
        width: "80px", 
        height: "80px",
        position: "relative",
        marginBottom: "17px",
        marginRight: "1rem",
        borderRadius: "6px",
        marginTop: "2px"
      };

    return (
        <div>
            <Header />
            <Nav />
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
                <WorryTitle titleText={"고민 제목"} />
                <WorryTitleInput setTitle={setTitle} />
                <WorryTitle titleText={"선택지"} />
                <WorryOption
                    id={1}
                    outerImageStyle={outerImageStyle}
                    handleImageUpload={handleImageUpload1}
                    optionImage={optionImage1}
                    setSelectionContent={setFirstSelectionContent}
                    placeholder="선택지 1"
                />
                <WorryOption
                    id={2}
                    outerImageStyle={outerImageStyle}
                    handleImageUpload={handleImageUpload2}
                    optionImage={optionImage2}
                    setSelectionContent={setSecondSelectionContent}
                    placeholder="선택지 2"
                />
                <WorryTitle titleText={"설명"} />
                <WorryDescription setContent={setContent} />
                <WorryTitle titleText={"카테고리"} />
                <WorryCategory options={options} handleOptionChange={handleOptionChange} selectedOption={selectedOption} />
            </div>
            <PostSubmitButton onClick={handlePostClick} buttonText="고민 올리기" />
            <Footer />
        </div>
    );
}

export default Post;