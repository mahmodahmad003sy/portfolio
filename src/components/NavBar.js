import React, { useState } from "react";
import logo from "../assets/logo.png";
import { FaBars, FaFacebook, FaGithub, FaTimes } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";
export const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-50 ">
      <div>
        <img src={logo} alt="Logo Image" className="w-[50px]"></img>
      </div>

      <ul className="hidden md:flex justify-between">
        <li className="px-4">
          <Link to="home" smooth duration={300}>
            Home
          </Link>
        </li>
        <li className="px-4">
          <Link to="about" smooth duration={300}>
            About
          </Link>
        </li>
        <li className="px-4">
          <Link to="skills" smooth duration={300}>
            Skills
          </Link>
        </li>
        <li className="px-4">
          <Link to="work" smooth duration={300}>
            Work
          </Link>
        </li>
        <li className="px-4">
          <Link to="contact" smooth duration={300}>
            Contact
          </Link>
        </li>
      </ul>

      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center "
        }
      >
        <li className=" py-6 text-4xl px-4">
          <Link onClick={handleClick} to="home" smooth duration={300}>
            Home
          </Link>
        </li>
        <li className=" py-6 text-4xl px-4">
          <Link onClick={handleClick} to="about" smooth duration={300}>
            About
          </Link>
        </li>
        <li className=" py-6 text-4xl px-4">
          <Link onClick={handleClick} to="about" smooth duration={300}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl px-4">
          <Link onClick={handleClick} to="about" smooth duration={300}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl px-4">
          <Link onClick={handleClick} to="about" smooth duration={300}>
            Contact
          </Link>
        </li>
      </ul>
      {/* social media */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className=" px-4 w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 ">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Linkedin <FaFacebook size={30} />
            </a>
          </li>
          <li className=" px-4 w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] ">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className=" px-4 w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0] ">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Mail <HiOutlineMail size={30} />
            </a>
          </li>
          <li className=" px-4 w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69] ">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Mobile <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
