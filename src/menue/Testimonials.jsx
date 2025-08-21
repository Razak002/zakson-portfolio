// import React from 'react'
// import Marquee from "react-fast-marquee";
// import test1 from "../assets/test1.jpg"
// import test2 from "../assets/test2.jpg"
// import emoji from '../assets/emoji.webp'


// function Testimonials() {
//   return (
//     <div className='bg-zinc-800 w-[100%] gap-5 h-4/5 flex flex-col justify-center items-center'>
//       <div className='flex'>
//         <h1 className='text-white md:text-2xl font-kalam flex justify-center items-center'>Comments from clients All arround the world</h1>
//         <img src={emoji} alt='pic' className='w-20 mb-3' />
//       </div>
//       <Marquee direction='right' pauseOnClick='true' speed={80}>
//         <div className='flex'>
//           <img src={test1} alt='pic' className='w-80 md:w-96 p-2 md:p-4 rounded-2xl md:rounded-3xl' />
//           <img src={test2} alt='pic' className='w-80 md:w-96 p-2 md:p-4 rounded-2xl md:rounded-3xl' />
//           <img src={test1} alt='pic' className='w-80 md:w-96 p-2 md:p-4 rounded-2xl md:rounded-3xl' />
//           <img src={test2} alt='pic' className='w-80 md:w-96 p-2 md:p-4 rounded-2xl md:rounded-3xl' />
//         </div>
//       </Marquee>

//       <Marquee direction='left' pauseOnClick='true' speed={80}>
//         <div className='flex'>
//           <img src={test1} alt='pic' className='w-80 md:w-96 p-2 md:p-4 rounded-2xl  md:rounded-3xl' />
//           <img src={test2} alt='pic' className='w-80 md:w-96 p-2 md:p-4 rounded-2xl  md:rounded-3xl' />
//           <img src={test1} alt='pic' className='w-80 md:w-96 p-2 md:p-4 rounded-2xl  md:rounded-3xl' />
//           <img src={test2} alt='pic' className='w-80 md:w-96 p-2 md:p-4 rounded-2xl  md:rounded-3xl' />
//         </div>
//       </Marquee>
//     </div>
//   )
// }

// export default Testimonials

// import React from "react";
// import Marquee from "react-fast-marquee";
// import { faker } from "@faker-js/faker";
// import Avatar from "react-avatar";

// const comments = [
//   "Absolutely loved working with you — everything was delivered on time and exceeded expectations!",
//   "The website design is stunning and super easy to navigate. Highly recommended!",
//   "Your attention to detail is amazing. The final product looks better than I imagined!",
//   "Fast, professional, and creative. I’ll definitely hire you again!",
//   "I’m so impressed with your coding skills — you brought my ideas to life perfectly.",
//   "Working with you was a pleasure. Communication was smooth and the results are fantastic!"
// ];

// // Generate mock testimonial objects
// const testimonials = Array.from({ length: 12 }, () => ({
//   name: faker.person.fullName(),
//   username: faker.internet.userName(),
//   comment: faker.helpers.arrayElement(comments)
// }));

// function Testimonials() {
//   return (
//     <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 w-full py-12 flex flex-col items-center">
//       <div className="flex flex-col items-center mb-6">
//         <h1 className="text-white text-2xl md:text-3xl font-kalam flex items-center">
//           Comments from clients all around the world{" "}
//           <span className="ml-2">😎</span>
//         </h1>
//       </div>

//       {/* First Row */}
//       <Marquee pauseOnClick={true} speed={60} gradient={false}>
//         {testimonials.slice(0, 6).map((t, i) => (
//           <div
//             key={i}
//             className="bg-white/5 backdrop-blur-lg border text-white border-pink-500/20 shadow-lg rounded-2xl p-4 m-3 w-72 hover:border-pink-500/40 transition"
//           >
//             <div className="flex items-center mb-3">
//               <Avatar name={t.name} size="40" round={true} className="mr-3" />
//               <div>
//                 <h3 className="font-semibold">{t.name}</h3>
//                 <p className="text-sm text-gray-300">@{t.username}</p>
//               </div>
//             </div>
//             <p className="text-sm italic">"{t.comment}"</p>
//           </div>
//         ))}
//       </Marquee>

//       {/* Second Row */}
//       <Marquee direction="right" pauseOnClick={true} speed={60} gradient={false}>
//         {testimonials.slice(6, 12).map((t, i) => (
//           <div
//             key={i}
//             
//           >
//             <div className="flex items-center mb-3">
//               <Avatar name={t.name} size="40" round={true} className="mr-3" />
//               <div>
//                 <h3 className="font-semibold">{t.name}</h3>
//                 <p className="text-sm text-gray-300">@{t.username}</p>
//               </div>
//             </div>
//             <p className="text-sm italic">"{t.comment}"</p>
//           </div>
//         ))}
//       </Marquee>
//     </div>
//   );
// }

// export default Testimonials;

import React from "react";
import Marquee from "react-fast-marquee";
import Avatar from "react-avatar";
import { motion } from "framer-motion";

const realNames = [
  "Sarah Johnson",
  "Michael Smith",
  "Emily Davis",
  "James Thompson",
  "Olivia Martinez",
  "David Wilson",
  "Sophia Taylor",
  "Daniel Brown",
  "Emma Harris",
  "Christopher White",
  "Isabella Clark",
  "Matthew Lewis"
];

const usernames = [
  "sarah.j",
  "mike_smith",
  "emily.codes",
  "jamest_dev",
  "olivia.designs",
  "davidwilson",
  "sophiaUX",
  "danbrown",
  "emmah_dev",
  "chris.white",
  "isabellacodes",
  "matthewL"
];

const comments = [
  "Absolutely loved working with you everything was delivered as expected!",
  "The website design is stunning and super easy to navigate. Highly recommended!",
  "Your attention to detail is amazing. The final product looks superb!",
  "Fast, professional, and creative. I’ll definitely hire you again!",
  "I’m so impressed with your coding skills — you brought my ideas to life perfectly.",
  "Working with you was a pleasure. Communication was smooth & fantastic!"
];

const testimonials = realNames.map((name, index) => ({
  name,
  username: usernames[index],
  comment: comments[index % comments.length]
}));

function Testimonials() {
  return (
    <section className="w-full py-12 flex flex-col items-center sm:px-4">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex flex-col items-center mb-6 text-center"
      >
        <h1 className="text-white text-xl sm:text-2xl md:text-3xl font-kalam flex items-center justify-center">
          Comments from clients all around the world{" "}
        </h1>
      </motion.div>

      {/* First Row */}
      <Marquee pauseOnClick={true} speed={60} gradient={false} className="overflow-y-hidden">
        {testimonials.slice(0, 6).map((t, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-lg border text-white border-pink-500/20 shadow-lg rounded-2xl p-4 m-3 w-64 sm:w-72 hover:border-pink-500/40 transition"
          >
            <div className="flex items-center mb-3">
              <Avatar name={t.name} size="40" round={true} className="mr-3" />
              <div>
                <h3 className="font-semibold text-sm sm:text-base">{t.name}</h3>
                <p className="text-xs sm:text-sm text-gray-300">@{t.username}</p>
              </div>
            </div>
            <p className="text-xs sm:text-sm italic leading-relaxed">
              "{t.comment}"
            </p>
          </motion.div>
        ))}
      </Marquee>

      {/* Second Row */}
      <Marquee direction="right" pauseOnClick={true} speed={60} gradient={false} className="overflow-y-hidden">
        {testimonials.slice(6, 12).map((t, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-lg border text-white border-pink-500/20 shadow-lg rounded-2xl p-4 m-3 w-64 sm:w-72 hover:border-pink-500/40 transition"
          >
            <div className="flex items-center mb-3">
              <Avatar name={t.name} size="40" round={true} className="mr-3" />
              <div>
                <h3 className="font-semibold text-sm sm:text-base">{t.name}</h3>
                <p className="text-xs sm:text-sm text-gray-300">@{t.username}</p>
              </div>
            </div>
            <p className="text-xs sm:text-sm italic leading-relaxed">
              "{t.comment}"
            </p>
          </motion.div>
        ))}
      </Marquee>
    </section>
  );
}

export default Testimonials;

