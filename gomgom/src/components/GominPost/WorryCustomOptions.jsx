// 카테고리 커스텀 컴포넌트
import React from "react";

const WorryCustomOptions = (props) => {
    const { innerProps, label, isSelected, isDisabled, selectProps, value } = props;

    const handleInputChange = () => {
        console.log({ label, value });
        console.log("isSelected:", isSelected);
        selectProps.onChange({ label, value });
    };

    // 선택된 항목인 경우, checked 클래스 추가
    const isChecked = isSelected ? "checked" : "";

    // 선택된 항목이 비활성화된 경우, disabled 클래스 추가
    const isDisabledClass = isDisabled ? "disabled" : "";

    return (
        <label htmlFor={`${selectProps.inputId}_${value}`} {...innerProps} className={`custom-option ${isChecked} ${isDisabledClass}`} onClick={handleInputChange}>
            <input
                id={`${selectProps.inputId}_${value}`}
                type="radio"
                value={value}
                name={selectProps.inputId}
                checked={isSelected}
                onChange={() => selectProps.onChange({ label, value })}
                disabled={isDisabled}
            />
            {label}
        </label>
    );
};

export default WorryCustomOptions;