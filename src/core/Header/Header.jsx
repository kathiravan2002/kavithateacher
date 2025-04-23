import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import NavItems from './Navitems'
import { GiHamburgerMenu } from "react-icons/gi";


function Header() {
    const [MenuOpen, setMenuOpen] = useState(false);
    const [scroll, setScroll] = useState(false);
    const location = useLocation();
    const isActive = location.pathname;
    const ToggleMenu = () => {
      setMenuOpen(!MenuOpen);
    };
  
    
  
    useEffect(() => {
      const handleScroll = () => {
        setScroll(window.scrollY > 10);
      };
      window.addEventListener("scroll", handleScroll);
      console.log();
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  return (
    <header
    className={`fixed top-0 w-full z-50 bg-white ${scroll? ' bg-white':'bg-white'}`}
  >
    {/* <div className={`${scroll ? "bg-white" : "bg-white"}  `}> */}
    
    <div className='py-5   shadow-lg  px-4 sm:px-6 lg:px-35 xl:px-40 2xl:px-50'>
        <div className='flex justify-between gap-10'>
            <div>
            <Link to='/'>
            <h2 className={`lg:text-3xl text-xl text-[#861F41] namdhinggo-extrabold mt-2 lg:mt-0 ${scroll?' text-[#861F41]':'text-[#861F41]'} `}>
                Kavitha Teacher
            </h2>
            </Link>
            </div>
            <div className={`poppins-medium hidden  lg:block mt-2 ${scroll?'text-black':'text-black'}`}>
              <ul className="flex gap-5 h-full  ">
                <li className="">
                  <Link to='/'>Home</Link>
                </li>

                <li className="">
                  <Link to='/aboutus'>About us</Link>
                </li>
                <li className="">
                  <Link to='/course'>Course</Link>
                </li>
                <li className="">
                  <Link to='/contact'>Contact</Link>
                </li>
              </ul>
            </div>
            <div className='lg:block hidden'>
                <button className={`p-1   poppins-medium px-10 rounded-lg cursor-pointer ${scroll?'bg-[#861F41] hover:bg-gradient-to-r from-[#861F41] to-[#dd658d] text-white':'bg-[#861F41] hover:bg-gradient-to-r from-[#861F41] to-[#dd658d] text-white'}`}>Login</button>
            </div>
            <div
                onClick={ToggleMenu}
                className={`${scroll ? "" : ""
                  } text-[#861F41]  cursor-pointer  duration-300 min-w-24  lg:hidden `}
              >
                {" "}

                < GiHamburgerMenu 
                  className={`${scroll ? " " : ""}  ml-15 text-3xl  cursor-pointer duration-300 m-1.5  rotate-180 `}
                />
              </div>
          </div>
        </div>
        <NavItems MenuOpen={MenuOpen} ToggleMenu={ToggleMenu} isActive={isActive}  />
          {MenuOpen && (
            <div
              onClick={() => setMenuOpen(false)}
              className="h-screen w-full bg-black/40 absolute top-0"
            ></div>
          )}
        {/* </div> */}
       
        </header>
  )
}

export default Header