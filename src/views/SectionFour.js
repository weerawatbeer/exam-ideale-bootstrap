import React, { useState } from "react";
import Title from "../components/title/Title";
import daimondIcon from "../assets/images/diamond-icon.png";
import sureIcon from "../assets/images/sure-icon.png";
import easyIcon from "../assets/images/easy-icon.png";
import CardTwo from "../components/card/CardTwo";
import "./SectionFourStyle.scss";

const SectionFour = () => {
  const [data] = useState({
    header: "ทำไมต้องซื้อประกันกับเรา",
    details: [
      {
        _id: 1,
        icon: daimondIcon,
        text: "คุ้มกว่า",
        detail: {
          detailOne: "รับความคุ้มครองที่ครอบคลุม สุดคุ้มกับค่า",
          detailTwo: "เบี้ยประกันภัยพร้อมความดูแลที่มากกว่า",
        },
      },
      {
        _id: 2,
        icon: sureIcon,
        text: "มั่นใจกว่า",
        detail: {
          detailOne: "วางใจได้ อุ่นใจดี มีประสิทธิภาพด้วย",
          detailTwo: "ประสบการณ์อย่างมืออาชีพ",
        },
      },
      {
        _id: 3,
        icon: easyIcon,
        text: "ง่ายกว่า",
        detail: {
          detailOne: "ซื้อปุ๊บ จ่ายปั๊บ รับความคุ้มครองทันที",
        },
      },
    ],
  });
  return (
    <div className="d-flex justify-content-center align-items-start home-why-main">
      <div className="d-flex flex-column justify-content-center align-items-center home-why-wrapper">
        <Title text={data.header}></Title>
        <div className="d-flex flex-row flex-wrap home-why-bottom">
          {data.details.map((item) => (
            <CardTwo key={item._id} carddata={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
