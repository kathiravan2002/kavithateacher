import React from 'react'
import { Link } from 'react-router-dom'
import { FaLocationDot } from "react-icons/fa6";
import { MdPhoneInTalk } from "react-icons/md";

function Footer() {
  return (
    <>
          <div
            className="py-6 sm:py-8 bg-cover bg-center "
            style={{ backgroundImage: "url('/assets/Group 268.png')" }}
          >
            <div className="pt-2 sm:pt-4 md:pt-5 lg:pt-[10px] pb-2 sm:pb-4 md:pb-5 lg:pb-[10px] px-4 sm:px-6 md:px-8 lg:px-[150px] xl:px-[200px] 2xl:px-[300px]">
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 justify-center items-start">
                {/* Left Column - Logo and Description */}
                <div className="flex flex-col space-y-4 sm:space-y-6">
                  <Link to="/">
                 <h2 className="poppins-extrabold text-xl text-white"> Kavitha Teacher</h2>
                  </Link>
                 
                  <p className="text-white text-sm sm:text-sm md:text-base lg:text-[16px] leading-relaxed sm:leading-[24px] md:leading-[28px] poppins-regular text-justify">
                  Empowering students with clear explanations, consistent guidance, and supportive learning. Kavitha Teacher Tuition helps build strong subject foundations and boost confidence in every learner.
                  </p>
                  <div className="flex space-x-3 sm:space-x-4 justify-start">
                    <a
                      href=""
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-75"
                    >
                      <img src='/assets/Facebook.png' alt="Facebook" className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10" />
                    </a>
                    <a
                      href=""
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-75"
                    >
                      <img src={'/assets/Instagram.png'} alt="Instagram" className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10" />
                    </a>
                  </div>
                </div>
    
                {/* Middle Column - Quick Links */}
                <div className="flex flex-col space-y-3 sm:space-y-4 md:space-y-5 lg:items-center">
                  <h3 className="text-white poppins-semibold text-xl sm:text-xl md:text-xl lg:text-[20px]">
                    Quick Links
                  </h3>
                  <div className="flex flex-col items-start space-y-2 sm:space-y-3 md:space-y-4">
                    <Link to="/" className="text-white text-sm sm:text-sm md:text-base lg:text-[16px] poppins-regular ">
                      • Home
                    </Link>
                    <Link to="/aboutus" className="text-white text-sm sm:text-sm md:text-base lg:text-[16px] poppins-regular ">
                      • About Us
                    </Link>
                    <Link to="/course" className="text-white text-sm sm:text-sm md:text-base lg:text-[16px] poppins-regular ">
                      • Course
                    </Link>
                    {/* <Link to="/other-products" className="text-white text-sm sm:text-sm md:text-base lg:text-[16px] poppins-regular hover:text-[#861F41]">
                      • Other Products
                    </Link> */}
                    <Link to="/contact" className="text-white text-sm sm:text-sm md:text-base lg:text-[16px] poppins-regular ">
                      • Contact Us
                    </Link>
                  </div>
                </div>
    
                {/* Right Column - Contact Us */}
                <div className="flex flex-col space-y-3 sm:space-y-4 md:space-y-6 items-start">
                  <h3 className="text-white poppins-semibold text-xl sm:text-lg md:text-xl lg:text-[20px]">
                    Contact Us
                  </h3>
                  <div className="flex items-center space-x-3">
                    <MdPhoneInTalk  className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    <a
                      href="tel:+919486883084"
                      className="text-white text-sm sm:text-sm md:text-base lg:text-[16px]  poppins-regular"
                    >             
                      +91-9043542174
                    </a>
                  </div>
                  <div className="flex items-start space-x-3">
                    <FaLocationDot  className="w-4 h-4 sm:w-5 sm:h-5 mt-1 text-white" />
                    <a
                      href=""
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-sm sm:text-sm md:text-base lg:text-[16px]  poppins-regular"
                    >                    
                    35/18, Pushpa Nagar Main Road
                      <br />
                      Nungambakkam
                      <br />
                      Chennai 600034, India
                    </a>
                  </div>
                  {/* <div className="flex items-center space-x-3">
                    <img src={''} alt="Email" className="w-4 h-4 sm:w-5 sm:h-5" />
                    <a
                      href="mailto:"
                      className="text-white text-sm sm:text-sm md:text-base lg:text-[16px] hover:text-[#861F41] poppins-regular"
                    >
                      srktraders290584@gmail.com
                    </a>
                  </div> */}
                 
                </div>
              </div>
            </div>
            <div className='bg-white h-0.5 w-full'></div>
            <div className="mt-9">
            <p className="text-center text-white poppins-regular text-sm sm:text-sm md:text-[16px]">
              Copyright ©2025 All rights reserved. Developed by{' '}
              <span className="text-white poppins-regular ">THIRSTY CROWZ</span>
            </p>
          </div>
          </div>
    
          
        </>
  )
}

export default Footer