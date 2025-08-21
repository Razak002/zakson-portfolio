

import React, { useState } from "react";
import { FaAlignRight } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav((prev) => !prev);
  };

  const navLinks = [
    { id: "main", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  // Variants for smoother animation
  const menuVariants = {
    hidden: { x: "100%" },
    visible: { x: 0, transition: { type: "spring", stiffness: 80, damping: 20 } },
    exit: { x: "100%", transition: { duration: 0.3 } },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.4 },
    }),
  };

  return (
    <div className="flex justify-between h-20 items-center px-6 text-white fixed w-full top-0 z-50 shadow-lg bg-black/40 backdrop-blur-md">
      {/* Logo */}
      <h1 className="text-3xl font-extrabold font-kalam bg-gradient-to-r from-gray-500 via-white to-gray-800 bg-clip-text text-transparent tracking-wider cursor-pointer">
        RA<br />ZAK.
      </h1>

      {/* Desktop Nav */}
      <ul className="hidden md:flex space-x-8 font-medium ">
        {navLinks.map((link) => (
          <li key={link.id} className="relative group">
            <Link
              to={link.id}
              smooth={true}
              duration={800}
              className="cursor-pointer transition-colors duration-300 hover:text-gray-400"
            >
              {link.label}
            </Link>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gray-400 transition-all group-hover:w-full"></span>
          </li>
        ))}
      </ul>

      {/* Mobile Toggle */}
      <div onClick={handleNav} className="block md:hidden cursor-pointer z-50">
        {nav ? (
          <AiOutlineClose
            size={26}
            className="hidden md:block hover:text-gray-400 transition-colors"
          />
        ) : (
          <FaAlignRight
            size={26}
            className="hover:text-gray-400 transition-colors"
          />
        )}
      </div>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {nav && (
          <motion.div
            key="mobileMenu"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className="fixed top-0 right-0 w-[75%] sm:w-[60%] h-full backdrop-blur-lg bg-black/80 border-l border-gray-700 flex flex-col"
          >
            <div className="flex justify-end items-center p-5 border-b border-gray-700">
              <AiOutlineClose
                size={26}
                onClick={handleNav}
                className="cursor-pointer hover:text-gray-400 transition-colors"
              />
            </div>
            <ul className="backdrop-blur-lg bg-black/80 border-2 border-gray-700 rounded-bl-2xl flex flex-col items-start  p-6 space-y-6 text-lg font-medium">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.id}
                  custom={i}
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <Link
                    onClick={handleNav}
                    to={link.id}
                    smooth={true}
                    duration={800}
                    className="block w-full cursor-pointer hover:text-gray-400 hover:underline transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;
