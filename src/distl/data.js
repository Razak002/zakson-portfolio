import { FaTwitter, FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
import comerce from '../assets/comerce.png'
import finflow from '../assets/finflow.png'
import gallery from '../assets/gallery.png'
import business from '../assets/business.png'
import swapit from '../assets/swapit.png'

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
      image: comerce,
      title: "03__ E commerce",
      github: "https://github.com/Razak002/commerce",
      demo: "https://commerce-razak002s-projects.vercel.app/",
      content: "Our e-commerce solutions are optimized for search engines, ensuring your products reach the right audience. We also offer performance analytics and ongoing support to help you continuously improve and adapt to market changes."
    },

    {
      id: 4,
      image: business,
      title: "04__ Ai model landing page",
      github: "https://github.com/Razak002/marhaba",
      demo: "https://marhaba-one.vercel.app/",
      content: " Artificial Intelligence (AI) has emerged as the most transformative technology, offering unprecedented opportunities to streamline operations, enhance decision-making, and achieve goals with remarkable efficiency."
    },


  ]