import React from 'react'
import Marquee from "react-fast-marquee";
import test1 from "../assets/test1.jpg"
import test2 from "../assets/test2.jpg"
import emoji from '../assets/emoji.webp'


function Testimonials() {
  return (
    <div className='bg-zinc-800 w-[100%] gap-5 h-4/5 flex flex-col justify-center items-center'>
      <div className='flex'>
        <h1 className='text-white md:text-2xl font-kalam flex justify-center items-center'>Comments from clients All arround the world</h1>
        <img src={emoji} alt='pic' className='w-20 mb-3' />
      </div>
      <Marquee direction='right' pauseOnClick='true' speed={80}>
        <div className='flex'>
          <img src={test1} alt='pic' className='w-80 md:w-96 p-2 md:p-4 rounded-2xl md:rounded-3xl' />
          <img src={test2} alt='pic' className='w-80 md:w-96 p-2 md:p-4 rounded-2xl md:rounded-3xl' />
          <img src={test1} alt='pic' className='w-80 md:w-96 p-2 md:p-4 rounded-2xl md:rounded-3xl' />
          <img src={test2} alt='pic' className='w-80 md:w-96 p-2 md:p-4 rounded-2xl md:rounded-3xl' />
        </div>
      </Marquee>

      <Marquee direction='left' pauseOnClick='true' speed={80}>
        <div className='flex'>
          <img src={test1} alt='pic' className='w-80 md:w-96 p-2 md:p-4 rounded-2xl  md:rounded-3xl' />
          <img src={test2} alt='pic' className='w-80 md:w-96 p-2 md:p-4 rounded-2xl  md:rounded-3xl' />
          <img src={test1} alt='pic' className='w-80 md:w-96 p-2 md:p-4 rounded-2xl  md:rounded-3xl' />
          <img src={test2} alt='pic' className='w-80 md:w-96 p-2 md:p-4 rounded-2xl  md:rounded-3xl' />
        </div>
      </Marquee>
    </div>
  )
}

export default Testimonials