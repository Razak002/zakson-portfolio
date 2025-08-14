// import React from 'react';

// function Skills() {
//   return (
//     <div id="skills" className=" p-6 w-full h-auto md:p-20 text-white">
//       {/* Skills Title Section */}
//       <div className="text-center mb-8">
//         <h3 className="text-3xl md:text-4xl font-serif font-bold">Skills</h3>
//         <h4 className="text-lg mt-2">─── Page <strong>03</strong></h4>
//       </div>

//       {/* Skills Description Section */}
//       <div className="text-white font-kalam text-sm md:text-base leading-6 mb-12">
//         <p>Proficient in HTML, CSS, JavaScript, and responsive web design.</p>
//         <p>Extensive experience with front-end frameworks like React and Next.js.</p>
//         <p>Knowledge in back-end development using Node.js and Express.</p>
//         <p>Server-side management using Firebase and MongoDB.</p>
//         <p>Familiarity with version control systems like Git and deployment using cloud platforms such as Vercel and Netlify.</p>
//       </div>

//       {/* Skills Icons Section */}
//       <div className="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-center">
//         <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg" alt="HTML5" className="w-16 md:w-20 hover:scale-125 duration-200" />
//         <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg" alt="CSS3" className="w-16 md:w-20 hover:scale-125 duration-200" />
//         <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-16 md:w-20 hover:scale-125 duration-200" />
//         <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" alt="Node.js" className="w-16 md:w-20 hover:scale-125 duration-200" />
//         <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" alt="MongoDB" className="w-16 md:w-20 hover:scale-125 duration-200" />
//         <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg" alt='tailwind' className="w-16 md:w-20 hover:scale-125 duration-200" />
//         <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" alt="Express.js" className="w-16 md:w-20 bg-white p-2 rounded hover:scale-125 duration-200" />
//         <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg" alt="Bootstrap" className="w-16 md:w-20 hover:scale-125 duration-200" />
//         <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="React" className="w-16 md:w-20 hover:scale-125 duration-200" />
//         <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain-wordmark.svg" alt="Git" className="w-16 md:w-20 hover:scale-125 duration-200" />
//         <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg" alt="VS Code" className="w-16 md:w-20 hover:scale-125 duration-200" />
//         <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" alt="Next.js" className="w-16 md:w-20 bg-white p-2 rounded hover:scale-125 duration-200" />
//       </div>
//     </div>
//   );
// }

// export default Skills;
import React from 'react';

function Skills() {
  return (
    <div
      id="skills"
      className="relative p-6 w-full h-auto md:p-20 text-white bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
      {/* Radial Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[80%] h-[80%] bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-indigo-500/20 rounded-full blur-3xl"></div>
      {/* Title Section */}
      <div className="relative text-center mb-12 z-10">
        <h3 className="text-4xl md:text-5xl font-serif font-bold tracking-wide drop-shadow-lg">
          Skills
        </h3>
        <h4 className="text-lg mt-3 text-gray-300">
          ─── Page <strong className="text-white">03</strong>
        </h4>
      </div>

      {/* Description Section */}
      <div className="relative text-white font-kalam text-sm md:text-lg leading-relaxed max-w-3xl mx-auto text-center mb-14 opacity-90 z-10">
        <p>Proficient in HTML, CSS, JavaScript, and responsive web design.</p>
        <p>Extensive experience with front-end frameworks like React and Next.js.</p>
        <p>Knowledge in back-end development using Node.js and Express.</p>
        <p>Server-side management using Firebase and MongoDB.</p>
        <p>
          Familiarity with version control systems like Git and deployment using
          cloud platforms such as Vercel and Netlify.
        </p>
      </div>

      {/* Skills Icons */}
      <div className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-5xl mx-auto z-10">
        {[
          {
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg',
            alt: 'HTML5',
          },
          {
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg',
            alt: 'CSS3',
          },
          {
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
            alt: 'JavaScript',
          },
          {
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg',
            alt: 'Node.js',
          },
          {
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg',
            alt: 'MongoDB',
          },
          {
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg',
            alt: 'Tailwind',
          },
          {
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg',
            alt: 'Express.js',
            bg: true,
          },
          {
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg',
            alt: 'Bootstrap',
          },
          {
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg',
            alt: 'React',
          },
          {
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain-wordmark.svg',
            alt: 'Git',
          },
          {
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg',
            alt: 'VS Code',
          },
          {
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg',
            alt: 'Next.js',
            bg: true,
          },
        ].map((skill, index) => (
          <div
            key={index}
            className="flex justify-center items-center bg-gradient-to-tr from-pink-300/10 via-gray-800/30 to-purple-300/10 backdrop-blur-lg rounded-xl p-4 transition-transform transform hover:scale-110 hover:shadow-[0_0_20px_rgba(236,72,153,0.5)] duration-300 shadow-lg"
          >
            <img
              src={skill.src}
              alt={skill.alt}
              className={`w-16 md:w-20 ${skill.bg ? 'bg-white p-2 rounded' : ''}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
