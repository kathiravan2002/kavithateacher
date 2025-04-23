import React from 'react';
import { Link } from 'react-router-dom';


function CourseDetails({course}) {
  
  return (
    <>
     
      <section className="bg-[#f5f6fa] overflow-hidden  2xl:min-h-[calc(70vh-0px)] xl:min-h-[calc(85vh-0px)] lg:min-h-[calc(70vh-0px)] min-h-[calc(65vh-0px)] relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-40 gap-5 items-center  max-w-[1525px] mx-auto lg:mt-40 mt-30 px-4">
          <div className=" lg:hidden block">
            <img src="/assets/cherosection.png" alt="Tuition Illustration" className="w-full max-w-sm mx-auto" />
          </div>
          <div className='hidden lg:block' >
            <div className=" hidden lg:block  relative z-10">
              <img src="/assets/cherosection.png" alt="Tuition Illustration" className="max-w-lg w-full  " />
            </div>
            <div className=''>
              <img src="/assets/round-design.png" alt="no" className=" absolute z-0 h-[50px] w-fit left-[40%] top-[58%] animate-round" />
              <img src="/assets/round-design.png" alt="no" className=" absolute z-0 h-[50px] w-fit left-[55%] top-[58%]   animate-moveXY  " />
              <img src="/assets/circles.png" alt="no" className="absolute z-0 h-[180x] w-[180px] left-6/18 top-[66%] translate-x-1/2 animate-x_doubled_circles " />
            </div>
          </div>
          <div className="flex flex-col 2xl:gap-10 xl:gap-8 lg:gap-6 gap-5 text-center z-20 w-full mb-15 lg:mb-0">

            <div className="typewritercourse">
              <h2 className="poppins-bold text-xl  lg:text-[45px] md:text-[30px] text-black">
                {course.title}         </h2>
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
                to="/course"
                className="hover:text-[#dd658d] transition-colors text-[#dd658d]"
              >
                Course
              </Link>
              <span className="text-gray-300">/</span>
              <span className="text-[#dd658d] poppins-regular lg:poppins-medium text-base lg:text-2xl">{course.title}</span>
            </nav>

          </div>

        </div>
      </section>

      <div className="pt-6 sm:pt-8 md:pt-15 lg:pt-[50px] pb-6 sm:pb-8 md:pb-10 lg:pb-[50px] px-4 sm:px-6 md:px-8 lg:px-[150px]">
        <div className="text-center mb-4 sm:mb-6 md:mb-8 lg:mb-10">
          <div className="grid grid-cols-3 items-center">
            <hr className="border-gray-500 border-1" />
            <h2 className="poppins-bold text-base sm:text-2xl md:text-3xl lg:text-[35px] text-[#861F41]">
              Course Details
            </h2>
            <hr className="border-gray-500 border-1" />
          </div>
          <p className="text-sm sm:text-base md:text-lg lg:text-[18px] poppins-regular leading-relaxed sm:leading-[24px] md:leading-[28px] lg:leading-[32px] mt-2 text-pretty max-w-[60rem] mx-auto">
            Explore the details of our {course.category} course
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="flex flex-col md:flex-row lg:gap-10 xl:gap-10 2xl:gap-20 gap-6 ">
            <div className="md:w-1/2">
              <img
                src={course.images}
                alt={course.title}
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
            <div className="md:w-1/2">

              <h3 className="poppins-bold text-xl text-[#861F41] mb-2">{course.title}</h3>
              <p className="poppins-regular text-md md:text-md lg:text-md xl:text-md 2xl:text-lg text-gray-500 mb-2">
                Category: {course.category}
              </p>
              <p className="poppins-regular text-md md:text-md lg:text-md xl:text-md 2xl:text-lg text-gray-500 mb-2">
                Lessons: {course.lessons}
              </p>
              <p className="poppins-regular text-md md:text-md lg:text-md xl:text-md 2xl:text-lg text-gray-700 mb-3">{course.description}</p>
              <p className="poppins-regular text-md md:text-md lg:text-md xl:text-md 2xl:text-lg text-[#861F41] mb-3">{course.duration}</p>
              <p className="poppins-regular text-md md:text-md lg:text-md xl:text-md 2xl:text-lg text-[#861F41] mb-3">{course.instructor}</p>
              <p className="poppins-regular text-md md:text-md lg:text-md xl:text-md 2xl:text-lg text-gray-700 mb-3">{course.price}</p>
              <button className="bg-[#861F41] text-white py-2 px-4 rounded rounded-tr-2xl rounded-bl-2xl hover:bg-[#dd658d] transition-colors cursor-pointer">
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CourseDetails;