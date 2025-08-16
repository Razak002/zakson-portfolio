// import React from 'react'
// import { FaAlignRight } from 'react-icons/fa'
// import { AiOutlineClose } from 'react-icons/ai'
// import { useState } from 'react'
// import { Link } from 'react-scroll'


// function Navbar() {

//   const [nav, setNav] = useState("false")
//   const handleNav = () => {
//     setNav(!nav)
//   }

//   return (
//     <div className=' flex justify-between h-24 items-center px-4  text-white'>
//       <h1 className='w-full pl-3 text-3xl font-kalam'>RA
//         <br></br>
//         ZAK.</h1>
//       <ul className='hidden md:flex'>
//         <li className='p-4'><Link to="main" smooth={true} duration={1000}>Home</Link> </li>
//         <li className='p-4'><Link to="about" smooth={true} duration={1000}>About</Link> </li>
//         <li className='p-4'><Link to="skills" smooth={true} duration={1000}>Skills</Link> </li>
//         <li className='p-4'><Link to="projects" smooth={true} duration={1000}>Projects</Link> </li>
//         <li className='p-4'><Link to="contact" smooth={true} duration={1000}>Contact</Link> </li>

//       </ul>
//       <div onClick={handleNav} className='block md:hidden'>
//         {!nav ? <AiOutlineClose size={20} /> : <FaAlignRight size={20} />}

//       </div>
//       <div className={!nav ? 'fixed left-0 top-0 w-[30%] h-full md:hidden bg-zinc-800 z-10  ease-in-out duration-500' : 'fixed left-[-100%]'}>

//         <h1 className='w-full text-3xl ml-7 mt-4 outline-none font-kalam'>RA
//           <br></br>
//           ZAK.</h1>
//         <ul className='p-3 font-kalam'>
//           <li className='p-3 border-b border-gray-600'><Link to="main" smooth={true} duration={1000}>Home</Link> </li>
//           <li className='p-3 border-b border-gray-600'><Link to="about" smooth={true} duration={1000}>About</Link> </li>
//           <li className='p-3 border-b border-gray-600'><Link to="skills" smooth={true} duration={1000}>Skills</Link> </li>
//           <li className='p-3 border-b border-gray-600'><Link to="projects" smooth={true} duration={1000}>Projects</Link> </li>
//           <li className='p-3 border-b border-gray-600'><Link to="contact" smooth={true} duration={1000}>Contact</Link> </li>
//         </ul>
//         <div onClick={handleNav} className=' ml-10'>
//           {!nav ? <AiOutlineClose size={20} /> : <FaAlignRight size={20} />}
//         </div>
//       </div>




//     </div>

//   )
// }

// export default Navbar

import React, { useState } from 'react';
import { FaAlignRight } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-scroll';

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav((prev) => !prev);
  };

  const navLinks = [
    { id: 'main', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="flex justify-between h-20 items-center px-6 text-white fixed w-full top-0 z-50  shadow-lg">
      {/* Logo */}
      <h1 className="text-3xl font-extrabold font-kalam bg-gradient-to-r from-gray-500 via-white to-gray-800 bg-clip-text text-transparent tracking-wider cursor-pointer">
        RA<br />ZAK.
      </h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-8 font-medium">
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
      <div onClick={handleNav} className="block md:hidden cursor-pointer">
        {nav ? (
          <AiOutlineClose size={24} className="hover:text-pink-400 transition-colors" />
        ) : (
          <FaAlignRight size={24} className="hover:text-pink-400 transition-colors" />
        )}
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-[70%] sm:w-[50%] h-full backdrop-blur-lg bg-black/60 border-l border-gray-700 transform transition-transform duration-300 ease-in-out ${nav ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex justify-between items-center p-5 border-b border-gray-700">
          <h1 className="text-3xl font-extrabold font-kalam bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            RA<br />ZAK.
          </h1>
          <AiOutlineClose
            size={24}
            onClick={handleNav}
            className="cursor-pointer hover:text-pink-400 transition-colors"
          />
        </div>
        <ul className="flex flex-col items-start p-6 space-y-6 text-lg font-medium">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                onClick={handleNav}
                to={link.id}
                smooth={true}
                duration={800}
                className="block w-full cursor-pointer hover:text-pink-400 transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
