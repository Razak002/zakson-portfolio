// import React from 'react';

// function Hero() {
//   const imageUrl = 'https://i.ibb.co/BK3vZT84/razak2.png';

//   return (
//     <div id="main" className="bg-gradient-to-r min-h-screen flex items-center justify-center">
//       <div className="p-6 md:flex md:items-center md:justify-between md:gap-10  max-w-6xl mx-auto">

//         <div className="md:w-1/2 text-center md:text-left space-y-5">
//           <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-serif font-bold">
//             Aliyu Abdulrazak
//           </h1>
//           <p className="text-white text-lg md:text-xl font-kalam animate__animated animate__fadeInLeft animate__slow">
//             I'm a productive Software Developer with great passions. I am self-motivated, enthusiastic, and always ready to work in teams and to learn more.
//           </p>
//         </div>
//         <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center overflow-hidden">
//           <a href="https://ibb.co/vv5r3h1" target="_blank" rel="noopener noreferrer">
//             <img
//               src={imageUrl}
//               alt="Aliyu Abdulrazak"
//               className="w-64 sm:w-80 md:w-96 lg:w-[70%] rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
//               loading="lazy"
//             />
//           </a>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default Hero;

import React from "react";
import { Link } from "react-scroll";

function Hero() {
  const imageUrl = "https://i.ibb.co/BK3vZT84/razak2.png";

  return (
    <section
      id="main"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 px-6"
    >
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent animate-fade-in-down">
            Aliyu Abdulrazak
          </h1>
          <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed animate-fade-in-up">
            I’m a productive Software Developer with great passion. I am
            self-motivated, enthusiastic, and always ready to work in teams and
            learn more.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
            <Link
              to="projects"
              smooth={true}
              duration={800}
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium shadow-lg hover:shadow-pink-500/50 hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              View Projects
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={800}
              className="px-6 py-3 rounded-lg border border-pink-500 text-pink-400 font-medium hover:bg-pink-500 hover:text-white transition-all duration-300 cursor-pointer"
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center relative animate-fade-in mt-10">
          <div className="relative group">
            <img
              src={imageUrl}
              alt="Aliyu Abdulrazak"
              className="w-64 sm:w-80 md:w-96 lg:w-[80%] rounded-2xl shadow-2xl transform group-hover:scale-105 group-hover:rotate-1 transition-all duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 rounded-2xl "></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
