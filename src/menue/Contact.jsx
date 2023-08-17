import React, { useRef } from 'react';
import emailjs from '@emailjs/browser'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai'
import { SOCIAL } from '../distl/data';


function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_zr7xrqh',
      'template_o1coxm3',
      form.current,
      '7eMxv6VX0s2ThWYN9')


      .then((result) => {
        console.log(result.text);
        console.log("message sent")
      },
        (error) => {
          console.log(error.text);
        });
  };


  return (
    <div id='contact'>
      <div className='w-screen h-96 p-5 md:p-10'>
        <h2 className='flex text-xl md:2xl justify-center items-center font-serif text-white'>Contact Me!!</h2>

        <div className='flex justify-center py-5 items-center text-white'>
          <p className=' text-white p-2 font-kalam'>I am open to networking with creative developers so feel free to hit me up
            anytime am available</p>
        </div>
        <div className='space-y-5 py-10'>
          <div className='flex '><HiOutlineLocationMarker size={25} className='text-gray-600' /> <p className='ml-5 text-white font-kalam'>Abuja, Nigeria</p></div>
          <div className='flex'><AiOutlinePhone size={25} className='text-gray-600' /><p className='ml-5 text-white font-kalam'>+2348140165624</p></div>
          <div className='flex'><AiOutlineMail size={25} className='text-gray-600' /><p className='ml-5 text-white font-kalam'>aliyuabdulrazaks539@gmail.com</p></div>
        </div>

        <div className='space-y-10 w-[90%] '>
          <form ref={form} onSubmit={sendEmail}>
            <div className='flex flex-col'>
              <label className='capitalize text-sm py-2 text-white font-kalam'>
                name
              </label>
              <input type='text' name='user_name' className='p-3 flex 
                                focus:outline-none rounded-b-lg bg-transparent border-b border-gray-600  text-white'
              />
            </div>
            <div className='flex flex-col text-white'>
              <label className='capitalize text-sm py-2 font-kalam'>
                Email
              </label>
              <input type='email' name='user_email' className=' p-3 flex 
                                focus:outline-none rounded-b-lg bg-transparent border-b border-gray-600'
              />
            </div>

            <div className='flex flex-col'>
              <label className='capitalize text-sm py-2 text-white font-kalam'>
                Subject
              </label>
              <input type='text' name='user_subject' className='p-3 flex 
                                focus:outline-none rounded-b-lg bg-transparent border-b border-gray-600 text-white'
              />
            </div>

            <div className='flex flex-col'>
              <label className='capitalize text-sm py-2 text-white font-kalam'>
                Message
              </label>
              <textarea type='text' name='message' className=' p-3 flex 
                                focus:outline-none rounded-b-lg bg-transparent border-b border-gray-600 text-white'
              />
            </div>

            <button type='submit' value="send" className='text-white font-serif md:text-xl hover:bg-gray-200 hover:text-gray-900 rounded-2xl border-solid border-2 border-gray-600 mt-3 p-2 md:p-3 md:px-8 bg-transparent'>Send message</button>
          </form>

        </div>
        <div className=''>

            <h2 className=' flex justify-center text-white items-center text-sm md:text-xl font-kalam'>You are Free to Dm! 👌👌</h2>

          <div className='flex justify-center  mt-3 items-center text-white'><p className='font-kalam'>common let's connect</p></div>
          <div className='flex justify-center  items-center text-2xl w-full'>
            {SOCIAL.map(({ id, link, icon }) => {
              return (
                <div key={id} className='p-3  md:p-10 md:py-20 py-10 text-gray-500'>
                  <a href={link} target='_blank'
                    rel='noopener noreferrer' className='duration-200 ease-in-out hover:text-white'>{icon}</a>
                </div>
              )
            })}

          </div>
          <p className='text-white text-sm flex justify-center items-center mr-12'>© Copyright - Aliyu Abdulrazak 2023</p>

        </div>

      </div>
    </div>
  )
}

export default Contact