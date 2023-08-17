import { FaTwitter, FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
import serv1 from '../assets/serv1.png'
import comerce from '../assets/comerce.png'
import gym from '../assets/gym.png'
import port from '../assets/port.png'

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
      title: "03__Gymnastics website",
      github: "https://github.com/Razak002/gymst539",
      demo: "https://gymst539.vercel.app/",
      content: "Overall, recipe apps offer a convenient and fun way to explore new dishes, cook up family favorites, and simplify meal planning anyone can become a master chef in their own kitchen."
    },
    {
      id: 3,
      image: comerce,
      title: "02__ E commerce",
      github: "https://github.com/Razak002/commerce",
      demo: "https://commerce-mb85978gj-razak002.vercel.app/ ",
      content: "Overall, recipe apps offer a convenient and fun way to explore new dishes, cook up family favorites, and simplify meal planning anyone can become a master chef in their own kitchen."
    },

    {
      id: 4,
      image: port,
      title: "04__Portfolio wesite",
      github: "https://github.com/Razak002/Belema-portfolio",
      demo: "https://belema-portfolio.vercel.app/",
      content: "Overall, recipe apps offer a convenient and fun way to explore new dishes, cook up family favorites, and simplify meal planning anyone can become a master chef in their own kitchen."
    },


  ]