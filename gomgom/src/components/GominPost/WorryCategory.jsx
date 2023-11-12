import React from 'react';
import Select from 'react-select';
import CustomOption from '../GominPost/WorryCustomOptions'; // Make sure to import your CustomOption component

const WorryCategory = ({ options, handleOptionChange, selectedOption }) => {

    const titleStyle = {
        color: "rgba(103.06, 88.99, 76.01, 0.50)",
        fontSize: "15px",
        fontFamily: "Pretendard",
        fontWeight: "700",
        lineHeight: "15px",
        wordWrap: "break-word"
    }

  return (
    <>
      <p className="worry-category" style={titleStyle}>
        카테고리
      </p>
      <Select
        options={options}
        components={{ Option: CustomOption }}
        isSearchable={false}
        inputId="customSelect"
        onChange={(selected) => handleOptionChange(selected)}
        className="categories"
        placeholder="기타"
        defaultValue={options.find((option) => option.value === '기타')}
        value={selectedOption ? options.find((option) => option.id === selectedOption.id) : null}
      />
    </>
  );
};

export default WorryCategory;