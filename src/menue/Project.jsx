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

import React from 'react';
import { FaExternalLinkSquareAlt, FaGithub } from 'react-icons/fa';
import { WORKS } from '../distl/data';

function Project() {
  return (
    <div
      id="projects"
      className="relative w-full overflow-hidden"
    >
      <div className="absolute inset-0  pointer-events-none"></div>
      <div className="relative p-2 py-12 z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h3 className="text-4xl md:text-5xl font-serif font-bold tracking-wide text-white drop-shadow-lg">
            Projects
          </h3>
          <h4 className="text-lg mt-3 text-gray-300">
            ─── Page <strong className="text-white">04</strong>
          </h4>
          <p className="text-gray-300 max-w-3xl mx-auto mt-4 font-kalam text-sm md:text-lg">
            I build web apps with well-oriented user interfaces (UI), fully responsive layouts, strong data protection,
            fast loading times, and built-in integrations.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 gap-10 px-4">
          {WORKS.map(({ id, image, title, github, demo, content }) => (
            <div
              key={id}
              className="bg-gradient-to-tr from-gray-500/10 via-gray-800/50 to-gray-500/10 rounded-2xl shadow-lg backdrop-blur-lg p-4 transition-transform transform hover:scale-105 duration-300 hover:shadow-gray-500"
            >
              {/* Project Image */}
              <a href={demo} target="_blank" rel="noopener noreferrer">
                <img
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
                <a
                  className="text-white text-xl hover:text-pink-400 transition-transform duration-200 hover:scale-110"
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
                <a
                  className="text-white text-xl hover:text-purple-400 transition-transform duration-200 hover:scale-110"
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkSquareAlt />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
