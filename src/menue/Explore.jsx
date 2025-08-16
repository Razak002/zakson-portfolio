// import React from 'react'
// import { FaArrowRight } from 'react-icons/fa'

// function Explore() {
//   return (
//     <div className='w-[100%] h-60 flex md:text-xl justify-center items-center md:p-52 '>
//         <h2 className=' text-white'>Explore more on my Github page </h2>
//         <div className='ml-9 mt-3 down-arrow'>
//             <a href='https://github.com/Razak002' >
//                 <FaArrowRight className='text-gray-400 text-2xl animate-bounce' />
//                 </a>
//             </div>
//     </div>
//   )
// }

// export default Explore
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

function Explore() {
  return (
    <div className="w-full min-h-[50vh] flex justify-center items-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-center gap-6 p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-gray-500/20 shadow-lg hover:border-gray-500/40 transition duration-300"
      >
        {/* Text */}
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-white text-lg md:text-2xl font-semibold text-center md:text-left"
        >
          Explore more of my work on{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-600">
            GitHub
          </span>
        </motion.h2>

        {/* Arrow Button */}
        <motion.a
          href="https://github.com/Razak002"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          whileHover={{ scale: 1.15, rotate: 5 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
          viewport={{ once: true }}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-gray-200 to-gray-600 text-white"
        >
          <FaArrowRight className="text-2xl animate-bounce items-center text-center mt-2" />
        </motion.a>
      </motion.div>
    </div>
  );
}

export default Explore;
