import React from 'react'
import { Link } from 'react-router-dom'
import 'swiper/css';
import 'swiper/css/navigation';
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { FaLocationArrow } from "react-icons/fa";

function Contact() {

    return (
        <div className=''>

            <section className="bg-[#f5f6fa] overflow-hidden  2xl:min-h-[calc(70vh-0px)] xl:min-h-[calc(85vh-0px)] lg:min-h-[calc(70vh-0px)] min-h-[calc(65vh-0px)] relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-40 gap-5 items-center  max-w-[1525px] mx-auto lg:mt-40 mt-30 px-4">
                    <div className=" lg:hidden block">
                        <img src="/assets/bherosection.png" alt="Tuition Illustration" className="w-full max-w-sm mx-auto" />
                    </div>
                    <div className='hidden lg:block' >
                        <div className=" hidden lg:block  relative z-10">
                            <img src="/assets/bherosection.png" alt="Tuition Illustration" className="max-w-lg w-full  " />
                        </div>
                        <div className=''>
                            <img src="/assets/round-design.png" alt="no" className=" absolute z-0 h-[50px] w-fit left-[40%] top-[58%] animate-round" />
                            <img src="/assets/round-design.png" alt="no" className=" absolute z-0 h-[50px] w-fit left-[55%] top-[58%]   animate-moveXY  " />
                            <img src="/assets/circles.png" alt="no" className="absolute z-0 h-[180x] w-[180px] left-6/18 top-[66%] translate-x-1/2 animate-x_doubled_circles " />
                        </div>
                    </div>
                    <div className="flex flex-col 2xl:gap-10 xl:gap-8 lg:gap-6 gap-5 text-center z-20 w-full mb-15 lg:mb-0">

                        <div className="typewriters">
                            <h2 className="poppins-bold text-xl  lg:text-[45px] md:text-[30px] text-black">
                                Contact us        </h2>
                            <p className="poppins-regular text-lg lg:text-xl text-gray-700  text-justify  hidden lg:block">
                                Kavitha Tuition Center is dedicated to providing quality education with personalized attention and expert guidance.
                            </p>
                        </div>
                        <nav className="flex items-center justify-center space-x-2  text-lg lg:text-2xl poppins-medium  text-black">
                            <Link
                                to="/"
                                className="hover:text-[#dd658d] transition-colors"
                            >
                                Home
                            </Link>
                            <span className="text-gray-300">/</span>
                            <Link
                                to="/contact"
                                className="hover:text-[#dd658d] transition-colors text-[#dd658d]"
                            >
                                Contact
                            </Link>

                        </nav>

                    </div>

                </div>
            </section>

            <div className="pt-6 sm:pt-8 md:pt-10 lg:pt-15 pb-6 sm:pb-8 md:pb-10 lg:pb-[50px] px-4 sm:px-6 md:px-8 lg:px-[150px]">
                <div className="text-center mb-4 sm:mb-6 md:mb-8 lg:mb-10 ">
                    <div className="grid grid-cols-3 items-center">
                        <hr className="border-gray-500 border-1" />
                        <h2 className="poppins-bold text-base sm:text-2xl md:text-3xl lg:text-[35px] text-[#861F41]">
                            Contact
                        </h2>
                        <hr className="border-gray-500 border-1" />
                    </div>
                    <p className="text-sm sm:text-base md:text-lg lg:text-[18px] poppins-regular leading-relaxed sm:leading-[24px] md:leading-[28px] lg:leading-[32px] mt-2 text-pretty max-w-[60rem] mx-auto">
                        Inspiring minds, shaping bright futures
                    </p>
                </div>

                <div className="bg-white shadow-[0_2px_4px_rgba(0,0,0,0.1),0_-2px_4px_rgba(0,0,0,0.1),2px_0_4px_rgba(0,0,0,0.1),-2px_0_4px_rgba(0,0,0,0.1)] rounded-lg lg:p-6 p-4 mt-8 lg:mt-0">
                    <div className="flex flex-col md:flex-row 2xl:gap-20 xl:gap-20 lg:gap-10 gap-10">
                        <div className="md:w-1/2">

                            <div className='space-y-3'>
                                <p className="poppins-bold text-xl text-[#861F41]">NEED ANY HELP?</p>
                                <p className="poppins-bold text-lg ">Get in touch with us</p>
                                <p className="poppins-regular text-sm md:text-base lg:text-lg text-gray-800 ">At Kavitha Tuition Center, your academic journey is important to us. Contact us today — we're just a message or call away!</p>
                                <div className='space-y-5 mt-5 md:bg-gray-200 md:p-5 rounded-lg'>
                                    <div className='flex  gap-3'>
                                        <div className=' text-[#861F41] text-xl p-2 '><FiPhoneCall className='translate-y-1/2' /></div>

                                        <p className="poppins-regular text-sm sm:text-sm md:text-base lg:text-md  space-y-2 ">
                                            <span className="poppins-medium">Have any question?</span>
                                            <br />
                                            <p className='mt-2'>+91-9043542174</p>
                                        </p>
                                    </div>
                                    <div className='flex  gap-3'>
                                        <div className=' text-[#861F41] text-xl p-2 '><HiOutlineMail className='translate-y-1/2 ' /></div>

                                        <p className="poppins-regular text-sm md:text-base lg:text-md space-y-2 ">
                                            <span className="poppins-medium">Write email</span>
                                            <br />
                                            <p className='mt-2'> kavithateacher@gmail.com</p>
                                        </p>
                                    </div>
                                    <div className='flex  gap-3'>
                                        <div className=' text-[#861F41] text-xl p-2 '><FaLocationArrow className='translate-y-1/2' /></div>
                                        <p className="poppins-regular text-sm sm:text-sm md:text-base lg:text-md  space-y-2 ">
                                            <span className="poppins-medium">Visit us</span>
                                            <br />
                                            <p className='mt-2'>  35/18, Pushpa Nagar Main Road,  Nungambakkam, Chennai 600034, India</p>
                                        </p>
                                    </div>
                                </div>
                            </div>


                        </div>

                        <div className='md:w-1/2'>
                            <div className="border-2 lg:p-5 p-3 rounded-tr-2xl rounded-bl-2xl border-[#861F41]">

                                <div className='space-y-3'>
                                    <p className="poppins-bold text-xl text-[#861F41]">Send us Email</p>
                                    <p className="poppins-bold text-lg ">Feel free to write</p>
                                </div>

                                <form className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
                                    <div className="flex flex-col">
                                        {/* <label htmlFor="name" className="poppins-medium text-gray-700 mb-2">Name</label> */}
                                        <input
                                            type="text"
                                            id="name"
                                            className="px-5 py-3 bg-gray-50 poppins-medium rounded-lg focus:ring-2 focus:outline-none focus:ring-[#861F41] border border-gray-200"
                                            placeholder="Enter Name"
                                            required
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        {/* <label htmlFor="email" className="poppins-medium text-gray-700 mb-2">Email</label> */}
                                        <input
                                            type="email"
                                            id="email"
                                            className="px-5 py-3 bg-gray-50 poppins-medium rounded-lg focus:ring-2 focus:outline-none focus:ring-[#861F41] border border-gray-200"
                                            placeholder="Enter Email"
                                            required
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        {/* <label htmlFor="subject" className="poppins-medium text-gray-700 mb-2">Subject</label> */}
                                        <input
                                            type="text"
                                            id="subject"
                                            className="px-5 py-3 bg-gray-50 poppins-medium rounded-lg focus:ring-2 focus:outline-none focus:ring-[#861F41] border border-gray-200"
                                            placeholder="Enter Subject"
                                            required
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        {/* <label htmlFor="phone" className="poppins-medium text-gray-700 mb-2">Phone</label> */}
                                        <input
                                            type="tel"
                                            id="phone"
                                            className="px-5 py-3 bg-gray-50 poppins-medium rounded-lg focus:ring-2 focus:outline-none focus:ring-[#861F41] border border-gray-200"
                                            placeholder="Enter Phone"
                                            pattern="[0-9]{10}"
                                        />
                                    </div>
                                    <div className="col-span-1 md:col-span-2 flex flex-col">
                                        {/* <label htmlFor="message" className="poppins-medium text-gray-700 mb-2">Message</label> */}
                                        <textarea
                                            id="message"
                                            placeholder="Enter Message"
                                            rows="6"
                                            className="px-5 py-3 bg-gray-50 poppins-medium rounded-lg focus:ring-2 focus:outline-none focus:ring-[#861F41] border border-gray-200 resize-y"
                                            required
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="col-span-1 md:col-span-2 mx-auto mt-3 bg-gradient-to-r bg-[#861F41]  text-white px-8 py-3 rounded-tr-[24px] rounded-bl-[24px] hover:from-[#861F41] hover:to-[#dd658d] transition duration-300 flex items-center justify-center poppins-medium cursor-pointer shadow-lg"
                                    >
                                        Send Email
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default Contact