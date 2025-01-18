import { FaTwitter, FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
import serv1 from '../assets/serv1.png'
import comerce from '../assets/comerce.png'
import gym from '../assets/gym.png'

import marhaba from '../assets/marhaba.png'

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
      image: serv1,
      title: "01__ Food recipe",
      github: "https://github.com/Razak002/Recipe",
      demo: "https://recipe-gldpaf1wo-razak002.vercel.app/ ",
      content: "Overall, recipe apps offer a convenient and fun way to explore new dishes, cook up family favorites, and simplify meal planning anyone can become a master chef in their own kitchen."
    },

    {
      id: 2,
      image: gym,
      title: "02__Gymnastics website",
      github: "https://github.com/Razak002/gymst539",
      demo: "https://gymst539.vercel.app/",
      content: "Looking for some extra motivation and camaraderie? Join our group fitness classes. From high-energy spin sessions to peaceful yoga and everything in between, our group fitness program offers a diverse range of classes suitable for all fitness levels. Get ready to sweat, smile, and connect with others on the same journey."
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
      image: marhaba,
      title: "04__wedding website",
      github: "https://github.com/Razak002/marhaba",
      demo: "https://marhaba-one.vercel.app/",
      content: "from web development to branding i have successfully delivered projects  on events, ceremonies and entertainments. We take pride in our ability to adapt and excel in any creative endeavor."
    },


  ]