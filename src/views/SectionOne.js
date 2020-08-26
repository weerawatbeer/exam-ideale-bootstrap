import React from "react";
import bannerImg from "../assets/images/banner-img.png";
import "./SectionOne.scss";

const SectionOne = () => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide home-banner"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li className="active home-banner-li-active"></li>
        <li className="home-banner-li"></li>
        <li className="home-banner-li"></li>
        <li className="home-banner-li"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src={bannerImg} alt="First slide" />
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
