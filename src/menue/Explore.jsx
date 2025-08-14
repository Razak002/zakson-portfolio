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

import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

function Explore() {
  return (
    <div className="w-full min-h-[50vh] flex justify-center items-center bg-gradient-to-br from-gray-900 via-black to-gray-900 px-6">
      <div className="flex flex-col md:flex-row items-center gap-6 p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-pink-500/20 shadow-lg hover:border-pink-500/40 transition duration-300">
        
        {/* Text */}
        <h2 className="text-white text-lg md:text-2xl font-semibold text-center md:text-left">
          Explore more of my work on{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
            GitHub
          </span>
        </h2>

        {/* Arrow Button */}
        <a
          href="https://github.com/Razak002"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:scale-110 transition duration-300"
        >
          <FaArrowRight className="text-2xl animate-bounce" />
        </a>
      </div>
    </div>
  );
}

export default Explore;
