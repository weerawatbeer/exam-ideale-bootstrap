import React, { useState } from "react";
import navlogo from "../../assets/images/logo.png";
import userIcon from "../../assets/images/user-icon.png";
import thIcon from "../../assets/images/th-icon.png";
import callcenterLogo from "../../assets/images/callcenter-icon.png";
import { ChevronDownIcon } from "../icon/Icons";
import "./Navbar.scss";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="navbar sticky-top home-navbar">
      <a className="navbar-brand" href="#top">
        <img src={navlogo} alt="navlogo" />
      </a>
      <div
        className="home-navbar-burger-wrapper"
        open={open}
        onClick={() => setOpen(!open)}
      >
        <div className={open ? "ham-open" : ""} />
        <div className={open ? "ham-open" : ""} />
        <div className={open ? "ham-open" : ""} />
      </div>
      <ul className={`nav ${open ? "home-navbar-ul open" : "home-navbar-ul"}`}>
        <li className="nav-item">
          <a className="nav-link active" href="#top">
            หน้าแรก
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#top">
            โปรโมชั่น
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#top">
            สินค้าประกัน <ChevronDownIcon />
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#top">
            บริการหลังการขาย <ChevronDownIcon />
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#top">
            สาระน่ารู้ <ChevronDownIcon />
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#top">
            ทำไมต้องซื้อประกันกับเรา
          </a>
        </li>
        <li className="nav-item">
          <div className="d-flex flex-row home-navbar-call-group">
            <img src={callcenterLogo} alt="callcenterLogo" />
            <div className="d-flex flex-column">
              <span className="home-navbar-call">สายด่วนตอบโจทย์</span>
              <span className="home-navbar-call-number">0-2783-0222</span>
            </div>
          </div>
        </li>
        <li className="nav-item">
          <button className="home-navbar-btn-1" type="button">
            <img src={userIcon} alt="userIcon" />
            เข้าสู่ระบบ
          </button>
        </li>
        <li>
          <button className="home-navbar-btn-2" type="button">
            <img src={thIcon} alt="thIcon" />
            <span>ไทย</span> <ChevronDownIcon />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
