import React from 'react'
import { FaAlignRight } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react'
import { Link } from 'react-scroll'


function Navbar() {

  const [nav, setNav] = useState("false")




  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className=' flex justify-between h-24 items-center px-4 max-w-[1240px] text-white'>
      <h1 className='w-full pl-3 text-3xl font-kalam'>RA
        <br></br>
        ZAK.</h1>
      <ul className='hidden md:flex'>
        <li className='p-4'><Link to="main" smooth={true} duration={1000}>Home</Link> </li>
        <li className='p-4'><Link to="about" smooth={true} duration={1000}>About</Link> </li>
        <li className='p-4'><Link to="skills" smooth={true} duration={1000}>Skills</Link> </li>
        <li className='p-4'><Link to="projects" smooth={true} duration={1000}>Projects</Link> </li>
        <li className='p-4'><Link to="contact" smooth={true} duration={1000}>Contact</Link> </li>

      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {!nav ? <AiOutlineClose size={20} /> : <FaAlignRight size={20} />}

      </div>
      <div className={!nav ? 'fixed left-0 top-0 w-[30%] h-full md:hidden bg-zinc-800   ease-in-out duration-500' : 'fixed left-[-100%]'}>

        <h1 className='w-full text-3xl ml-7 mt-4 outline-none font-kalam'>RA
          <br></br>
          ZAK.</h1>
        <ul className='p-3 font-kalam'>
          <li className='p-3 border-b border-gray-600'><Link to="main" smooth={true} duration={1000}>Home</Link> </li>
          <li className='p-3 border-b border-gray-600'><Link to="about" smooth={true} duration={1000}>About</Link> </li>
          <li className='p-3 border-b border-gray-600'><Link to="skills" smooth={true} duration={1000}>Skills</Link> </li>
          <li className='p-3 border-b border-gray-600'><Link to="projects" smooth={true} duration={1000}>Projects</Link> </li>
          <li className='p-3 border-b border-gray-600'><Link to="contact" smooth={true} duration={1000}>Contact</Link> </li>
        </ul>
        <div onClick={handleNav} className=' ml-10'>
          {!nav ? <AiOutlineClose size={20} /> : <FaAlignRight size={20} />}
        </div>
      </div>


      

    </div>

  )
}

export default Navbar
