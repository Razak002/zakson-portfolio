import React from "react";
import { motion } from "framer-motion";

function Skills() {
  // Variants
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
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const skills = [
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg",
      alt: "HTML5",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg",
      alt: "CSS3",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      alt: "JavaScript",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg",
      alt: "Node.js",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg",
      alt: "MongoDB",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg",
      alt: "Tailwind",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg",
      alt: "Express.js",
      bg: true,
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg",
      alt: "Bootstrap",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
      alt: "React",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain-wordmark.svg",
      alt: "Git",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg",
      alt: "VS Code",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg",
      alt: "Next.js",
      bg: true,
    },
  ];

  return (
    <div
      id="skills"
      className="relative p-6 w-full h-auto md:p-20 text-white overflow-hidden"
    >
      {/* Title Section */}
      <motion.div
        className="relative text-center mb-12 z-10"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h3
          variants={fadeInUp}
          className="text-4xl md:text-5xl font-serif font-bold bg-gradient-to-r from-gray-400 to-gray-100 bg-clip-text text-transparent tracking-wide drop-shadow-lg"
        >
          Technical Stack
        </motion.h3>
        <motion.h4
          variants={fadeInUp}
          className="text-lg mt-3 text-gray-300"
        >
          ─── Page <strong className="text-white">03</strong>
        </motion.h4>
      </motion.div>

      {/* Description Section */}
      <motion.div
        className="relative text-white font-kalam text-sm md:text-lg leading-relaxed max-w-3xl mx-auto text-center mb-14 opacity-90 z-10"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.p variants={fadeInUp}>
          Expertise in <strong>Full-Stack Development</strong> utilizing JavaScript, modern CSS architectures, and responsive design patterns.
        </motion.p>
        <motion.p variants={fadeInUp}>
          Advanced implementation of component-based architectures with <strong>React</strong> and <strong>Next.js</strong> for optimized performance.
        </motion.p>
        <motion.p variants={fadeInUp}>
          Engineering robust back-end services and RESTful APIs using <strong>Node.js</strong> and <strong>Express</strong>.
        </motion.p>
        <motion.p variants={fadeInUp}>
          Strategic data modeling and server-side management with <strong>MongoDB</strong> and <strong>Firebase</strong>.
        </motion.p>
        <motion.p variants={fadeInUp}>
          Proficient in CI/CD workflows, Git version control, and cloud-native deployments via <strong>Vercel</strong> and <strong>Railway</strong>.
        </motion.p>
      </motion.div>

      {/* Skills Icons */}
      <motion.div
        className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-5xl mx-auto z-10"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={popIn}
            whileHover={{ scale: 1.15 }}
            transition={{ type: "spring", stiffness: 200, damping: 12 }}
            className="flex justify-center items-center bg-gradient-to-tr from-gray-300/10 via-gray-800/30 to-gray-300/10 backdrop-blur-lg rounded-xl p-4 shadow-lg"
          >
            <img
              src={skill.src}
              alt={skill.alt}
              className={`w-16 md:w-20 ${skill.bg ? "bg-white p-2 rounded" : ""}`}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Skills;