import React from "react";
import lineLogo from "../assets/images/line-icon.png";
import facebookLogo from "../assets/images/facebook-icon.png";
import callcenterLogo from "../assets/images/callcenter-icon.png";
import dbdLogo from "../assets/images/dbd-icon2.png";
import "./SectionSix.scss";

const SectionSix = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center section-six-main">
      <div className="container-xl">
        <div className="d-flex justify-content-between home-footer-top">
          <div className="home-footer-top-social">
            <img src={facebookLogo} alt="facebookLogo" />
            <img src={lineLogo} alt="lineLogo" />
          </div>
          <div className="d-flex flex-row justify-content-center align-items-center">
            <img src={callcenterLogo} alt="callcenterLogo" />
            <div className="d-flex flex-column">
              <span className="home-footer-call">สายด่วนตอบโจทย์</span>
              <span className="home-footer-call-number">0-2783-0222</span>
            </div>
          </div>
        </div>
        <div className="d-flex flex-row justify-content-between flex-wrap">
          <div className="d-flex flex-column">
            <div className="d-flex flex-row justify-content-between">
              <div className="d-flex flex-column">
                <span>หน้าแรก</span>
                <span>โปรโมชั่น</span>
                <span>สินค้าประกัน</span>
                <ul>
                  <li>รถยนต์</li>
                  <li>พ.ร.บ.</li>
                  <li>อุบัติเหตุ</li>
                  <li>เดินทาง</li>
                </ul>
              </div>
              <div className="d-flex flex-column">
                <ul>
                  <li>สุขภาพ</li>
                  <li>ที่อยู่อาศัย</li>
                </ul>
                <span>บริการหลังการขาย</span>
                <ul>
                  <li>บริการพิเศษเฉพาะลูกค้าตอบโจทย์</li>
                  <li>ขั้นตอนการเคลม</li>
                  <li>ร้องเรียนบริการ</li>
                  <li>คำถามที่พบบ่อย</li>
                </ul>
              </div>
              <div className="d-flex flex-column">
                <span>สาระน่ารู้</span>
                <ul>
                  <li>รถยนต์</li>
                  <li>สุขภาพ</li>
                  <li>อุบัติเหตุส่วนบุคคล</li>
                  <li>เดินทาง</li>
                  <li>ที่อยู่อาศัย</li>
                  <li>อื่นๆ</li>
                </ul>
              </div>
            </div>
            <div className="d-flex flex-column">
              <span className="home-footer-middle-company">
                บริษัท ธนชาตโบรกเกอร์ จำกัด
              </span>
              <span className="home-footer-middle-address">
                999/3, 999/4 อาคารเดอะไนน์ ถนนพระราม 9 แขวงพัฒนาการ เขตสวนหลวง
                กรุงเทพมหานคร 10250
              </span>
            </div>
          </div>
          <div className="d-flex flex-column">
            <div className="d-flex flex-column">
              <span>ทำไมต้องซื้อประกันกับเรา</span>
              <ul>
                <li>คุ้มกว่า</li>
                <li>มั่นใจกว่า</li>
                <li>ง่ายกว่า</li>
              </ul>
              <span>เกี่ยวกับเรา</span>
              <span>ติดต่อเรา</span>
              <span>นโยบายความเป็นส่วนตัว</span>
            </div>
            <div>
              <img src={dbdLogo} alt="dbdLogo" />
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center footer">
        <span>
          © THANACHART BROKER COMPANY LIMITED, 2019 ALL RIGHTS RESERVED
        </span>
      </div>
    </div>
  );
};

export default SectionSix;
