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
          a productive <span className="text-gray-300 font-bold">Software Engineer</span> with a deep passion for building robust, scalable applications. 
          I am self-motivated and enthusiastic about architecting high-performance systems and creating seamless digital experiences. 
          I thrive on solving complex technical challenges and staying at the forefront of modern software architecture.
        </motion.p>

        {/* Approach */}
        <motion.div
          variants={fadeInUp}
          className="space-y-3"
        >
          <h2 className="text-2xl font-openSans">Engineering & Philosophy</h2>
          <p className="font-kalam text-base opacity-90 max-w-3xl leading-relaxed">
            I believe in an <span className="underline font-semibold">engineering-first approach</span>. 
            My goal is to develop software that is not only visually striking but also architecturally sound, 
            fast, and maintainable. I prioritize clean code, scalability, and industry best practices 
            to ensure every product is built for the long term.
          </p>
        </motion.div>

        {/* Collaboration */}
        <motion.div
          variants={fadeInUp}
          className="space-y-3"
        >
          <h2 className="text-2xl font-openSans">Team Dynamics & Communication</h2>
          <p className="font-kalam text-base opacity-90 max-w-3xl leading-relaxed">
            I thrive in collaborative environments and am always ready to work in teams. 
            I bridge the gap between complex technical logic and user-centric design, 
            communicating architectural concepts clearly while actively contributing to a shared vision 
            across cross-functional teams.
          </p>
        </motion.div>

        {/* Passion */}
        <motion.div
          variants={fadeInUp}
          className="space-y-3"
        >
          <h2 className="text-2xl font-openSans">Continuous Growth</h2>
          <p className="font-kalam text-base opacity-90 max-w-3xl leading-relaxed">
            For me, software engineering is a lifelong <span className="underline font-semibold">passion</span>. 
            Outside of core development, I am always ready to learn more, exploring low-level systems, 
            contributing to open source, and sharing technical insights with the global developer community.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default About;