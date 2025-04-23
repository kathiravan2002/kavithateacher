export const getCourses = () => {
    return [
      {
        id: 1,
        category: '10th Section',
        title: '10th Physics (SSLC-TN)',
        lessons: '0 Lessons',
        image: '/assets/image2.jpg',
        description: 'Comprehensive course covering the Physics syllabus for 10th grade under the Tamil Nadu SSLC board.'
      },
      {
        id: 2,
        category: '10th Section',
        title: '10th Maths (SSLC-TN)',
        lessons: '0 Lessons',
        image: '/assets/image2.jpg',
        description: 'In-depth course on Mathematics for 10th grade, aligned with the Tamil Nadu SSLC curriculum.'
      },
      {
        id: 3,
        category: 'Computer Course',
        title: 'JAVA Programming',
        lessons: '0 Lessons',
        image: '/assets/image2.jpg',
        description: 'Learn Java programming from basics to advanced concepts, suitable for beginners and intermediates.'
      },
      {
        id: 4,
        category: 'Computer Course',
        title: 'Mastering Tally Course',
        lessons: '0 Lessons',
        image: '/assets/image2.jpg',
        description: 'Master Tally for accounting and financial management with practical examples.'
      },
      // {
      //   id: 5,
      //   category: 'CBSE Course',
      //   title: 'CBSE Education Syllabus',
      //   lessons: '0 Lessons',
      //   image: '/assets/image2.jpg',
      //   description: 'Complete syllabus coverage for CBSE students, focusing on core subjects.'
      // },
      {
        id: 6,
        category: '11th Section',
        title: '11th Physics (SSLC-TN)',
        lessons: '0 Lessons',
        image: '/assets/image2.jpg',
        description: 'Detailed course on Physics for 11th grade, following the Tamil Nadu SSLC board.'
      },
      {
        id: 7,
        category: '11th Section',
        title: '11th Maths (SSLC-TN)',
        lessons: '0 Lessons',
        image: '/assets/image2.jpg',
        description: 'Advanced Mathematics course for 11th grade, aligned with Tamil Nadu SSLC standards.'
      },
      {
        id: 8, // Fixed duplicate ID
        category: '12th Section',
        title: '12th Physics (SSLC-TN)',
        lessons: '0 Lessons',
        image: '/assets/image2.jpg',
        description: 'Comprehensive Physics course for 12th grade, Tamil Nadu SSLC board.'
      },
      {
        id: 9, // Fixed duplicate ID
        category: '12th Section',
        title: '12th Maths (SSLC-TN)',
        lessons: '0 Lessons',
        image: '/assets/image2.jpg',
        description: 'In-depth Mathematics course for 12th grade, Tamil Nadu SSLC curriculum.'
      },
      
    ];
  };
  
  export const getCourseById = (id) => {
    return getCourses().find((course) => course.id === parseInt(id));
  };