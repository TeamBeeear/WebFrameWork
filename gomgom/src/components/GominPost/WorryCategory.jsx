import React from "react";
import Select from "react-select";
import WorryCustomOptions from "../GominPost/WorryCustomOptions";

const WorryCategory = ({ options, handleOptionChange, selectedOption }) => {
    return (
        <label htmlFor="customSelect">
          <Select
              options={options}
              components={{ Option: WorryCustomOptions }}
              isSearchable={false}
              inputId="customSelect"
              onChange={(selected) => handleOptionChange(selected)}
              className="categories"
              placeholder="기타"
              defaultValue={options.find((option) => option.id === selectedOption?.id)}
              value={selectedOption}
          />
        </label>
    );
};

export default WorryCategory;