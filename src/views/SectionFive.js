import React from "react";
import Title from "../components/title/Title";
import CardInsurance from "../components/card/CardInsurance";
import insuranceLogoOne from "../assets/images/insurance-1.png";
import insuranceLogoTwo from "../assets/images/insurance-2.png";
import insuranceLogoThree from "../assets/images/insurance-3.png";
import insuranceLogoFour from "../assets/images/insurance-4.png";
import "./SectionFive.scss";
const SectionFive = () => {
  return (
    <div className="d-flex d-flex-row justify-content-center align-items-start home-insurance-main">
      <div className="d-flex flex-column justify-content-center align-items-center home-insurance-wrapper">
        <Title text="บริษัทประกันคู่ค้า"></Title>
        <div className="d-flex flex-row flex-wrap home-insurance-bottom">
          <CardInsurance logo={insuranceLogoOne} bgcolor="#1A4295" />
          <CardInsurance logo={insuranceLogoTwo} bgcolor="#F66F00" />
          <CardInsurance logo={insuranceLogoThree} bgcolor="#0413A2" />
          <CardInsurance logo={insuranceLogoFour} bgcolor="#ffffff" />
        </div>
      </div>
    </div>
  );
};

export default SectionFive;
