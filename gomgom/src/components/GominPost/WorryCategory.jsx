import React from "react";
import Select from "react-select";
import CustomOption from "../GominPost/WorryCustomOptions";

const WorryCategory = ({ options, handleOptionChange, selectedOption }) => {
    return (
        <Select
          options={options}
          components={{ Option: CustomOption }}
          isSearchable={false}
          inputId="customSelect"
          onChange={(selected) => handleOptionChange(selected)}
          className="categories"
          placeholder="기타"
          defaultValue={options.find((option) => option.value === "기타")}
          value={selectedOption ? options.find((option) => option.id === selectedOption.id) : null}
        />
    );
};

export default WorryCategory;