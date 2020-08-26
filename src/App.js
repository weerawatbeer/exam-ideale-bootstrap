import React from "react";
import Navbar from "./components/navbar/Navbar";
import SectionOne from "./views/SectionOne";
import SectionTwo from "./views/SectionTwo";
import SectionThree from "./views/SectionThree";
import SectionFour from "./views/SectionFour";
import SectionFive from "./views/SectionFive";
import SectionSix from "./views/SectionSix";
import ScrollArrow from "./components/scroll/ScrollArrow";

const App = () => {
  return (
    <div className="container-fluid p-0">
      <Navbar />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <ScrollArrow />
    </div>
  );
};

export default App;
