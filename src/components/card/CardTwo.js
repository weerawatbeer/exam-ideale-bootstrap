import React from "react";
import "./CardTwoStyle.scss";

const CardTwo = ({ carddata }) => {
  return (
    <div className="d-flex flex-column card-two-wrapper">
      <div>
        <img src={carddata.icon} alt="cardicon" />
      </div>
      <h6>{carddata.text}</h6>
      <span>{carddata.detail.detailOne}</span>
      <span>{carddata.detail.detailTwo}</span>
    </div>
  );
};

export default CardTwo;
