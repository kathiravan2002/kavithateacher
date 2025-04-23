
import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { Dropdown } from 'primereact/dropdown';

function Course({courses,selectedCourse,categoryOptions,filteredCourses,setSelectedCourse}) {
  
  return (
    <div >
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
           
                <div className="typewriters">
                    <h2 className="poppins-bold text-xl  lg:text-[45px] md:text-[30px] text-black">
                        Our Course           </h2>
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
      
               </nav>
             
            </div>
                        
      </div>
    </section>
      <div className="max-w-[1500px] mx-auto px-2 lg:px-2 py-6">
        {/* <div className="poppins-extrabold text-[#861F41] text-[30px] text-center mb-6 ">
          Our Programmes
        </div> */}
        <div className="text-center mb-4 sm:mb-6 md:mb-8 lg:mb-15 mt-15">
         <div className="grid grid-cols-3 items-center ">
            <hr className="border-[#861F41] border-1" />
            <h2 className="poppins-bold text-[13px] sm:text-base md:text-2xl lg:text-[26px] text-black">
                Our Programmes
            </h2>
            <hr className="border-[#861F41] border-1" />
        </div>
        </div>
        {/* Tabs for Desktop */}
        <div className="hidden lg:flex justify-center ">
          <div className="flex flex-wrap gap-2 bg-white border-2 border-[#861F41] rounded-lg p-2">
            {categoryOptions.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCourse(category.value)}
                className={`px-4 py-2 text-[#861F41] poppins-medium rounded-lg transition-colors duration-200 cursor-pointer ${
                  selectedCourse === category.value
                    ? 'bg-[#861F41] text-white'
                    : 'hover:bg-[#dd658d] hover:text-white'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        {/* Dropdown for Mobile */}
        <div className="lg:hidden flex justify-center">
          <div className="bg-white border-2 border-[#861F41] py-2 px-4 rounded-lg w-65">
            <Dropdown
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.value)}
              options={categoryOptions}
              optionLabel="name"
              optionValue="value"
              placeholder="Select Category"
              className="md:w-56 w-55 bg-white text-[#861F41] poppins-medium border-[#861F41] focus:ring-2 focus:ring-[#dd658d]"
              highlightOnSelect={false}
              panelClassName="bg-white border border-[#861F41] rounded-lg shadow-lg mt-3 w-65 ml-5"
              itemTemplate={(option) => (
                <div
                  className={`p-2 text-[#861F41] poppins-medium rounded-lg transition-colors duration-200 ${
                    selectedCourse === option.value
                      ? 'bg-[#861F41] text-white'
                      : 'hover:bg-[#dd658d] hover:text-white'
                  }`}
                >
                  {option.name}
                </div>
              )}
            />
          </div>
        </div>
      </div>
      <section>
        <div className='lg:hidden block'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-[1525px] mx-auto gap-6 lg:gap-15 px-4 mb-10 lg:mb-25  ">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <div
                key={course.id}
                className="flex flex-col items-center rounded-lg bg-white  pb-5 shadow-md hover:shadow-[0_0_20px_#9CA3AF] hover:scale-[1.02] transition-all duration-200 mt-5"
              >
                <div className="w-full p-5 ">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-auto transition-all duration-200 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col justify-start mt-5 gap-2 px-4">
                <div className='flex gap-2 justify-center'>
                <img src="/assets/education.png" alt="education" className="w-[35px] h-[35x]" />
                <p className="poppins-bold text-lg text-[#861F41] mt-1">Education</p>
              </div>
                  <p className="poppins-bold text-xl text-center">{course.title}</p>
                  <p className="poppins-regular text-md text-gray-500 text-center">{course.lessons}</p>
                  <div className='flex justify-center'>
                    <Link to={`/courses/${course.id}`}>
                      <button className="bg-[#861F41] text-white py-2 px-4 cursor-pointer rounded rounded-tr-2xl rounded-bl-2xl group relative overflow-hidden">
                        <span className="relative z-10 flex items-center poppins-regular">
                          View Details
                          <FaArrowRight
                            className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                            size={18}
                          />
                        </span>
                        <span className="absolute inset-0 bg-gradient-to-r from-[#861F41] to-[#dd658d] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500 poppins-regular">
              No courses found for the selected category.
            </div>
          )}
        </div>
        </div>





        <div className='hidden lg:block'>
        <div className="container relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 max-w-[1525px] mx-auto gap-6 lg:gap-10  gap-x-[50px] gap-y-[100px] mt-15 mb-15 ">
      
      {filteredCourses.map((course, index) => (
        <div
          key={index}
          className="card relative flex justify-center items-start w-[350px] max-w-full h-[300px] bg-white mb-13 rounded-[20px] shadow-[0_10px_25px_rgba(0,0,0,0.15)]"
          style={{ '--clr': course.color }}
        >
          <div className="img-box absolute top-5 w-[300px] h-[220px] bg-gray-800 rounded-[12px] overflow-hidden">
            <img src={course.image} alt={course.title} className="absolute top-0 left-0 w-full h-full object-cover " />
          </div>
          <div className="content absolute top-[252px] w-full h-[35px] p-0 px-[30px] text-center overflow-hidden ">
          <div className='flex gap-2 justify-center '>
                <img src="/assets/education.png" alt="education" className="w-[35px] h-[35x]" />
                <p className="poppins-bold text-lg text-[#861F41] mt-1">Education</p>
              </div>
            <h2 className="text-xl poppins-bold mt-5 " style={{ color: 'var(--clr)' }}>{course.title}</h2>
            <p className="text-gray-800 poppins-regular mt-3">{course.lessons}</p>
           
            <div className='flex justify-center mt-5'>
                    <Link to={`/courses/${course.id}`}>
                      <button className="bg-[#861F41] text-white py-2 px-4 cursor-pointer rounded rounded-tr-2xl rounded-bl-2xl group relative overflow-hidden">
                        <span className="relative z-10 flex items-center poppins-regular">
                          View Details
                          <FaArrowRight
                            className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                            size={18}
                          />
                        </span>
                        <span className="absolute inset-0 bg-gradient-to-r from-[#861F41] to-[#dd658d] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                      </button>
                    </Link>
                  </div>
          </div>
        </div>
      ))}
    </div>
    </div>
      </section>
    </div>
  );
}

export default Course;
