import React from 'react'
import { FaArrowRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { RiDoubleQuotesR } from 'react-icons/ri';
import { BsArrowRightCircle, BsArrowLeftCircle } from 'react-icons/bs';
import CountUp from 'react-countup';
import { PiStudentFill } from "react-icons/pi";
import { FaThumbsUp } from "react-icons/fa6";
import { MdOutlineEventAvailable } from "react-icons/md";
import { SiGoogleclassroom } from "react-icons/si";


function Home({navigate,testimonials}) {

  return (

    <div>

      <section className="bg-[#f5f6fa] overflow-hidden xl:min-h-[calc(100vh-0px)] lg:min-h-[calc(75vh-0px)] min-h-[calc(65vh-0px)] relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-40 gap-5 items-center  max-w-[1525px] mx-auto lg:mt-60 mt-30 px-4">
          <div className=" lg:hidden block">
            <img src="/assets/Group 100.png" alt="Tuition Illustration" className="w-full max-w-sm mx-auto" />
          </div>
          <div className="flex flex-col 2xl:gap-10 xl:gap-8 lg:gap-6 gap-5 text-center z-20 w-full ">
            <div className="typewriter">
              <h2 className="poppins-bold text-xl 2xl:text-[50px] xl:text-[45px] lg:text-[30px] md:text-[30px] text-black">
                Explore, Learn, Grow              </h2>
            </div>
            <p className="poppins-regular text-lg lg:text-xl text-gray-700  text-justify  ">
              At Kavitha Teacher Tuition, we understand that every student learns differently.
              Our personalized approach ensures each child receives the guidance they need to grow, excel, and succeed.
            </p>
            <div className="flex justify-center mb-10 lg:mb-0 ">
              <button
                onClick={() => navigate('/course')}
                className="group relative overflow-hidden px-8 py-3 bg-[#861F41] rounded-tr-2xl rounded-bl-2xl text-white poppins-medium  cursor-pointer "
              >
                <span className="relative z-10 flex items-center">
                  View Course
                  <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={18} />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#861F41] to-[#dd658d] opacity-0 group-hover:opacity-100 transition-opacity duration-500 "></span>
              </button>
            </div>
          </div>
          <div className='hidden lg:block' >
            <div className=" hidden lg:block  relative z-10">
              <img src="/assets/Group 100.png" alt="Tuition Illustration" className="max-w-2xl w-full  " />
            </div>
            <div className=''>
              <img src="/assets/round-design.png" alt="no" className=" absolute z-0 h-[50px] w-fit left-[40%] top-[58%] animate-x-round" />
              <img src="/assets/round-design.png" alt="no" className=" absolute z-0 h-[50px] w-fit left-[40%] top-[58%]   animate-moveXY  " />
              <img src="/assets/circles.png" alt="no" className="absolute z-0 h-[180x] w-[180px] left-1/2 top-[53%] translate-x-1/2 animate-x_doubled_circles " />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div>
          <h2 className='text-center text-[#861F41] poppins-bold text-xl lg:mt-10 mt-5'>Our Affordable</h2>
          <div className='flex flex-col  items-center'>
            <p className=' text-black poppins-medium lg:text-2xl text-xl mt-5'>Your Benefit with Kavitha Teacher </p>
            <img src="/assets/underline12.png" alt="img" className="max-w-[250px] mt-3" />
          </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 max-w-[1500px] mx-auto gap-2 lg:gap-0 lg:mb-15 mb-10'>
          <div className='flex flex-col items-center'>
            <img src="/assets/watchlogo.png" alt="img1" className="w-50" />
            <p className="poppins-semibold  text-md -mt-5">Save time & money</p>
          </div>
          <div className='flex flex-col items-center'>
            <img src="/assets/scalelogo.png" alt="img2" className="w-50" />
            <p className="poppins-semibold  text-md -mt-5">Balance learning with life</p>
          </div>
          <div className='flex flex-col items-center'>
            <img src="/assets/booklogo.png" alt="img3" className="w-50" />
            <p className="poppins-semibold  text-md -mt-5">Gain valuable knowledge</p>
          </div>
          <div className='flex flex-col items-center'>
            <img src="/assets/aplogo.png" alt="img4" className="w-50" />
            <p className="poppins-semibold  text-md -mt-5">Location Free Learning</p>
          </div>
        </div>
      </section>
      <section className='bg-[#f5f6fa] py-2'>
        <div>
          <h2 className='text-center text-[#861F41] poppins-bold text-xl lg:mt-10 mt-5 '>Popular Courses</h2>
          <div className='flex flex-col  items-center'>
            <p className=' text-black poppins-medium lg:text-2xl text-xl mt-5'>Popular Online Courses</p>
            <img src="/assets/underline12.png" alt="img" className="max-w-[250px] mt-3" />
          </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 max-w-[1525px] mx-auto gap-6 lg:gap-10  px-4 lg:mb-15 mb-10'>
          <div className='flex flex-col items-center bg-white pb-5 rounded-lg shadow-md duration-200 hover:shadow-[0_0_20px_#9CA3AF] hover:scale-[1.02] transition-all  mt-5 '>
            <div className='p-5'>
              <img src="/assets/image2.jpg " alt="img1" className="transition-all duration-200 group-hover:scale-105" />
            </div>
            <div className="flex flex-col justify-start  mt-5 gap-2 transition-all duration-200 px-2">
            <div className='flex gap-2 justify-center'>
                <img src="/assets/education.png" alt="education" className="w-[35px] h-[35x]" />
                <p className="poppins-bold text-lg text-[#861F41] mt-1">Education</p>
              </div>
              <p className='poppins-bold text-xl text-center'>10th Maths (SSLC-TN)</p>
              <p className='poppins-regular text-md  text-gray-500  text-center'>0 Lessons</p>
            </div>

          </div>
          <div className='flex flex-col items-center bg-white pb-5  rounded-lg shadow-md duration-200 hover:shadow-[0_0_20px_#9CA3AF] hover:scale-[1.02] transition-all  mt-5  '>
            <div className='p-5'>
              <img src="/assets/image2.jpg " alt="img1" className="transition-all duration-200 group-hover:scale-105" />
            </div>
            <div className="flex flex-col justify-start  mt-5 gap-2 transition-all duration-200  px-2">
              <div className='flex gap-2 justify-center'>
                <img src="/assets/education.png" alt="education" className="w-[35px] h-[35x]" />
                <p className="poppins-bold text-lg text-[#861F41] mt-1">Education</p>
              </div>
              <p className='poppins-bold text-xl text-center'>11th Maths (SSLC-TN)</p>
              <p className='poppins-regular text-md  text-gray-500 text-center'>0 Lessons</p>
            </div>

          </div>
          <div className='flex flex-col items-center bg-white pb-5 rounded-lg shadow-md duration-200 hover:shadow-[0_0_20px_#9CA3AF] hover:scale-[1.02] transition-all  mt-5  '>
            <div className='p-5'>
              <img src="/assets/image2.jpg " alt="img1" className="transition-all duration-200 group-hover:scale-105 " />
            </div>
            <div className="flex flex-col justify-start  mt-5 gap-2 transition-all duration-200 px-2">
            <div className='flex gap-2 justify-center'>
                <img src="/assets/education.png" alt="education" className="w-[35px] h-[35x]" />
                <p className="poppins-bold text-lg text-[#861F41] mt-1">Education</p>
              </div>
              <p className='poppins-bold text-xl  text-center'>12th Maths (SSLC-TN) </p>
              <p className='poppins-regular text-md  text-gray-500  text-center'>0 Lessons</p>
            </div>

          </div>
          <div className='flex flex-col items-center bg-white pb-5  rounded-lg shadow-md duration-200 hover:shadow-[0_0_20px_#9CA3AF] hover:scale-[1.02] transition-all  mt-5  '>
            <div className='p-5'>
              <img src="/assets/image2.jpg " alt="img1" className="transition-all duration-200 group-hover:scale-105" />
            </div>
            <div className="flex flex-col justify-start  mt-5 gap-2 transition-all duration-200 px-2">
            <div className='flex gap-2 justify-center'>
                <img src="/assets/education.png" alt="education" className="w-[35px] h-[35x]" />
                <p className="poppins-bold text-lg text-[#861F41] mt-1">Education</p>
              </div>
              <p className='poppins-bold text-xl  text-center'>12th Physics (SSLC-TN) </p>
              <p className='poppins-regular text-md  text-gray-500 text-center'>0 Lessons</p>
            </div>

          </div>
        </div>
      </section>


      <section className="py-7 px-2 lg:px-4 mb-5">
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
      <section className='bg-[#f5f6fa] py-13 '>
        <div className=" grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10 max-w-[1525px] mx-auto ">
          <div className="flex flex-col items-center text-center">
            <PiStudentFill className="w-12 h-12 sm:w-14 sm:h-14 md:w-[70px] md:h-[65px] mb-2 sm:mb-3 text-[#861F41]" />
            <p className="text-[#000000] text-lg sm:text-xl md:text-2xl lg:text-[35px] poppins-semibold">
              <CountUp start={0} end={100} duration={3} suffix="%" />
            </p>
            <p className="text-gray-800 text-sm sm:text-base md:text-base lg:text-lg xl:text-lg 2xl:text-lg poppins-semibold">
              Student Satisfaction
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <FaThumbsUp className="w-12 h-12 sm:w-14 sm:h-14 md:w-[70px] md:h-[65px] mb-2 sm:mb-3 text-[#861F41]" />
            <p className="text-[#000000] text-lg sm:text-xl md:text-2xl lg:text-[35px] poppins-semibold">
              <CountUp start={0} end={100} duration={3} suffix="+" />
            </p>
            <p className="text-gray-800 text-sm sm:text-base md:text-base lg:text-lg xl:text-lg 2xl:text-lg poppins-semibold">
              Success Rate
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <MdOutlineEventAvailable className="w-12 h-12 sm:w-14 sm:h-14 md:w-[65px] md:h-[70px] mb-2 sm:mb-3 text-[#861F41]" />
            <p className="text-[#020202] text-lg sm:text-xl md:text-2xl lg:text-[35px] poppins-semibold">
              Mon–Sat
            </p>
            <p className="text-gray-800 text-sm sm:text-base md:text-base lg:text-lg xl:text-lg 2xl:text-lg poppins-semibold">
              Support Available
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <SiGoogleclassroom className="w-12 h-12 sm:w-14 sm:h-14 md:w-[70px] md:h-[65px] mb-2 sm:mb-3 text-[#861F41]" />
            <p className="text-[#000000] text-lg sm:text-xl md:text-2xl lg:text-[35px] poppins-semibold">
              <CountUp start={0} end={10} duration={3} suffix="+" />
            </p>
            <p className="text-gray-800 text-sm sm:text-base md:text-base lg:text-lg xl:text-lg 2xl:text-lg poppins-semibold">
              Complete Courses
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home