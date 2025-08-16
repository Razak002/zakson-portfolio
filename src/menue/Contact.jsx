// import React, { useRef } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import emailjs from '@emailjs/browser'
// import { HiOutlineLocationMarker } from 'react-icons/hi'
// import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai'
// import { SOCIAL } from '../distl/data';


// function Contact() {

//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm(
//       'service_zr7xrqh',
//       'template_o1coxm3',
//       form.current,
//       '7eMxv6VX0s2ThWYN9')


//       .then((result) => {
//         console.log(result.text);
//         console.log("message sent")
//       },
//         (error) => {
//           console.log(error.text);
//         });
//   };
//   const notify = () => toast("Thanks for reaching out");

//   return (
//     <div id='contact'>
//       <div className='w-[100%] h-96 p-5 md:p-10'>
//         <h2 className='flex text-xl md:2xl justify-center items-center font-serif text-white'>Contact Me!!</h2>

//         <div className='flex justify-center py-5 items-center text-white'>
//           <p className=' text-white p-2 font-kalam'>I am open to networking with creative developers, so feel free to hit me up
//             anytime am available</p>
//         </div>
//         <div className='space-y-5 py-10'>
//           <div className='flex '><HiOutlineLocationMarker size={25} className='text-gray-600' /> <p className='ml-5 text-white font-kalam'>Abuja, Nigeria</p></div>
//           <div className='flex'><AiOutlinePhone size={25} className='text-gray-600' /><p className='ml-5 text-white font-kalam'>+2348140165624</p></div>
//           <div className='flex'><AiOutlineMail size={25} className='text-gray-600' /><p className='ml-5 text-white font-kalam'>aliyuabdulrazaks539@gmail.com</p></div>
//         </div>

//         <div className='space-y-10 w-[90%] '>
//           <form ref={form} onSubmit={sendEmail}>
//             <div className='flex flex-col'>
//               <label className='capitalize text-sm py-2 text-white font-kalam'>
//                 name
//               </label>
//               <input type='text' name='user_name' className='p-3 flex 
//                                 focus:outline-none rounded-b-lg bg-transparent border-b border-gray-600  text-white'
//               />
//             </div>
//             <div className='flex flex-col text-white'>
//               <label className='capitalize text-sm py-2 font-kalam'>
//                 Email
//               </label>
//               <input type='email' name='user_email' className=' p-3 flex 
//                                 focus:outline-none rounded-b-lg bg-transparent border-b border-gray-600'
//               />
//             </div>

//             <div className='flex flex-col'>
//               <label className='capitalize text-sm py-2 text-white font-kalam'>
//                 Subject
//               </label>
//               <input type='text' name='user_subject' className='p-3 flex 
//                                 focus:outline-none rounded-b-lg bg-transparent border-b border-gray-600 text-white'
//               />
//             </div>

//             <div className='flex flex-col'>
//               <label className='capitalize text-sm py-2 text-white font-kalam'>
//                 Message
//               </label>
//               <textarea type='text' name='message' className=' p-3 flex 
//                                 focus:outline-none rounded-b-lg bg-transparent border-b border-gray-600 text-white'
//               />
//             </div>

//             <button type='submit' value="send" onClick={notify} className='text-white font-serif md:text-xl hover:bg-gray-200 hover:text-gray-900 rounded-2xl border-solid border-2 border-gray-600 mt-3 p-2 md:p-3 md:px-8 bg-transparent'>Send message</button>
//             <ToastContainer />
//           </form>

//         </div>
//         <div className=''>

//           <h2 className=' flex justify-center text-white items-center text-sm md:text-xl font-kalam'>You are Free to Dm! 👌👌</h2>

//           <div className='flex justify-center  mt-3 items-center text-white'><p className='font-kalam'>common let's connect</p></div>
//           <div className='flex justify-center  items-center text-2xl w-full'>
//             {SOCIAL.map(({ id, link, icon }) => {
//               return (
//                 <div key={id} className='p-3  md:p-10 md:py-20 py-10 text-gray-500'>
//                   <a href={link} target='_blank'
//                     rel='noopener noreferrer' className='duration-200 ease-in-out hover:text-white'>{icon}</a>
//                 </div>
//               )
//             })}

//           </div>
//           <p className='text-white text-sm flex justify-center items-center mr-12'>© Copyright - Aliyu Abdulrazak 2023</p>

//         </div>

//       </div>
//     </div>
//   )
// }

// export default Contact


import React, { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { SOCIAL } from "../distl/data";
import { motion } from "framer-motion";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_u79bfpe",
        "template_mw7c1fv",
        form.current,
        "opnD1ADvcL3X9uBex"
      )
      .then(
        () => {
          toast.success("Thanks for reaching out! I'll get back to you soon.");
          form.current.reset();
        },
        () => {
          toast.error("Oops! Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center px-4 py-12"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
          Contact Me
        </h2>
        <p className="text-gray-200 max-w-xl mx-auto font-kalam text-sm sm:text-base">
          I’m open to networking with creative developers, so feel free to hit
          me up anytime — I’m available and ready to collaborate!
        </p>
      </motion.div>

      {/* Contact Info + Form */}
      <div className="w-full max-w-5xl grid md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-white space-y-6 shadow-lg"
        >
          <div className="flex items-center space-x-4">
            <HiOutlineLocationMarker size={28} />
            <p className="font-kalam text-sm sm:text-base">Abuja, Nigeria</p>
          </div>
          <div className="flex items-center space-x-4">
            <AiOutlinePhone size={28} />
            <p className="font-kalam text-sm sm:text-base">
              +234 814 016 5624
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <AiOutlineMail size={28} />
            <p className="font-kalam text-sm sm:text-base">
              aliyuabdulrazaks539@gmail.com
            </p>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-kalam">
              Let’s Connect
            </h3>
            <div className="flex space-x-4 text-xl sm:text-2xl">
              {SOCIAL.map(({ id, link, icon }) => (
                <motion.a
                  key={id}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-300 hover:text-gray-500 transition"
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-lg space-y-4"
        >
          <div>
            <label className="block text-sm text-gray-200 mb-1 font-kalam">
              Name
            </label>
            <input
              type="text"
              name="user_name"
              required
              className="w-full p-3 rounded-lg bg-white/5 border border-gray-500 text-white text-sm sm:text-base focus:outline-none focus:border-pink-400"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-200 mb-1 font-kalam">
              Email
            </label>
            <input
              type="email"
              name="user_email"
              required
              className="w-full p-3 rounded-lg bg-white/5 border border-gray-500 text-white text-sm sm:text-base focus:outline-none focus:border-pink-400"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-200 mb-1 font-kalam">
              Subject
            </label>
            <input
              type="text"
              name="user_subject"
              className="w-full p-3 rounded-lg bg-white/5 border border-gray-500 text-white text-sm sm:text-base focus:outline-none focus:border-pink-400"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-200 mb-1 font-kalam">
              Message
            </label>
            <textarea
              name="message"
              rows="4"
              required
              className="w-full p-3 rounded-lg bg-white/5 border border-gray-500 text-white text-sm sm:text-base focus:outline-none focus:border-gray-400"
            ></textarea>
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 rounded-lg bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white font-semibold shadow-md transition"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="underline mt-10 text-gray-300 text-xs sm:text-sm"
      >
        © {new Date().getFullYear()} Aliyu Abdulrazak. All Rights Reserved.
      </motion.div>

      <ToastContainer position="bottom-right" />
    </div>
  );
}

export default Contact;

