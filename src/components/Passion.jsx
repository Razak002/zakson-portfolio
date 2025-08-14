// import React from 'react';

// function Passion() {
//   return (
//     <div className="bg-zinc-800 p-6 w-[100%] h-auto md:p-10 text-white flex flex-col items-center">
      
//       {/* Title Section */}
//       <h2 className="text-3xl md:text-4xl text-white text-center font-serif font-bold mb-4">
//         Passion Driven
//       </h2>
      
//       <h1 className="text-white text-lg md:text-xl font-kalam text-center mb-2">
//         This is exactly what I know how to do best
//       </h1>

//       <p className="text-center mb-6 text-sm md:text-base font-kalam">
//         I develop websites with amazing user experiences.
//       </p>

//       {/* Divider Line */}
//       <div className="w-24 h-1 bg-white my-4"></div>

//       {/* Secondary Section */}
//       <div className="py-7 mt-10 md:mt-20">
//         <h2 className="text-white text-lg md:text-xl text-center font-kalam mb-2">
//           I interpret amazing ideas into reality
//         </h2>
        
//         <h2 className="text-white text-xl text-center font-kalam mb-4">
//           On the Web
//         </h2>
        
//         <p className="text-center text-sm md:text-base font-kalam">
//           Following strategies to produce the best user experiences.
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Passion;
import React from "react";

function Passion() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
      {/* Radial Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[80%] h-[80%] bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-indigo-500/20 rounded-full blur-3xl"></div>

      {/* Content */}
      <div className="relative p-8 md:p-16 text-white flex flex-col items-center">
        {/* Title Section */}
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
          Passion Driven
        </h2>

        <h1 className="text-lg md:text-xl font-kalam text-center mt-3">
          This is exactly what I know how to do best
        </h1>

        <p className="text-center text-sm md:text-base font-kalam mt-2 max-w-xl opacity-90">
          I develop websites with amazing user experiences.
        </p>

        {/* Divider Line */}
        <div className="w-24 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full my-6 shadow-lg shadow-pink-500/30"></div>

        {/* Secondary Section */}
        <div className="py-8 mt-8 md:mt-16 text-center max-w-2xl space-y-2">
          <h2 className="text-lg md:text-xl font-kalam text-pink-400">
            I interpret amazing ideas into reality
          </h2>

          <h2 className="text-xl md:text-2xl font-kalam font-bold">
            On the <span className="text-purple-400">Web</span>
          </h2>

          <p className="text-sm md:text-base font-kalam opacity-90">
            Following strategies to produce the best user experiences.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Passion;
