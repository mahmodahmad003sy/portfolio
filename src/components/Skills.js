import React from "react";

import HTMl from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import FireBase from "../assets/firebase.png";
import AWS from "../assets/aws.png";
import GitHup from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Mongo from "../assets/mongo.png";

function Skills() {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f]  text-gray-300">
      {/* conatiner */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Experience
          </p>
          <p className="py-4">this are the technologies i worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
            <img className="w-20 mx-auto" src={HTMl} alt="HTML icon"></img>
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
            <img className="w-20 mx-auto" src={CSS} alt="HTML icon"></img>
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
            <img
              className="w-20 mx-auto"
              src={JavaScript}
              alt="HTML icon"
            ></img>
            <p className="my-4">JavaScript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
            <img className="w-20 mx-auto" src={ReactImg} alt="HTML icon"></img>
            <p className="my-4">REACT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
            <img className="w-20 mx-auto" src={GitHup} alt="HTML icon"></img>
            <p className="my-4">GitHup</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
            <img className="w-20 mx-auto" src={Node} alt="HTML icon"></img>
            <p className="my-4">Node</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
            <img className="w-20 mx-auto" src={Mongo} alt="HTML icon"></img>
            <p className="my-4">Mongo</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
            <img className="w-20 mx-auto" src={AWS} alt="HTML icon"></img>
            <p className="my-4">AWS</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
