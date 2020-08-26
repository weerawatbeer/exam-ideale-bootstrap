import React, { useState } from "react";
import {
  CartIcon,
  LicenseIcon,
  HealthIcon,
  TravelIcon,
  InsuranceIconOne,
  InsuranceIconTwo,
} from "../components/icon/Icons";
import CardOne from "../components/card/CardOne";
import Title from "../components/title/Title";
import "./SectionTwo.scss";

const SectionTwo = () => {
  const [data] = useState({
    header: "ค้นหาประเภทประกัน",
    details: [
      {
        _id: 1,
        icon: <CartIcon color="#F37021" />,
        iconTwo: <CartIcon />,
        text: "รถยนต์",
      },
      {
        _id: 2,
        icon: <LicenseIcon color="#F37021" />,
        iconTwo: <LicenseIcon />,
        text: "พ.ร.บ.",
      },
      {
        _id: 3,
        icon: <HealthIcon color="#F37021" />,
        iconTwo: <HealthIcon />,
        text: "สุขภาพ",
      },
      {
        _id: 4,
        icon: <TravelIcon color="#F37021" />,
        iconTwo: <TravelIcon />,
        text: "เดินทาง",
      },
      {
        _id: 5,
        icon: <InsuranceIconOne color="#F37021" />,
        iconTwo: <InsuranceIconOne />,
        text: "อุบัติเหตุส่วนบุคคล",
      },
      {
        _id: 6,
        icon: <InsuranceIconTwo color="#F37021" />,
        iconTwo: <InsuranceIconTwo />,
        text: "ประกันชีวิต",
      },
    ],
  });

  return (
    <div className="d-flex justify-content-center align-items-start home-find-type-box">
      <div className="d-flex flex-column justify-content-center align-items-center home-find-type-wrapper">
        <Title text={data.header}></Title>
        <div className="d-flex flex-row flex-wrap home-find-type-bottom">
          {data.details.map((item) => (
            <CardOne key={item._id} carddata={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
