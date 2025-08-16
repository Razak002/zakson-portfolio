// import React from 'react'


// function About() {
//   return (
//     <div id='about'>
//       <div className='w-[100%] md:py-6 justify-center items-center p-2 md:p-20'>

//         <div className="text-white skills-left md:text-xl font-Gothic animate__animated animate__zoomIn">
//           <h3 className='py-4'>About</h3>
//           <h4 className='p-2'>
//             ───&nbsp;&nbsp;Page <strong >02</strong>
//           </h4>
//         </div>
//         <p className='text-white text-left  py-3 font-kalam'>

//           I'm Aliyu Abdulrazak, a passionate web developer with some years of experience crafting beautiful and functional websites. I love bringing ideas to life through code and creating seamless online experiences.

//           Throughout my career, I've worked with diverse clients from various industries, helping them establish a strong online presence and achieve their digital goals, and I am constantly staying updated with the latest web development trends and technologies.
//           </p>

//           <h2 className='text-xl py-3 text-white font-openSans'>Approach and Philosophy:</h2>

//         <p className='text-white text-sm font-kalam'>  I believe in a user-centric approach to web development. My goal is to create websites that are not only visually appealing but also intuitive, fast, and accessible across different devices. I prioritize clean and maintainable code, adhering to industry best practices and following the latest web standards.</p>

//        <h2 className='text-xl  py-3 text-white font-openSans'>Collaboration and Communication:</h2>   

//         <p className='text-white text-sm font-kalam'>  I thrive in collaborative environments, working closely with clients, designers, and other team members. I actively listen to their ideas and requirements, translating them into functional and visually captivating websites. My strong communication skills enable me to effectively convey technical concepts to non-technical stakeholders, fostering productive and smooth collaborations.</p>

//         <h2 className='text-xl  py-3 text-white font-openSans'>Passion and Personal Interests:</h2>  

//          <p className='text-white text-sm font-kalam'> Web development is not just a job for me; it's my passion. Outside of work, I enjoy exploring new web technologies and experimenting with personal projects. I'm also an avid blogger, where I share insights and tips on web development to contribute to the larger developer community.    </p>



//       </div>

//     </div>
//   )
// }

// export default About

import React from "react";
import { motion } from "framer-motion";

function About() {
  // Parent container for staggered children
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  // Fade-in + slide-up variant
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section
      id="about"
      className="relative overflow-hidden py-16 px-6 md:px-20"
    >
      <motion.div
        className="relative max-w-5xl mx-auto text-white space-y-10"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Section Header */}
        <motion.div
          className="text-center"
          variants={fadeInUp}
        >
          <h3 className="text-4xl font-serif font-bold bg-gradient-to-r from-gray-400 to-gray-100 bg-clip-text text-transparent">
            About
          </h3>
          <h4 className="text-sm opacity-70 mt-2">
            ─── Page <strong>02</strong>
          </h4>
        </motion.div>

        {/* Intro */}
        <motion.p
          variants={fadeInUp}
          className="font-kalam text-lg leading-relaxed max-w-3xl mx-auto md:mx-0"
        >
          I'm <span className="underline font-semibold">Aliyu Abdulrazak</span>,
          a passionate web developer with years of experience crafting beautiful and functional websites.
          I love bringing ideas to life through code and creating seamless online experiences.
          I've worked with clients across diverse industries, helping them build a strong online presence
          while staying ahead with the latest web technologies.
        </motion.p>

        {/* Approach */}
        <motion.div
          variants={fadeInUp}
          className="space-y-3"
        >
          <h2 className="text-2xl font-openSans">Approach & Philosophy</h2>
          <p className="font-kalam text-base opacity-90 max-w-3xl leading-relaxed">
            I believe in a <span className="underline font-semibold">user-centric approach</span> to web development.
            My goal is to create websites that are visually appealing, intuitive, fast, and accessible on all devices.
            I prioritize clean, maintainable code that follows industry best practices.
          </p>
        </motion.div>

        {/* Collaboration */}
        <motion.div
          variants={fadeInUp}
          className="space-y-3"
        >
          <h2 className="text-2xl font-openSans">Collaboration & Communication</h2>
          <p className="font-kalam text-base opacity-90 max-w-3xl leading-relaxed">
            I thrive in collaborative environments, working closely with clients, designers, and teams.
            I actively listen to ideas, translate them into functional designs,
            and communicate technical concepts in a clear and approachable way.
          </p>
        </motion.div>

        {/* Passion */}
        <motion.div
          variants={fadeInUp}
          className="space-y-3"
        >
          <h2 className="text-2xl font-openSans">Passion & Personal Interests</h2>
          <p className="font-kalam text-base opacity-90 max-w-3xl leading-relaxed">
            Web development isn’t just my job — it’s my{" "}
            <span className="underline font-semibold">passion</span>.
            Outside of work, I explore new technologies, work on personal projects,
            and share knowledge through blogging to help the developer community grow.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default About;
