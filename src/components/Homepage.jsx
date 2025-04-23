import React from 'react'
import Home from '../shared/components/home'
import { useNavigate } from 'react-router-dom';

function Homepage() {

  const navigate = useNavigate()

  const testimonials = [
    {
      quote: "Kavitha Teacher explains every concept with so much clarity and patience. Her classes helped me improve in maths and science. I now feel more confident academically.",
      author: "Sneha, Class 10",
    },
    {
      quote: "We are very happy with the progress our child has made. Kavitha Madam’s teaching style is effective, engaging, and full of personal attention to students’ needs.",
      author: "Mr. Karthik, Parent",
    },
    {
      quote: "The online classes are easy to attend from anywhere. Kavitha Miss makes tough subjects simple. Her guidance really helped me prepare better for my final exams.",
      author: " Rahul, Class 12 (Commerce)",
    },
    {
      quote: "Kavitha Teacher’s tuition is truly a blessing. She understands each student’s learning style and supports them individually. My daughter enjoys learning and shows consistent improvement.",
      author: " Mrs. Latha, Parent of a Class 10 student",
    },
    {
      quote: "Thanks to Kavitha Teacher, I’ve improved my marks and understanding. Her classes are interactive, and she always answers our doubts clearly and patiently. Highly recommended tuition!",
      author: "Ananya, Class 9",
    },
  ];
  return (
    <div> <Home navigate={navigate} testimonials={testimonials}/></div>
  )
}

export default Homepage