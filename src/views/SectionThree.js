import React, { useState } from "react";
import Title from "../components/title/Title";
import arrowLogo from "../assets/images/arrow-icon.png";
import { StarIcon, CheckCircle } from "../components/icon/Icons";
import "./SectionThreeStyle.scss";

const SectionThree = () => {
  const [data] = useState({
    header: "ลูกค้าพูดถึงเราอย่างไรบ้าง",
    data: {
      reviews: {
        left: "รีวิว (20)",
        right: "ดูรีวิวทั้งหมด",
        firstname: "เพ็ญศิริ",
        createAt: "2 วันที่แล้ว",
        comment:
          "ดีตรงที่สามารถ สืบค้นสถานที่ฉุกเฉินภายในเว็บได้ด้วยสะดวก ง่ายจริงๆ ค่ะ",
        my: "ใช่ ฉันแนะนำประกันนี้",
      },
    },
  });
  return (
    <div className="d-flex flex-row justify-content-center align-items-start home-review-main">
      <div className="container-xl">
        <div className="d-flex flex-column justify-content-center align-items-center home-review-wrapper">
          <Title text={data.header}></Title>
          <div className="carousel slide home-review-slider">
            <ol className="carousel-indicators home-review-ol">
              <li className="active home-review-li-active"></li>
              <li className="home-review-li"></li>
              <li className="home-review-li"></li>
              <li className="home-review-li"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="d-flex justify-content-between home-review-top">
                  <div className="d-flex justify-content-between home-review-top-box">
                    <div className="section-three-text-review">
                      <span>{data.data.reviews.left}</span>
                    </div>
                    <div className="section-three-text-viewreview">
                      <span>{data.data.reviews.right}</span>
                      <img src={arrowLogo} alt="arrow" />
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-row align-items-center home-review-middle">
                  <div className="d-flex flex-column">
                    <div>
                      <StarIcon fill="#F6D05B" />
                      <StarIcon fill="#F6D05B" />
                      <StarIcon fill="#F6D05B" />
                      <StarIcon fill="#F6D05B" />
                      <StarIcon />
                    </div>
                    <div>
                      <span className="pr-2 third-color">
                        {data.data.reviews.firstname}
                      </span>
                      <CheckCircle />
                    </div>

                    <span className="third-color">
                      {data.data.reviews.createAt}
                    </span>
                  </div>
                  <div className="d-flex flex-column home-review-middle-comment">
                    <p className="third-color">{data.data.reviews.comment}</p>
                    <span>{data.data.reviews.my}</span>
                  </div>
                </div>
                <div className="d-flex flex-row justify-content-end home-review-bottom third-color">
                  <span>Like</span>
                  <span>DisLike</span>
                  <span>Block</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
