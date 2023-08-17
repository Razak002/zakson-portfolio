import React from 'react'


function Hero() {

  const imageUrl = 'https://i.ibb.co/2Y2LvSq/razak1.png';

  return (
    <div id='main'>
      <div className=' p-6 md:flex md:p-0   md:items-center '>

        <div className='md:ml-28 w-auto h-auto text-center'>
          <div className='py-5 font-serif font-bold '>
            <h1 className='flex justify-center text-center  text-white text-3xl lg:text-5xl'>Aliyu Abdulrazak</h1>
          </div>

          <div className=''>
            <p className='  text-white font-kalam animate__animated animate__fadeInLeft animate__slow'>I'm a productive  Frontend Developer
              with great passions am self motivated and enthusiastic always ready to work and learn </p>
          </div>
        </div>

        <div className=''>
          <div className='flex justify-center pt-5 items-center'>
            <a href='https://ibb.co/vv5r3h1' target='_blank' rel='noopener noreferrer'>
              <img
                src={imageUrl}
                alt='razak1'
                className='w-64 md:w-[40%] md:h-[40%] md:ml-48 rounded-xl'
              />
            </a>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Hero
