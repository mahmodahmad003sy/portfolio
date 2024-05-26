import React from "react";
import { HiArrowCircleRight, HiOutlineArrowRight } from "react-icons/hi";
export const Home = () => {
  return (
    <div className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 justify-center h-full flex flex-col ">
        <p className="text-pink-600">Hi, my name is </p>
        <p className="text-4xl sm:text-7xl font-bold text-[#ccd6f6] ">
          Mahmod Ahmad
        </p>
        <p className="text-4xl sm:text-7xl font-bold text-[#8892b0] ">
          I'm full-stack developer
        </p>
        <p className=" text-[#8892b0] py-4 max-w-[#700px] ">
          specializing in build web applications using PERN stack, I'am trying
          to develop my self constantly.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            View work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowCircleRight className="ml-3 " />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
