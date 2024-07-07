import React from "react";
import { TfiClose } from "react-icons/tfi";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";

const Index = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col">
      <div className="flex justify-end p-5">
        <TfiClose className="fill-white size-5 cursor-pointer" />
      </div>
      <div className="flex justify-center">
        <div className=" container max-w-[80%] text-white">
          <div className="flex-col flex justify-center ">
            <Section1 />
            <Section2 />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
