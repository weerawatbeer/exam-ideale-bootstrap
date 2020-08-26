import React from "react";
import "./CardInsuranceStyle.scss";

const CardInsurance = ({ logo, bgcolor }) => {
  return (
    <div
      className="d-flex justify-content-center align-items-center card-insurance-wrapper"
      style={{ backgroundColor: bgcolor }}
    >
      <div>
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default CardInsurance;
