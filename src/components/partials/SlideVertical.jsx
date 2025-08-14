// import React from 'react'
// import {BsCalendarDate} from 'react-icons/bs'

// function SlideVertical() {

//   const date = new Date().toISOString().slice(0, 10);
//   return (
//     <div className='hidden md:block'>

 
//     <div className='ml-4 flex'>
//       <p className='text-white text-sm '>
//         <BsCalendarDate size={25} className='animate-bounce' />
//         {date}</p>
//     </div>
//     </div>
//   )
// }

// export default SlideVertical

import React, { useEffect, useState } from "react";
import { BsCalendarDate } from "react-icons/bs";

function SlideVertical() {
  const [isVisible, setIsVisible] = useState(false);

  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100); // delay for smoothness
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="hidden md:flex items-center ml-4">
      <div
        className={`flex items-center gap-3 bg-white/10 px-4 py-2 rounded-lg shadow-lg backdrop-blur-md border border-white/10 transition-all duration-700 ease-out hover:bg-white/20 ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0"
        }`}
      >
        <BsCalendarDate
          size={22}
          className="text-pink-400 animate-bounce"
        />
        <span className="text-white font-medium tracking-wide">
          {formattedDate}
        </span>
      </div>
    </div>
  );
}

export default SlideVertical;

