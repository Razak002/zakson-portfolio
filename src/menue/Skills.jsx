
import React from 'react'


function Skills() {
  return (
    <div id='skills'>
      <div className=' p-2 md:p-20 '>
        <div className="text-white skills-left md:text-xl font-Gothic animate__animated animate__zoomIn">
          <h3 className='py-4'>Skills</h3>
          <h4 className='p-2'>
            ───&nbsp;&nbsp;Page <strong>03</strong>
          </h4>
        </div>

        <div className='text-white font-kalam '>
         <p> Proficient in HTML, CSS, JavaScript, and responsive web design.</p> 
         <p>Extensive experience with front-end frameworks like React.</p>   
         <p> knowledge in back-end development using Node.js and Express.</p>   
         <p> server side management using firebase.</p>   
         <p> Familiarity with version control systems like Git and deployment using cloud platforms such as AWS,vercel and Netlify.</p>


        </div>

        <div className='w-full grid grid-cols-4 ml-10 md:ml-20 space-y-5 md:space-x-4 md:flex-row text-center items-center'>

          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg" className='w-16 mt-3 md:w-20 hover:scale-125  duration-200 alt="image"' />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg" className=' w-16 md:w-20 hover:scale-125 duration-200 alt="image"' />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className='w-16 md:w-14 hover:scale-125   duration-200 alt="image"' />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg" className=' w-16 bg-white md:w-20 hover:scale-125   duration-200 alt="image"' />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg" className='w-16 md:w-20 hover:scale-125 duration-200 alt="image"' />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" className='w-16 md:w-20 hover:scale-125  duration-200 alt="image"' />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain-wordmark.svg" className='w-16  md:w-20 hover:scale-125 duration-200  alt="image"' />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg" className='w-16  md:w-20 hover:scale-125   duration-200 alt="image"' />

        </div>

      </div>
   
    </div>
  )
}

export default Skills;