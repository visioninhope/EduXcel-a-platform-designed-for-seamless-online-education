import { useEffect, useState } from 'react';
import CourseList from '../components/CourseList';
import { Helmet } from 'react-helmet';
import Slider from 'react-slick';
import { motion, useAnimation } from 'framer-motion'; // Import Framer Motion
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { styles } from '../styles';
import axios from 'axios';
import '../styles/home.css';
import StarsCanvas from '../components/Stars';
import { FaChalkboardTeacher, FaUserGraduate, FaClock } from 'react-icons/fa';
import WhyUsImage from '../assets/why.webp';
import About from '../components/About';
import Faq from '../components/Faq';
import { useInView } from 'react-intersection-observer'; // Import react-intersection-observer

function Home() {
  const [courseData, setCourseData] = useState([]);
  const controlsImage = useAnimation();
  const controlsContent = useAnimation();
  const [refImage, inViewImage] = useInView();
  const [refContent, inViewContent] = useInView();
  useEffect(() => {
    // Fetch course data from your API endpoint
    async function fetchCourses() {
      try {
        const response = await axios.get('https://edu-back-j3mz.onrender.com/api/courses');
        setCourseData(response.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    }

    fetchCourses();
  // Animate the "why.png" image when it comes into view
if (inViewImage) {
  controlsImage.start({
    scale: [0.8, 1.2, 1], // Scale down, then overshoot, and settle
    rotateY: [0, 360], // Spin the image around the Y-axis
    opacity: [0, 1], // Fade in
    transition: {
      duration: 2,
      ease: 'easeInOut',
      bounce: 0.5, // Add a bounce effect for some playfulness
    },
  });
}




  // Animate the content when it comes into view with a magical and floating animation
if (inViewContent) {
  controlsContent.start((index) => ({
    y: 0,
    opacity: 1,
    rotate: [0, (index % 2 === 0 ? 360 : -360)], // Rotate clockwise or counterclockwise
    transition: {
      duration: 1.5,
      delay: index * 0.2, // Staggered delay for each content block
      type: 'spring', // Use spring animation for a more fluid movement
      stiffness: 100,
    },
  }));
}

  }, [controlsImage, inViewImage, controlsContent, inViewContent]);
  const contentBlocks = [
    {
      title: 'Interactive Learning Experiences',
      description: 'Immerse yourself in interactive lessons, quizzes, and assignments designed to make learning engaging and enjoyable.',
    },
    {
      title: 'Expert Instructors & Industry Leaders',
      description: 'Learn from passionate instructors who are experts in their fields and gain insights from industry leaders.',
    },
    {
      title: 'Flexible Learning at Your Fingertips',
      description: 'Embrace flexibility with on-the-go access to course materials, allowing you to learn at your own pace and convenience.',
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    pauseOnHover: true,
    arrows: false,
    draggable: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className={`relative w-full min-h-screen mx-auto`}>
       <Helmet>
        <title>EduXcel - Nurturing Excellence through Online Education</title>
        <meta
          name="description"
          content="Explore our courses and enhance your skills with Eduxcel. Find a wide range of online courses on various topics to boost your knowledge."
        />
        {/* Add structured data for CourseList */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'http://schema.org',
            '@type': 'ItemList',
          })}
        </script>


        <script type="text/javascript" dangerouslySetInnerHTML={{ __html: `
          document.addEventListener('DOMContentLoaded', function () {
            const titleElement = document.querySelector('title');
            const metaDescriptionElement = document.querySelector('meta[name="description"]');
            
            // Extract the blog title from the URL
            const pathArray = window.location.pathname.split('/');
            const decodedBlogTitle = decodeURIComponent(pathArray[pathArray.length - 1]);
            const blogTitle = decodedBlogTitle.replace(/%20/g, ' ').replace(/%28/g, '(').replace(/%29/g, ')');
            
            // Set the title and meta description dynamically
            titleElement.innerText = \`\${blogTitle} - Eduxcel\`;
            
            // Set the meta description based on the blog's overview or description
            const matchingBlog = window.blogsData?.tools.find((blog) => blog.title === decodedBlogTitle || blog.title === blogTitle);
            
            if (matchingBlog) {
              const overviewOrDescription = matchingBlog.overview || (matchingBlog.content && matchingBlog.content.description);
              
              if (overviewOrDescription) {
                metaDescriptionElement.setAttribute('content', overviewOrDescription.join(' '));
              } else {
                // Set a default description if neither overview nor description is found
                metaDescriptionElement.setAttribute('content', 'Explore a variety of educational topics and tutorials on EduXcel. Enhance your knowledge and skills with our high-quality online courses and learning resources.');
              }
            } else {
              // Set a default description if the blog is not found
              metaDescriptionElement.setAttribute('content', 'Explore a variety of educational topics and tutorials on EduXcel. Enhance your knowledge and skills with our high-quality online courses and learning resources.');
            }
          });
        `}} />
      </Helmet>
      

     <div className={`relative top-[10px] max-w-8xl mx-auto ${styles.paddingX} flex flex-col items-center`}>
  <div className="w-full max-w-4xl">
    <Slider {...sliderSettings}>
      <div className="w-full">
        <img
          src="https://sanjaybasket.s3.ap-south-1.amazonaws.com/a2.webp"
          alt="Image 2"
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="w-full">
        <img
          src="https://sanjaybasket.s3.ap-south-1.amazonaws.com/a3.webp"
          alt="Image 3"
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="w-full">
        <img
          src="https://sanjaybasket.s3.ap-south-1.amazonaws.com/a5.webp"
          alt="Image 3"
          className="w-full h-auto object-cover"
        />
      </div>
    </Slider>
  </div>
  <div className={`${styles.sectionHeadText} text-center mb-4`}>Featured Courses</div>
  <p className={`${styles.heroSubText} mt-8 text-white-100 text-center`}>Explore our courses and enhance your skills</p>
  <CourseList courseData={courseData} />
</div>


      <div className={`relative top-[20px] max-w-8xl mx-auto ${styles.paddingX} flex flex-col items-center`}>
        <div className={`mt-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12`}>
          <div className="card">
            <div style={{ fontSize: '3rem', marginBottom: '10px' }}>
              <FaChalkboardTeacher />
            </div>
            <h2 className="text-2xl font-semibold mb-4" style={{ color: '#ffffff', textShadow: '1px 1px 2px #000000' }}>
              Interactive Learning
            </h2>
            <p style={{ fontSize: '16px', color: '#ffffff' }}>
              Dive into interactive lessons, quizzes, and assignments tailored for an immersive learning experience.
            </p>
          </div>
          <div className="card">
            <div style={{ fontSize: '3rem', marginBottom: '10px' }}>
              <FaUserGraduate />
            </div>
            <h2 className="text-2xl font-semibold mb-4" style={{ color: '#ffffff', textShadow: '1px 1px 2px #000000' }}>
              Expert Instructors
            </h2>
            <p style={{ fontSize: '16px', color: '#ffffff' }}>
              Learn from industry luminaries and passionate instructors who excel in the art of teaching.
            </p>
          </div>
          <div className="card">
            <div style={{ fontSize: '3rem', marginBottom: '10px' }}>
              <FaClock />
            </div>
            <h2 className="text-2xl font-semibold mb-4" style={{ color: '#ffffff', textShadow: '1px 1px 2px #000000' }}>
              Flexible Learning
            </h2>
            <p style={{ fontSize: '16px', color: '#ffffff' }}>
              Embrace flexibility in your learning journey with adaptable schedules and on-the-go access to course materials.
            </p>
          </div>
        </div>
        <div className="why-us-section py-16 flex flex-col lg:flex-row items-center">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center mb-12">
            <div className="shining-ring-container">
              <div className="shining-ring"></div>
              <div className="flex-container">
              <motion.img
                  ref={refImage}
                  src={WhyUsImage}
                  alt="Why Choose Us"
                  className="w-full lg:w-full rounded-lg shadow-lg mb-6 lg-mb-0"
                  initial={{ scale: 0, rotateY: 0, opacity: 0 }}
                  animate={controlsImage}
                />
              </div>
            </div>
            <div className="lg:w-1/2 lg:pl-12 why-us-content">
              {contentBlocks.map((block, index) => (
                <motion.div
                  key={index}
                  ref={refContent}
                  custom={index}
                  className="mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={controlsContent}
                >
                  <motion.h3 className="text-3xl font-bold mb-4 text-purple-500">
                    {block.title}
                  </motion.h3>
                  <motion.p className="text-gray-800 mb-6 text-lg">
                    {block.description}
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>


      </div>
       <About/>
      <Faq/>
      <StarsCanvas />
    </section>
  );
}


export default Home;
