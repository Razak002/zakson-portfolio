import React from 'react'
import {BsCalendarDate} from 'react-icons/bs'

function SlideVertical() {

  const date = new Date().toISOString().slice(0, 10);
  return (
    <div className='hidden md:block'>

 
    <div className='ml-4 flex'>
      <p className='text-white text-sm '>
        <BsCalendarDate size={25} className='animate-bounce' />
        {date}</p>
    </div>
    </div>
  )
}

export default SlideVertical
