// SubmitButton.js
import React from 'react';

const SubmitButton = ({ onClick, isDisabled, buttonText }) => {
  return (
    <button
      type="submit"
      className="submit"
      style={{
        marginBottom: '15rem',
        background: isDisabled ? '#E9E5DA' : '#FFAB5D',
      }}
      disabled={isDisabled}
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
};

export default SubmitButton;