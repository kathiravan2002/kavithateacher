import { Helmet } from "react-helmet";

function Helmetcomponent({ title }) {
  return (
    <Helmet>
    <title>{title}</title>
    <meta name="keywords" content="Kavitha Teacher, Kavitha Tuition Center, tuition classes, home tuition, private tuition, online tuition, school tuition, math tuition, science tuition, English tuition, tuition for kids, tuition in [Your City], best tuition center, personalized coaching, academic support, exam preparation, board exam coaching, tuition for CBSE, tuition for ICSE, state board tuition, experienced tutor, after school classes,tuition center in Chennai, best tuition in Chennai, Kavitha tuition Chennai, home tuition Chennai" />
    <meta name="description" content="At Kavitha Teacher Tuition, we understand that every student learns differently. Our personalized approach ensures each child receives the guidance they need to grow, excel, and succeed." />
    <meta name="author" content="Kavitha Teacher Editorial Team" />
    <meta name="robots" content="index, follow" />

    <meta property="og:type" content="website" />
    <meta property="og:title" content="Kavitha Teacher" />
    <meta property="og:description" content="At Kavitha Teacher Tuition, we understand that every student learns differently. Our personalized approach ensures each child receives the guidance they need to grow, excel, and succeed." />
    <meta property="og:url" content="" />
    <meta property="og:image" content="" />

    <link rel="icon" type="image/svg+xml" href="" />
    <link rel="canonical" href="" />
  </Helmet>
  );
};

export default Helmetcomponent