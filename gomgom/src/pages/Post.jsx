import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from '../components/Footer';
import "../css/Post.css";
import WorryTitleInput from '../components/GominPost/WorryTitleInput';
import WorryOption from '../components/GominPost/WorryOption';
import WorryDescription from '../components/GominPost/WorryDescription';
import WorryCategory from '../components/GominPost/WorryCategory';
import SubmitButton from '../components/GominPost/SubmitButton';
import axios from 'axios';

// // 카테고리 커스텀 컴포넌트
// const CustomOption = (props) => {
//     const { innerProps, label, isSelected, isDisabled, selectProps, value } = props;
  
//     // 선택된 항목인 경우, checked 클래스 추가
//     const isChecked = isSelected ? 'checked' : '';
  
//     // 선택된 항목이 비활성화된 경우, disabled 클래스 추가
//     const isDisabledClass = isDisabled ? 'disabled' : '';
  
//     return (
//       <div {...innerProps} className={`custom-option ${isChecked} ${isDisabledClass}`}>
//         <input type="radio" value={label} name={selectProps.inputId} checked={isSelected}
//           onChange={() => selectProps.onChange({ label, value })} disabled={isDisabled}/>{label}
//       </div>
//     );
// };

const options = [
    { id: 1, value: 'relationship', label: '대인관계' },
    { id: 2, value: 'love', label: '연애' },
    { id: 3, value: 'education', label: '교육' },
    { id: 4, value: 'life', label: '생활' },
    { id: 5, value: 'health', label: '건강' },
    { id: 6, value: 'pet', label: '반려동물' },
    { id: 7, value: 'travel', label: '여행' },
    { id: 8, value: 'shopping', label: '쇼핑' },
    { id: 9, value: 'other', label: '기타' },
];

const Post = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const userId = sessionStorage.getItem('userId');
    const [firstSelectionContent, setFirstSelectionContent] = useState('');
    const [secondSelectionContent, setSecondSelectionContent] = useState('');
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
            const imageURL = URL.createObjectURL(file);
            setOptionImage2(imageURL);
        }
    };

    const handlePostClick = async (e) => {
        e.preventDefault();

        console.log('보낼 데이터:', {
            title: title,
            content: content,
            userId: userId,
            boardId: boardId,
            firstSelectionContent: firstSelectionContent,
            secondSelectionContent: secondSelectionContent
        });

        try {
            // POST 요청 보내기
            const response = await axios.post('/api/post', {
                title: title,
                content: content,
                userId: userId,
                boardId: boardId,
                firstSelectionContent: firstSelectionContent,
                secondSelectionContent: secondSelectionContent
            });

            // 응답 확인
            console.log('응답 데이터:', response.data);

            // 페이지 이동
            navigate('/post-complete');
        } catch (error) {
            // 오류 처리
            console.error('게시글 작성 실패:', error);
        }


        // 페이지 이동
        navigate('/post-complete');
    };

    const handleOptionChange = (value) => {
      setSelectedOption(value.id);
    }

    const titleStyle = {
        color: "rgba(103.06, 88.99, 76.01, 0.50)",
        fontSize: "15px",
        fontFamily: "Pretendard",
        fontWeight: "700",
        lineHeight: "15px",
        wordWrap: "break-word"
    }

    const outerImageStyle = {
        width: '80px', 
        height: '80px',
        position: 'relative',
        marginBottom: "17px",
        marginRight: "10px",
        borderRadius: "6px",
        marginTop: "2px"
      };

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <Header />
            <Nav />
            <WorryTitleInput setTitle={setTitle} />
            <WorryOption
            outerImageStyle={outerImageStyle}
            handleImageUpload={handleImageUpload1}
            optionImage={optionImage1}
            setSelectionContent={setFirstSelectionContent}
            placeholder="선택지 1"
            />
            <WorryOption
            outerImageStyle={outerImageStyle}
            handleImageUpload={handleImageUpload2}
            optionImage={optionImage2}
            setSelectionContent={setSecondSelectionContent}
            placeholder="선택지 2"
            />
            <WorryDescription setContent={setContent} />
            <WorryCategory options={options} handleOptionChange={handleOptionChange} selectedOption={selectedOption} />
            <SubmitButton onClick={handlePostClick} buttonText="고민 올리기" />
            <Footer />
        </div>
    );
}

export default Post;