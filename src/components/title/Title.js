import React from "react";
import "./TitleStyle.scss";

const Title = ({ text }) => {
  return (
    <div>
      <h1 className="app-title">{text}</h1>
    </div>
  );
};

export default Title;
