import React from "react";

const WorryCustomOptions = (props) => {
    const { innerProps, label, isSelected, isDisabled, selectProps, value } = props;
    const isChecked = isSelected ? "checked" : "";
    const isDisabledClass = isDisabled ? "disabled" : "";

    return (
        <label 
            htmlFor={`${selectProps.inputId}_${value}`} 
            {...innerProps} 
            className={`custom-option ${isChecked} ${isDisabledClass}`}>
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
}

export default WorryCustomOptions;