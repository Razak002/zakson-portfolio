import React from 'react';

function Passion() {
  return (
    <div className="bg-zinc-800 p-6 w-[100%] h-auto md:p-10 text-white flex flex-col items-center">
      
      {/* Title Section */}
      <h2 className="text-3xl md:text-4xl text-white text-center font-serif font-bold mb-4">
        Passion Driven
      </h2>
      
      <h1 className="text-white text-lg md:text-xl font-kalam text-center mb-2">
        This is exactly what I know how to do best
      </h1>

      <p className="text-center mb-6 text-sm md:text-base font-kalam">
        I develop websites with amazing user experiences.
      </p>

      {/* Divider Line */}
      <div className="w-24 h-1 bg-white my-4"></div>

      {/* Secondary Section */}
      <div className="py-7 mt-10 md:mt-20">
        <h2 className="text-white text-lg md:text-xl text-center font-kalam mb-2">
          I interpret amazing ideas into reality
        </h2>
        
        <h2 className="text-white text-xl text-center font-kalam mb-4">
          On the Web
        </h2>
        
        <p className="text-center text-sm md:text-base font-kalam">
          Following strategies to produce the best user experiences.
        </p>
      </div>
    </div>
  );
}

export default Passion;
