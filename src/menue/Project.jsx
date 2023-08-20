import React from 'react'
import { FaExternalLinkSquareAlt, FaGithub } from 'react-icons/fa'
import { WORKS } from '../distl/data'

function Project() {


  return (
    <div id='projects'>
      <div className=''>
        <div className='p-2 py-6'>

          <div className="text-white skills-left ">
            <h3 className='py-4'>Project</h3>
            <h4 className='p-2'>
              ───&nbsp;&nbsp;Page<strong>04</strong>
            </h4>
          </div>
          <p className='text-white text-left font-kalam py-3'>I build web apps with well-oriented user interface (UI) and support, fully resonsive  strong data protection, fast loading time and built-in integrations</p>
        </div>
        <div className=' bg-zinc-800 w-screen py-4'>
          <div className='grid md:grid-cols-2 gap-8 ml-7'>
            {WORKS.map(({ id, image, title, github, demo, content }) => {

              return (
                <div key={id} className='  rounded-xl p-3 '>
                  <div className=''>
                    <a href={demo}>
                      <img src={image} alt='images' className='w-2/3 md:w-4/6 rounded-xl md:rounded-3xl p-2 md:p-4 ' />
                    </a>
                  </div>
                  <div><h1 className='text-white p-2 md:p-4 text-xl font-serif hover:ani'>{title}</h1></div>
                  <p className='text-white p-2 font-kalam'>{content}</p>
                  <div className='flex gap-4 ml-3'>
                    <a className='text-lg pt-2 text-white md:text-2xl cursor-pointer duration-150 hover:scale-110' href={github} target='_blank'
                      rel='noopener noreferrer'>
                      <FaGithub />
                    </a>
                    <a className='text-lg pt-2 text-white md:text-2xl cursor-pointer duration-150 hover:scale-110' href={demo} target='_blank'
                      rel='noopener noreferrer'>
                      <FaExternalLinkSquareAlt />

                    </a>
                  </div>





                </div>
              )
            })}

          </div>

        </div>

      </div>
    </div>

  )
}


export default Project