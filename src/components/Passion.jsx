// import React from 'react';

// function Passion() {
//   return (
//     <div className="bg-zinc-800 p-6 w-[100%] h-auto md:p-10 text-white flex flex-col items-center">
      
//       {/* Title Section */}
//       <h2 className="text-3xl md:text-4xl text-white text-center font-serif font-bold mb-4">
//         Passion Driven
//       </h2>
      
//       <h1 className="text-white text-lg md:text-xl font-kalam text-center mb-2">
//         This is exactly what I know how to do best
//       </h1>

//       <p className="text-center mb-6 text-sm md:text-base font-kalam">
//         I develop websites with amazing user experiences.
//       </p>

//       {/* Divider Line */}
//       <div className="w-24 h-1 bg-white my-4"></div>

//       {/* Secondary Section */}
//       <div className="py-7 mt-10 md:mt-20">
//         <h2 className="text-white text-lg md:text-xl text-center font-kalam mb-2">
//           I interpret amazing ideas into reality
//         </h2>
        
//         <h2 className="text-white text-xl text-center font-kalam mb-4">
//           On the Web
//         </h2>
        
//         <p className="text-center text-sm md:text-base font-kalam">
//           Following strategies to produce the best user experiences.
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Passion;
import React from "react";
import { motion } from "framer-motion";

function Passion() {
  // Variants for staggering
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="relative overflow-hidden">
      <motion.div
        className="relative p-8 md:p-16 text-gray-200 flex flex-col items-center"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Title Section */}
        <motion.h2
          variants={fadeInUp}
          className="text-3xl md:text-4xl font-serif font-bold text-center bg-gradient-to-r from-gray-400 to-gray-100 bg-clip-text text-transparent"
        >
          Passion Driven
        </motion.h2>

        <motion.h1
          variants={fadeInUp}
          className="text-lg md:text-xl font-kalam text-center mt-3 text-gray-300"
        >
          This is exactly what I know how to do best
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="text-center text-sm md:text-base font-kalam mt-2 max-w-xl text-gray-400"
        >
          I develop websites with amazing user experiences.
        </motion.p>

        {/* Divider Line */}
        <motion.div
          variants={fadeInUp}
          className="w-24 h-1 bg-gradient-to-r from-gray-500 to-gray-300 rounded-full my-6 shadow-lg shadow-gray-600/30"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        ></motion.div>

        {/* Secondary Section */}
        <motion.div
          variants={container}
          className="py-8 mt-8 md:mt-16 text-center max-w-2xl space-y-2"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-lg md:text-xl font-kalam text-gray-400"
          >
            I interpret amazing ideas into reality
          </motion.h2>

          <motion.h2
            variants={fadeInUp}
            className="text-xl md:text-2xl font-kalam font-bold text-gray-100"
          >
            On the <span className="text-gray-300">Web</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-sm md:text-base font-kalam text-gray-400"
          >
            Following strategies to produce the best user experiences.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Passion;


