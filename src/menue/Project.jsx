// import React from 'react'
// import { FaExternalLinkSquareAlt, FaGithub } from 'react-icons/fa'
// import { WORKS } from '../distl/data'

// function Project() {


//   return (
//     <div id='projects'>
//       <div className='w-[100%]'>
//         <div className='p-2 py-6'>

//           <div className="text-white skills-left ">
//             <h3 className='py-4'>Project</h3>
//             <h4 className='p-2'>
//               ───&nbsp;&nbsp;Page<strong>04</strong>
//             </h4>
//           </div>
//           <p className='text-white text-left font-kalam py-3'>I build web apps with well-oriented user interface (UI) and support, fully resonsive  strong data protection, fast loading time and built-in integrations</p>
//         </div>
//         <div className=' bg-zinc-800 py-4'>
//           <div className='grid md:grid-cols-2 gap-8 ml-7'>
//             {WORKS.map(({ id, image, title, github, demo, content }) => {

//               return (
//                 <div key={id} className='  rounded-xl p-3 '>
//                   <div className=''>
//                     <a href={demo}>
//                       <img src={image} alt='images' className='w-2/3 md:w-4/6 rounded-xl md:rounded-3xl p-2 md:p-4 ' 
//                        loading='lazy'
//                       />
//                     </a>
//                   </div>
//                   <div><h1 className='text-white p-2 md:p-4 text-xl font-serif hover:ani'>{title}</h1></div>
//                   <p className='text-white p-2 font-kalam'>{content}</p>
//                   <div className='flex gap-4 ml-3'>
//                     <a className='text-lg pt-2 text-white md:text-2xl cursor-pointer duration-150 hover:scale-110' href={github} target='_blank'
//                       rel='noopener noreferrer'>
//                       <FaGithub />
//                     </a>
//                     <a className='text-lg pt-2 text-white md:text-2xl cursor-pointer duration-150 hover:scale-110' href={demo} target='_blank'
//                       rel='noopener noreferrer'>
//                       <FaExternalLinkSquareAlt />

//                     </a>
//                   </div>





//                 </div>
//               )
//             })}

//           </div>

//         </div>

//       </div>
//     </div>

//   )
// }


// export default Project

import React from "react";
import { FaExternalLinkSquareAlt, FaGithub } from "react-icons/fa";
import { WORKS } from "../distl/data";
import { motion } from "framer-motion";

function Project() {
  // Animation Variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const popIn = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div id="projects" className="relative w-full overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"></div>
      <div className="relative p-2 py-12 z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h3
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-serif font-bold tracking-wide text-white drop-shadow-lg"
          >
            Projects
          </motion.h3>
          <motion.h4
            variants={fadeInUp}
            className="text-lg mt-3 text-gray-300"
          >
            ─── Page <strong className="text-white">04</strong>
          </motion.h4>
          <motion.p
            variants={fadeInUp}
            className="text-gray-300 max-w-3xl mx-auto mt-4 font-kalam text-sm md:text-lg"
          >
            I build web apps with well-oriented user interfaces (UI), fully responsive layouts,
            strong data protection, fast loading times, and built-in integrations.
          </motion.p>
        </motion.div>

        {/* Project Cards */}
        <motion.div
          className="grid md:grid-cols-2 gap-10 px-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {WORKS.map(({ id, image, title, github, demo, content }) => (
            <motion.div
              key={id}
              variants={popIn}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="bg-gradient-to-tr from-gray-500/10 via-gray-800/50 to-gray-500/10 rounded-2xl shadow-lg backdrop-blur-lg p-4"
            >
              <a href={demo} target="_blank" rel="noopener noreferrer">
                <motion.img
                  whileHover={{ scale: 1.02 }}
                  src={image}
                  alt={title}
                  className="w-full rounded-xl border border-white/10 hover:border-pink-400/30 transition duration-300"
                  loading="lazy"
                />
              </a>

              {/* Project Title */}
              <h1 className="text-white mt-4 text-xl md:text-2xl font-serif">
                {title}
              </h1>

              {/* Description */}
              <p className="text-gray-300 mt-2 font-kalam text-sm md:text-base leading-relaxed">
                {content}
              </p>

              {/* Links */}
              <div className="flex gap-4 mt-4">
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  className="text-white text-xl hover:text-pink-400 transition-colors duration-200"
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  className="text-white text-xl hover:text-purple-400 transition-colors duration-200"
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkSquareAlt />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Project;
