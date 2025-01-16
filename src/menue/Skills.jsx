import React from 'react';

function Skills() {
  return (
    <div id="skills" className=" p-6 w-full h-auto md:p-20 text-white">
      {/* Skills Title Section */}
      <div className="text-center mb-8">
        <h3 className="text-3xl md:text-4xl font-serif font-bold">Skills</h3>
        <h4 className="text-lg mt-2">─── Page <strong>03</strong></h4>
      </div>

      {/* Skills Description Section */}
      <div className="text-white font-kalam text-sm md:text-base leading-6 mb-12">
        <p>Proficient in HTML, CSS, JavaScript, and responsive web design.</p>
        <p>Extensive experience with front-end frameworks like React and Next.js.</p>
        <p>Knowledge in back-end development using Node.js and Express.</p>
        <p>Server-side management using Firebase and MongoDB.</p>
        <p>Familiarity with version control systems like Git and deployment using cloud platforms such as Vercel and Netlify.</p>
      </div>

      {/* Skills Icons Section */}
      <div className="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-center">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg" alt="HTML5" className="w-16 md:w-20 hover:scale-125 duration-200" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg" alt="CSS3" className="w-16 md:w-20 hover:scale-125 duration-200" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-16 md:w-20 hover:scale-125 duration-200" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" alt="Node.js" className="w-16 md:w-20 hover:scale-125 duration-200" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" alt="MongoDB" className="w-16 md:w-20 hover:scale-125 duration-200" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg" alt='tailwind' className="w-16 md:w-20 hover:scale-125 duration-200" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" alt="Express.js" className="w-16 md:w-20 bg-white p-2 rounded hover:scale-125 duration-200" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg" alt="Bootstrap" className="w-16 md:w-20 hover:scale-125 duration-200" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="React" className="w-16 md:w-20 hover:scale-125 duration-200" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain-wordmark.svg" alt="Git" className="w-16 md:w-20 hover:scale-125 duration-200" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg" alt="VS Code" className="w-16 md:w-20 hover:scale-125 duration-200" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" alt="Next.js" className="w-16 md:w-20 bg-white p-2 rounded hover:scale-125 duration-200" />
      </div>
    </div>
  );
}

export default Skills;
