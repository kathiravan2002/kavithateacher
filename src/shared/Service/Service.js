export const getCourses = () => {
    return [
      {
        id: 1,
        category: '10th Section',
        title: '10th Physics (SSLC-TN)',
        lessons: '10 Lessons',
        images: '/assets/coursedetails.jpg',
        description: 'A comprehensive course covering the Physics syllabus for 10th grade under the Tamil Nadu SSLC board, including mechanics, optics, and electricity.',
        duration: '6 months',
        instructor: 'Dr. Anil Kumar',
        price: '$99',
        level: 'Beginner'
      },
      {
        id: 2,
        category: '10th Section',
        title: '10th Maths (SSLC-TN)',
        lessons: '12 Lessons',
        images: '/assets/coursedetails.jpg',
        description: 'In-depth course on Mathematics for 10th grade, covering algebra, geometry, and trigonometry, aligned with the Tamil Nadu SSLC curriculum.',
        duration: '6 months',
        instructor: 'Prof. Meena Sharma',
        price: '$89',
        level: 'Beginner'
      },
      {
        id: 3,
        category: 'Computer Course',
        title: 'JAVA Programming',
        lessons: '15 Lessons',
        images: '/assets/coursedetails.jpg',
        description: 'Learn Java programming from basics to advanced concepts, including object-oriented programming, data structures, and algorithms.',
        duration: '4 months',
        instructor: 'Mr. Rajesh Patel',
        price: '$149',
        level: 'Intermediate'
      },
      {
        id: 4,
        category: 'Computer Course',
        title: 'Mastering Tally Course',
        lessons: '8 Lessons',
        images: '/assets/coursedetails.jpg',
        description: 'Master Tally for accounting and financial management with practical examples, covering GST, payroll, and inventory management.',
        duration: '3 months',
        instructor: 'Ms. Priya Gupta',
        price: '$79',
        level: 'Beginner'
      },
      // {
      //   id: 5,
      //   category: 'CBSE Course',
      //   title: 'CBSE Education Syllabus',
      //   lessons: '20 Lessons',
      //   images: '/assets/coursedetails.jpg',
      //   description: 'Complete syllabus coverage for CBSE students, focusing on core subjects like Maths, Science, and English for grades 9-12.',
      //   duration: '8 months',
      //   instructor: 'Dr. Sanjay Verma',
      //   price: '$199',
      //   level: 'All Levels'
      // },
      {
        id: 6,
        category: '11th Section',
        title: '11th Physics (SSLC-TN)',
        lessons: '14 Lessons',
        images: '/assets/coursedetails.jpg',
        description: 'Detailed course on Physics for 11th grade, covering thermodynamics, waves, and modern physics, following the Tamil Nadu SSLC board.',
        duration: '7 months',
        instructor: 'Dr. Anil Kumar',
        price: '$109',
        level: 'Intermediate'
      },
      {
        id: 7,
        category: '11th Section',
        title: '11th Maths (SSLC-TN)',
        lessons: '16 Lessons',
        images: '/assets/coursedetails.jpg',
        description: 'Advanced Mathematics course for 11th grade, including calculus, coordinate geometry, and statistics, aligned with Tamil Nadu SSLC standards.',
        duration: '7 months',
        instructor: 'Prof. Meena Sharma',
        price: '$99',
        level: 'Intermediate'
      },
      {
        id: 8,
        category: '12th Section',
        title: '12th Physics (SSLC-TN)',
        lessons: '18 Lessons',
        images: '/assets/coursedetails.jpg',
        description: 'Comprehensive Physics course for 12th grade, covering electromagnetism, optics, and quantum mechanics, Tamil Nadu SSLC board.',
        duration: '8 months',
        instructor: 'Dr. Anil Kumar',
        price: '$119',
        level: 'Advanced'
      },
      {
        id: 9,
        category: '12th Section',
        title: '12th Maths (SSLC-TN)',
        lessons: '20 Lessons',
        images: '/assets/coursedetails.jpg',
        description: 'In-depth Mathematics course for 12th grade, covering differential equations, vectors, and probability, Tamil Nadu SSLC curriculum.',
        duration: '8 months',
        instructor: 'Prof. Meena Sharma',
        price: '$109',
        level: 'Advanced'
      },
    ];
  };
  
  export const getCourseById = (id) => {
    return getCourses().find((course) => course.id === parseInt(id));
  };