import React from "react";

const PageTitle = ({ text, style }) => {
  return (
    <div>
      <p style={style}>{text}</p>
    </div>
  );
};

export default PageTitle;