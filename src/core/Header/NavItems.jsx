import React from "react";
import { Link } from "react-router-dom";
import { IoCloseCircleOutline } from "react-icons/io5";


const NavItems = ({ ToggleMenu, MenuOpen, isActive, }) => {

  return (
    <>
      <nav className={`${MenuOpen ? 'translate-x-0' : 'translate-x-full'} duration-300 mx-auto text-[#861F41] poppins-medium bg-white min-h-screen max-h-screen max-w-80 w-full top-0 right-0 absolute z-50`}>
       
        <div className="p-5">
          
          <div className="w-44  p-2"></div>
          <div onClick={ToggleMenu} className="absolute right-5 top-5 cursor-pointer"><IoCloseCircleOutline className="text-2xl" /></div>
         
          <ul className="flex flex-col items-start mt-5 *:my-2 *:px-2  overflow-y-auto max-h-[calc(100vh-150px)] ">
            <Link to="/" className={` ${isActive == '/' ? 'text-white bg-[#861F41] rounded-lg min-w-[75px] py-1  px-2' : ' '}`}>
              <li
                onClick={() => {
                  ToggleMenu(false);
                }}
                className="duration-300 "
              >
                Home
              </li>
            </Link>


            <Link to="/aboutus" className={` ${isActive == '/aboutus' ? ' text-white bg-[#861F41] rounded-lg min-w-[75px] py-1  px-2' : ''}`}>
              <li
                onClick={() => {
                  ToggleMenu(false);

                }}
                className="duration-300"
              >
                About us
              </li>
            </Link>
            <Link to="/course" className={` ${isActive == '/course' ? 'text-white bg-[#861F41] rounded-lg min-w-[75px] py-1  px-2' : ''}`}>
              <li
                onClick={() => {
                  ToggleMenu(false);

                }}
                className="duration-300"
              >
                Course
              </li>
            </Link>
            <Link to="/contact" className={` ${isActive == '/contact' ? 'text-white bg-[#861F41] rounded-lg min-w-[75px] py-1  px-2' : ''}`}>
              <li
                onClick={() => {
                  ToggleMenu(false);

                }}
                className="duration-300"
              >
                Contact
              </li>
            </Link>
          </ul>
        </div>
        <div className="flex justify-center">
          <button className={`p-1   poppins-medium px-5 rounded-lg cursor-pointer ${scroll ? 'bg-[#861F41] text-white' : 'bg-[#861F41] text-white'}`}>Login</button>
        </div>
      </nav>
    </>
  );
};

export default NavItems;