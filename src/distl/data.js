import { FaTwitter, FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
import finflow from '../assets/finflow.png'
import gymnastic from '../assets/gymnastic.png'
import business from '../assets/business.png'
import swapit from '../assets/swapit.png'
import bycrypt from '../assets/bycrypt.png'
import any from '../assets/any.png'

export const SOCIAL = [
  {
    id: 1,
    link: "https://twitter.com/home",
    icon: <FaTwitter />

  },
  {
    id: 2,
    link: "https://web.facebook.com/?_rdc=1&_rdr",
    icon: <FaFacebook />

  },
  {
    id: 3,
    link: "https://www.linkedin.com/feed/",
    icon: <FaLinkedin />

  },
  {
    id: 4,
    link: "https://github.com/Razak002",
    icon: <FaGithub />

  },
];


export const WORKS = [

  {
    id: 1,
    image: swapit,
    title: "01__ Crypto wallet",
    github: "https://github.com/Razak002/Deep",
    demo: "https://deep-jet.vercel.app/",
    content: "Experience the future of digital finance with our modern crypto wallet engineered for swift, secure, and effortless transactions in seconds."
  },

  {
    id: 2,
    image: finflow,
    title: "02__Fintech dashboard",
    github: "https://github.com/Razak002/fin-flow",
    demo: "https://fin-flow-sandy.vercel.app/",
    content: "A comprehensive fintech dashboard interface that provides users with a centralized platform for managing their financial data, transactions, and analytics. The dashboard combines modern UI/UX principles with robust financial data visualization to deliver an intuitive banking and investment management experience."
  },
  {
    id: 3,
    image: gymnastic,
    title: "03__ CoreX GYM Crib",
    github: "https://github.com/Razak002/corex",
    demo: "https://corex-ruby.vercel.app",
    content: "CoreX Gym is a modern fitness platform that offers training programs, expert guidance, and membership options to help you achieve your fitness goals."
  },

  {
    id: 4,
    image: business,
    title: "04__ Ai model landing page",
    github: "https://github.com/Razak002/marhaba",
    demo: "https://marhaba-one.vercel.app/",
    content: " Artificial Intelligence (AI) has emerged as the most transformative technology, offering unprecedented opportunities to streamline operations, enhance decision-making, and achieve goals with remarkable efficiency."
  },

  {
    id: 5,
    image: bycrypt,
    title: "04__ Bycrypt – Secure Crypto Wallet",
    github: "https://github.com/Razak002/Blocksy-wallet",
    demo: "https://blocksy-wallet.vercel.app/",
    content: "Bycrypt is a secure and user-friendly crypto wallet designed for managing digital assets with ease. It provides wallet creation, balance tracking, and seamless transaction features, all within a responsive and modern UI built with React and Next.js."
  },


{
  id: 6,
  image: any,
  title: "Any2Any Universal File Converter",
  github: "https://github.com/Razak002/any2any", 
  demo: "https://any2any-bice.vercel.app/",
  content:
    "Any2Any is a free and powerful file conversion tool that allows users to seamlessly convert images, audio, and video files between multiple formats. Built with Next.js and Tailwind CSS, it delivers fast, secure, and in-browser conversions with a modern and responsive UI.",
},

]