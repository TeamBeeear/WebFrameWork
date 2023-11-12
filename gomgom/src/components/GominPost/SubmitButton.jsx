import React from 'react';

const SubmitButton = ({ onClick, buttonText, isDisabled }) => {
  return (
    <button
      type="submit"
      className="post-worry"
      onClick={onClick}
      style={{
        marginBottom: '15rem',
        background: isDisabled ? '#E9E5DA' : '#FFAB5D',
      }}
      disabled={isDisabled}
    >
      {buttonText}
    </button>
  );
};

export default SubmitButton;