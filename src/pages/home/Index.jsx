import React from "react";
import { TfiClose } from "react-icons/tfi";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";

const Index = () => {
  return (
    <div className="mainDiv">
      <div className="flex justify-end p-5">
        <TfiClose className="fill-white size-5 cursor-pointer" />
      </div>
      <div className="flex justify-center">
        <div className="container max-w-[80%] text-white">
          <div className="commonFlex">
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <div className="footer">© 2019-2023 abcTechnology Solutions Pvt. Ltd. All Rights Reserved</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
