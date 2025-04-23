import React, { useEffect, useState } from 'react'
import Coursedetails from '../shared/components/Coursedetails.jsx'
import { useParams } from 'react-router-dom';
import { getCourseById } from '../shared/Service/Service.js';
import Helmetcomponent from './Helmetcomponent.jsx';

function Coursedetailpage() {
 const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const courseData = getCourseById(id);
    if (courseData) {
      setCourse(courseData);
      setLoading(false);
    } else {
      setError('Course not found');
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">{error}</div>;
  }


  return (

    <div>
       <Helmetcomponent title={'Course Detail - Kavitha Teacher'} />
      <Coursedetails  course={course} />
    </div>

  )
}

export default Coursedetailpage