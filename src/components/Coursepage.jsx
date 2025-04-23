import React, { useEffect, useState } from 'react'
import Course from '../shared/components/Course'
import { getCourses } from '../shared/Service/servicecourse';
import Helmetcomponent from './Helmetcomponent';

function Coursepage() {

  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState('');

  useEffect(() => {
    setCourses(getCourses());
  }, []);

  const categoryOptions = [
    { name: 'All Categories', value: '' },
    { name: '10th Section', value: '10th Section' },
    { name: '11th Section', value: '11th Section' },
    { name: '12th Section', value: '12th Section' },
    { name: 'Computer Course', value: 'Computer Course' },
    // { name: 'CBSE Course', value: 'CBSE Course' }
  ];

  const filteredCourses = selectedCourse
    ? courses.filter((course) => course.category === selectedCourse)
    : courses;


  return (
    <div>
       <Helmetcomponent title={'Course - Kavitha Teacher'} />
      <Course courses={courses} selectedCourse={selectedCourse} categoryOptions={categoryOptions} filteredCourses={filteredCourses} setSelectedCourse={setSelectedCourse}/>
    </div>
  )
}

export default Coursepage