import React from "react";

// 카테고리 커스텀 컴포넌트
const WorryCustomOptions = (props) => {
    const { innerProps, label, isSelected, isDisabled, selectProps, value } = props;

    // 선택된 항목인 경우, checked 클래스 추가
    const isChecked = isSelected ? "checked" : "";

    // 선택된 항목이 비활성화된 경우, disabled 클래스 추가
    const isDisabledClass = isDisabled ? "disabled" : "";

    return (
        <label 
            htmlFor={`${selectProps.inputId}_${value}`} // 해당 label과 input을 연결시키는 데 사용되는 id
            {...innerProps} // 추가적인 props를 전달하기 위한 spread 연산자 사용
            className={`custom-option ${isChecked} ${isDisabledClass}`}>
            <input
                id={`${selectProps.inputId}_${value}`} // input 요소의 ID 값
                type="radio"
                value={value}
                name={selectProps.inputId}
                checked={isSelected}
                onChange={() => selectProps.onChange({ label, value })}
                disabled={isDisabled} // 비활성화 상태 여부
            />
            {label}
        </label>
    );
}

export default WorryCustomOptions;