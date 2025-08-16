import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

function Hero() {
  const imageUrl = "https://i.ibb.co/BK3vZT84/razak2.png";

  // Variants for staggered animation
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div
      id="main"
      className="bg-gradient-to-r min-h-screen flex items-center justify-center mt-20 sm:mt-10"
    >
      <motion.div
        className="p-6 md:flex md:items-center md:justify-between md:gap-10 max-w-6xl mx-auto"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Text Section */}
        <motion.div
          className="md:w-1/2 text-center md:text-left space-y-5"
          variants={container}
        >
          <motion.h1
            variants={fadeInUp}
            className="text-white text-4xl md:text-5xl lg:text-6xl font-serif font-bold"
          >
            Aliyu Abdulrazak
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-white text-lg md:text-xl font-kalam"
          >
            I'm a productive Software Developer with great passions. I am
            self-motivated, enthusiastic, and always ready to work in teams and
            to learn more.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center md:justify-start gap-4 pt-2"
          >
            <Link
              to="projects"
              smooth={true}
              duration={800}
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-gray-500 to-gray-700 text-white font-medium shadow-lg hover:shadow-white/50 hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              View Projects
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={800}
              className="px-6 py-3 rounded-lg border border-gray-500 text-gray-400 font-medium hover:bg-gray-500 hover:text-white transition-all duration-300 cursor-pointer"
            >
              Contact Me
            </Link>
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="md:w-1/2 flex justify-center relative mt-20 sm:mt-10"
          variants={fadeInUp}
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ type: "spring", stiffness: 120 }}
        >
          <motion.img
            src={imageUrl}
            alt="Aliyu Abdulrazak"
            className="w-64 sm:w-80 md:w-96 lg:w-[80%] rounded-2xl shadow-2xl"
            loading="lazy"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Hero;


// import React from "react";
// import { Link } from "react-scroll";

// function Hero() {
//   const imageUrl = "https://i.ibb.co/BK3vZT84/razak2.png";

//   return (
//     <section
//       id="main"
//       className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 px-6"
//     >
//       <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">
//         {/* Text Section */}
//         <div className="md:w-1/2 text-center md:text-left space-y-6">
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent animate-fade-in-down">
//             Aliyu Abdulrazak
//           </h1>
//           <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed animate-fade-in-up">
//             I’m a productive Software Developer with great passion. I am
//             self-motivated, enthusiastic, and always ready to work in teams and
//             learn more.
//           </p>

//           {/* Call to Actions */}
//           <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
//             <Link
//               to="projects"
//               smooth={true}
//               duration={800}
//               className="px-6 py-3 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium shadow-lg hover:shadow-pink-500/50 hover:scale-105 transition-all duration-300 cursor-pointer"
//             >
//               View Projects
//             </Link>
//             <Link
//               to="contact"
//               smooth={true}
//               duration={800}
//               className="px-6 py-3 rounded-lg border border-pink-500 text-pink-400 font-medium hover:bg-pink-500 hover:text-white transition-all duration-300 cursor-pointer"
//             >
//               Contact Me
//             </Link>
//           </div>
//         </div>

//         {/* Image Section */}
//         <div className="md:w-1/2 flex justify-center relative animate-fade-in mt-10">
//           <div className="relative group">
//             <img
//               src={imageUrl}
//               alt="Aliyu Abdulrazak"
//               className="w-64 sm:w-80 md:w-96 lg:w-[80%] rounded-2xl shadow-2xl transform group-hover:scale-105 group-hover:rotate-1 transition-all duration-500"
//               loading="lazy"
//             />
//             <div className="absolute inset-0 rounded-2xl "></div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Hero;
