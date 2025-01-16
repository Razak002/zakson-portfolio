import React from 'react';

function Hero() {
  const imageUrl = 'https://i.ibb.co/2Y2LvSq/razak1.png';

  return (
    <div id="main" className="bg-gradient-to-r min-h-screen flex items-center justify-center">
      <div className="p-6 md:flex md:items-center md:justify-between md:gap-10  max-w-6xl mx-auto">
        
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left space-y-5">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-serif font-bold">
            Aliyu Abdulrazak
          </h1>
          <p className="text-white text-lg md:text-xl font-kalam animate__animated animate__fadeInLeft animate__slow">
            I'm a productive Frontend Developer with great passions. I am self-motivated, enthusiastic, and always ready to work and learn.
          </p>
        </div>

        {/* Image Section */}
        <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center overflow-hidden">
          <a href="https://ibb.co/vv5r3h1" target="_blank" rel="noopener noreferrer">
            <img
              src={imageUrl}
              alt="Aliyu Abdulrazak"
              className="w-64 sm:w-80 md:w-96 lg:w-[70%] rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </a>
        </div>

      </div>
    </div>
  );
}

export default Hero;
