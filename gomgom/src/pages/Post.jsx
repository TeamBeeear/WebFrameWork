import React, {useState} from 'react';
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from '../components/Footer';
import "../css/Post.css";
import WorryOuterImg from "../img/worryDefaultImg1.png";
import WorryInnerImg from "../img/worryDefaultImg2.png";
import Select from 'react-select';

// 카테고리 커스텀 컴포넌트
const CustomOption = (props) => {
    const { innerProps, label, isSelected, isDisabled, selectProps, value } = props;
  
    // 선택된 항목인 경우, checked 클래스 추가
    const isChecked = isSelected ? 'checked' : '';
  
    // 선택된 항목이 비활성화된 경우, disabled 클래스 추가
    const isDisabledClass = isDisabled ? 'disabled' : '';
  
    return (
      <div {...innerProps} className={`custom-option ${isChecked} ${isDisabledClass}`}>
        <input type="radio" value={label} name={selectProps.inputId} checked={isSelected}
          onChange={() => selectProps.onChange({ label, value })} disabled={isDisabled}/>{label}
      </div>
    );
};

const options = [
    { value: 'relationship', label: '대인관계' },
    { value: 'love', label: '연애' },
    { value: 'education', label: '교육' },
    { value: 'life', label: '생활' },
    { value: 'health', label: '건강' },
    { value: 'pet', label: '반려동물' },
    { value: 'other', label: '기타' }
];


const Post = () => {
    const [optionImage1, setOptionImage1] = useState(null);
    const [optionImage2, setOptionImage2] = useState(null);
    
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

    const handlePostClick = (e) => {
        e.preventDefault();
        // 페이지 이동 처리
        window.location.href = '/post-complete';
    };

    const [selectedOption, setSelectedOption] = React.useState(null); // 카테고리 상태값

    const handleOptionChange = (value) => {
      setSelectedOption(value);
    }

    const titleStyle = {
        color: "rgba(103.06, 88.99, 76.01, 0.50)",
        fontSize: "15px",
        fontFamily: "Pretendard",
        fontWeight: "700",
        lineHeight: "15px",
        wordWrap: "break-word"
    }

    const worryOptionStyle = {
        width: "654px",
        height: "74px",
        background: "white",
        border: "2px solid #E9E5DA",
        borderRadius: "8px",
        display: "block",
        marginBottom: "16px",
        paddingLeft: "20px",
        marginTop: "5px",

        color: '#67594C',
        fontSize: "20px",
        fontFamily: 'Pretendard',
        fontWeight: "700",
        lineHeight: "32px",
        wordWrap: "break-word",
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
    
      const innerImageStyle = {
        width: '36px', 
        height: '36px',
        position: 'absolute',
        top: '50%', 
        left: '50%',
        transform: 'translate(-50%, -50%)', 
      };

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <Header />
            <Nav />
            <div className="separator-line"></div>
            <form className="post-form">
                <p className="worry-title" style={titleStyle}>고민 제목<br/></p>
                <input type="input" className="worry-title-input" placeholder="제목을 입력하세요." />
                <p className="option-content" style={titleStyle}>선택지 내용</p>
                <div className="option-group">
                    <div className="option-img" style={outerImageStyle} onClick={() => document.getElementById('fileInput1').click()}>
                        {optionImage1 ? (
                            <img src={optionImage1} style={outerImageStyle} alt="Selected Image" />
                        ) : (
                            <>
                                <img src={WorryOuterImg} alt="Outer Image" />
                                <img src={WorryInnerImg} alt="Inner Image" style={innerImageStyle} />
                            </>
                        )}
                        <input type="file" id="fileInput1" style={{ display: "none" }} accept="image/*" onChange={handleImageUpload1} />
                    </div>
                    <input type="input" className="worry-option-1" style={worryOptionStyle} placeholder="선택지 1" />
                </div>
                <div className="option-group">
                    <div className="defaultImg" style={outerImageStyle} onClick={() => document.getElementById('fileInput2').click()}>
                        {optionImage2 ? (
                            <img src={optionImage2} style={outerImageStyle} alt="Selected Image" />
                        ) : (
                            <>
                                <img src={WorryOuterImg} alt="Outer Image" />
                                <img src={WorryInnerImg} alt="Inner Image" style={innerImageStyle} />
                            </>
                        )}
                        <input type="file" id="fileInput2" style={{ display: "none" }} accept="image/*" onChange={handleImageUpload2} />
                    </div>
                    <input type="input" className="worry-option-2" style={worryOptionStyle} placeholder="선택지 2" />
                </div>
                <p className="worry-description" style={titleStyle}>설명</p>
                <textarea className="description" placeholder="100자 내외의 짧은 설명을 적어주세요." />
                <p className="worry-category" style={titleStyle}>카테고리</p>
                <Select options={options} components={{ Option: CustomOption }} isSearchable={false} // 검색 기능 미사용
                    inputId="customSelect" // 선택된 항목을 그룹화하기 위한 ID
                    onChange={(selected) => handleOptionChange(selected.value)} className="categories"
                    placeholder="기타" 
                    defaultValue={options.find((option) => option.value === '기타')}
                    value={selectedOption ? options.find((option) => option.value === selectedOption) : null}
                />
                <button type="submit" className="post-worry" onClick={handlePostClick}>고민 올리기</button>
            </form>
            <Footer />
        </div>
    );
}

export default Post;