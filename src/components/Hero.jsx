import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
   import razakImage from "../assets/razak2.webp";

function Hero() {
  const imageUrl = razakImage

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

