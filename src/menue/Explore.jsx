import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

function Explore() {
  return (
    <div className='w-screen h-60 flex md:text-xl justify-center items-center md:p-52 '>
        <h2 className=' text-white'>Explore more on my Github page </h2>
        <div className='ml-9 mt-3 down-arrow'>
            <a href='https://github.com/Razak002/commerce' >
                <FaArrowRight className='text-gray-400 text-2xl animate-bounce' />
                </a>
            </div>
    </div>
  )
}

export default Explore