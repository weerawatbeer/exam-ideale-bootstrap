import React, { useState } from "react";
import "./CardOneStyle.scss";

const CardOne = ({ carddata }) => {
  const { text, icon, iconTwo } = carddata;
  const [hover, setHover] = useState(false);
  const handleHover = () => {
    setHover(!hover);
  };
  return (
    <div
      className="card-wrapper"
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <div className="card-details">
        <div className="card-icon">{hover ? iconTwo : icon}</div>
        <div>
          <p className="card-text">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default CardOne;
