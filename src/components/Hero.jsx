import React from 'react'
import razak1 from '../assets/razak1.png'
import razak2 from '../assets/razak2.png'
import { useState } from 'react'

function Hero() {

  function setRealPic() {
    setImage(razak2)
  }

  function setClone() {
    setImage(razak1)


  }

  const [image, setImage] = useState(razak2)

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
        <div className='flex justify-center pt-5  items-center '>

          <img src={image}
            onMouseOver={setClone}
            onMouseOut={setRealPic}
            alt='pic'
            className='w-64  md:w-[40%] md:h-[40%]  md:ml-48 rounded-xl'
          />
        </div>
      </div>





    </div>
    
    </div>
  )
}

export default Hero
