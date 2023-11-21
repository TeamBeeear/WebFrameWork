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
    { value: "relationship", label: "대인관계" },
    { value: "love", label: "연애" },
    { value: "education", label: "교육" },
    { value: "life", label: "생활" },
    { value: "health", label: "건강" },
    { value: "pet", label: "반려동물" },
    { value: "travel", label: "여행" },
    { value: "shopping", label: "쇼핑" },
    { value: "other", label: "기타" },
];
const Post = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const userId = sessionStorage.getItem("userId");
    const [firstSelectionContent, setFirstSelectionContent] = useState("");
    const [secondSelectionContent, setSecondSelectionContent] = useState("");
    const navigate = useNavigate();
    const [selectedOption, setSelectedOption] = useState(null); 
    const boardId = selectedOption ? selectedOption.id : null;
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
            console.error("게시글 작성 실패:", error); 
        }
    };
    const handleOptionChange = (selectedOption) => {
        setSelectedOption({ ...selectedOption,
                            id: options.findIndex(option => option.value === selectedOption.value) + 1 });
    };

    return (
        <div style={{ display: "flex", flexDirection: "column"}}>
            <Header />
            <Nav />
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
            <WorryTitle titleText={"고민 제목"} />
            <WorryTitleInput setTitle={setTitle} />
            <WorryTitle titleText={"선택지"} />
            <WorryOption
                id={1}
                setSelectionContent={setFirstSelectionContent}
                placeholder="선택지 1"
            />
            <WorryOption
                id={2}
                setSelectionContent={setSecondSelectionContent}
                placeholder="선택지 2"
            />
            <WorryTitle titleText={"설명"} />
            <WorryDescription setContent={setContent} />
            <WorryTitle titleText={"카테고리"} />
            <WorryCategory 
                options={options} 
                handleOptionChange={handleOptionChange}
                selectedOption={selectedOption} />
            </div>
            <PostSubmitButton onClick={handlePostClick} buttonText="고민 올리기" />
            <Footer />
        </div>
    );
}

export default Post;