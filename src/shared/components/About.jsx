import React from 'react'
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs'
import { RiDoubleQuotesR } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import CountUp from 'react-countup';
import { SiGoogleclassroom } from 'react-icons/si';
import { FaThumbsUp } from 'react-icons/fa';
import { PiStudentFill } from 'react-icons/pi';


function About({testimonials}) {

    return (
        <div >

            <section className="bg-[#f5f6fa] overflow-hidden  2xl:min-h-[calc(70vh-0px)] xl:min-h-[calc(85vh-0px)] lg:min-h-[calc(70vh-0px)] min-h-[calc(65vh-0px)] relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-40 gap-5 items-center  max-w-[1525px] mx-auto lg:mt-40 mt-30 px-4">
                    <div className=" lg:hidden block">
                        <img src="/assets/aherosection.png" alt="Tuition Illustration" className="w-full max-w-sm mx-auto" />
                    </div>
                    <div className='hidden lg:block' >
                        <div className=" hidden lg:block  relative z-10">
                            <img src="/assets/aherosection.png" alt="Tuition Illustration" className="max-w-lg w-full  " />
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
                                About Us              </h2>
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
                                to="/aboutus"
                                className="hover:text-[#dd658d] transition-colors text-[#dd658d]"
                            >
                                About us
                            </Link>

                        </nav>

                    </div>

                </div>
            </section>

            <div className="pt-6 sm:pt-8 md:pt-10 lg:pt-[50px] pb-6 sm:pb-8 md:pb-10 lg:pb-[50px] px-4 sm:px-6 md:px-8 lg:px-[150px]">
                <div className="text-center mb-4 sm:mb-6 md:mb-8 lg:mb-10">
                    <div className="grid grid-cols-3 items-center ">
                        <hr className="border-[#861F41] border-1" />
                        <h2 className="poppins-bold text-[13px] sm:text-base md:text-2xl lg:text-[26px] text-black">
                            Committed to every student’s success
                        </h2>
                        <hr className="border-[#861F41] border-1" />
                    </div>

                </div>

                <div className="bg-white shadow-md rounded-lg p-6">
                    <div className="flex flex-col md:flex-col lg:flex-row gap-6">
                        <div className="lg:w-1/2">
                            <img
                                src='/assets/aboutus.jpg'
                                alt='image'
                                className="w-full h-auto rounded-lg object-cover"
                            />
                        </div>
                        <div className="lg:w-1/2">

                            <h3 className="poppins-extrabold text-2xl text-[#861F41] mb-4">Our Story</h3>

                            <p className="poppins-regular text-sm md:text-base lg:text-md text-gray-800 mb-4 text-justify">Kavitha Tuition Center was founded with a simple yet powerful mission – to provide personalized and effective education for every student. What started as a small group of learners has now grown into a trusted learning space for academic excellence.</p>
                            <p className="poppins-regular text-sm md:text-base lg:text-md text-gray-800 mb-4 text-justify">With years of experience and a passion for teaching, Kavitha Ma’am has guided countless students towards success in board exams, computer courses, and more. We believe in building strong foundations through concept clarity, practice, and mentorship.</p>
                            <p className="poppins-regular text-sm md:text-base lg:text-md text-gray-800 mb-4 text-justify">At Kavitha Tuition Center, every student matters. We’re proud to create a supportive, motivating, and results-driven environment where learning becomes a joyful journey.</p>
                            <div className='pt-5'>
                                <div className=" grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 max-w-[1525px] mx-auto ">
                                    <div className="flex flex-col items-center text-center">
                                        <PiStudentFill className="w-6 h-6 sm:w-14 sm:h-14 md:w-[70px] md:h-[65px] mb-2 sm:mb-3 text-[#861F41]" />
                                        <p className="text-gray-800] text-lg sm:text-xl md:text-2xl  poppins-semibold">
                                            <CountUp start={0} end={300} duration={1} suffix="+" />
                                        </p>
                                        <p className="text-gray-800 text-sm sm:text-base md:text-base lg:text-lg xl:text-lg 2xl:text-lg poppins-semibold">
                                            Enroll Students
                                        </p>
                                    </div>

                                    <div className="flex flex-col items-center text-center">
                                        <FaThumbsUp className="w-6 h-6 sm:w-14 sm:h-14 md:w-[70px] md:h-[65px] mb-2 sm:mb-3 text-[#861F41]" />
                                        <p className="text-gray-800 text-lg sm:text-xl md:text-2xl poppins-semibold">
                                            <CountUp start={0} end={100} duration={3} suffix="+" />
                                        </p>
                                        <p className="text-gray-800 text-sm sm:text-base md:text-base lg:text-lg xl:text-lg 2xl:text-lg poppins-semibold">
                                            Success Rate
                                        </p>
                                    </div>

                                    <div className="flex flex-col items-center text-center">
                                        <SiGoogleclassroom className="w-6 h-6 sm:w-14 sm:h-14 md:w-[70px] md:h-[65px] mb-2 sm:mb-3 text-[#861F41]" />
                                        <p className="text-gray-800 text-lg sm:text-xl md:text-2xl  poppins-semibold">
                                            <CountUp start={0} end={10} duration={3} suffix="+" />
                                        </p>
                                        <p className="text-gray-800 text-sm sm:text-base md:text-base lg:text-lg xl:text-lg 2xl:text-lg poppins-semibold">
                                            Complete Courses
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="py-7 px-2 lg:px-4 mb-5 ">
                    <div>
                        <h2 className="text-center text-[#861F41] poppins-bold text-xl lg:mt-10">Feedback</h2>
                        <div className="flex flex-col items-center">
                            <p className="text-black poppins-medium lg:text-2xl text-xl mt-5">What Students Say</p>
                            <img src="/assets/underline12.png" alt="underline" className="max-w-[250px] mt-3" />
                        </div>
                    </div>
                    <div className="relative  max-w-[1525px] mx-auto mt-5 lg:px-25 px-5">
                        <Swiper
                            modules={[Navigation, Autoplay]}
                            navigation={{
                                prevEl: '.testimonial-prev',
                                nextEl: '.testimonial-next1',
                            }}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            loop={true}
                            slidesPerView={1}
                            className=""

                        >
                            {testimonials.map((testimonial, index) => (
                                <SwiperSlide key={index}>
                                    <div className="flex flex-col items-center text-center mt-5 gap-2 px-4">
                                        <div className="poppins-bold text-[80px] text-[#861F41] flex justify-center">
                                            <RiDoubleQuotesR />
                                        </div>
                                        <p className="poppins-medium text-lg mt-5">"{testimonial.quote}"</p>
                                        <p className="poppins-regular text-md text-gray-500">{testimonial.author}</p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <button
                            className="testimonial-prev bg-[#861F41] rounded-full p-2 sm:p-3 absolute left-0 top-1/2 transform -translate-y-1/2 hover:bg-[#861F41] transition-colors cursor-pointer z-10 "
                        >
                            <BsArrowLeftCircle className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
                        </button>
                        <button
                            className="testimonial-next1  bg-[#861F41] rounded-full p-2 sm:p-3 absolute right-0 top-1/2 transform -translate-y-1/2 hover:bg-[#861F41] transition-colors cursor-pointer z-10"
                        >
                            <BsArrowRightCircle className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
                        </button>

                    </div>
                </section>

                <div>

                    <Link to="/course">
                        <div className="flex items-center justify-center">

                            <div className="flex items-center justify-center max-w-[800px] w-full lg:py-10  py-5 lg:px-4 px-2">
                                <button className="button lg:h-[100px] h-[85px] w-full max-w-[800px] items-center bg-gradient-to-r from-[#861F41] to-[#4B164C]">
                                    <p className="title text-center">Join Us!</p>
                                    <img
                                        src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Handshake.png"
                                        alt="Handshake"
                                        className='w-[5.5rem] h-[5.5rem] transition duration-500 images'
                                    />
                                    <p className="description">
                                        Enjoy Unlimited<br />Benefits
                                    </p>
                                </button>
                            </div>
                        </div>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default About