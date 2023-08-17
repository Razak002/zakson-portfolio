import { Container } from "react-bootstrap";
import { AiOutlineLink, AiFillGithub } from "react-icons/ai";
import Project1 from "../assets/img/Project1.webp";
import Project2 from "../assets/img/Project2.webp";
import Project3 from "../assets/img/Project3.webp";
import Project4 from "../assets/img/Project4.webp";
import Project5 from "../assets/img/Project5.webp";
import Project61 from "../assets/img/Project61.webp";
import Project7 from "../assets/img/Project7.webp";

import { Helmet, HelmetProvider } from "react-helmet-async";
// import { Player } from "video-react";

import "./Projects.css";

function Projects() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Aliyu AQ - Project</title>
        </Helmet>
      </HelmetProvider>
      <Container fluid className="projects-container">
        <div className="projects-title animate__animated animate__zoomIn">
          <h3>Projects</h3>
          <h4>
            ───&nbsp;&nbsp;Page <strong>04</strong>
          </h4>
        </div>
        <div className="projects-wrapper animate__animated animate__fadeIn animate_slower my-4">
          <div className="row custom-margin-bottom">
            <div className="col project-col">
              <div className="project-card">
                <div className="imgsec">
                  <img src={Project1} alt="Project 1" loading="lazy" />
                </div>
                <div className="project-content">
                  <h3>DRIVING ACADEMY</h3>
                  <p>
                    MCI DRIVE is a website to that trains individuals
                    on various driving skills and car stunts safely.
                  </p>
                  <a
                    className="btn-website"
                    href="https://mci-driving-school.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiOutlineLink className="project-icon" />
                    &nbsp;&nbsp;Website
                  </a>
                  <a
                    className="btn-github"
                    href="https://github.com/Razak002/mci-driving-school "
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillGithub className="project-icon" />
                    &nbsp;&nbsp;GitHub
                  </a>
                  <div className="d-block tech-stack-wrapper">
                    <span id="tech-stack">React JS</span>
                    <span id="tech-stack">Javascript</span>


                  </div>
                </div>
              </div>
            </div>
            <div className="col project-col">
              <div className="project-card">
                <div className="imgsec">
                  <img src={Project2} alt="Project 2" loading="lazy" />
                </div>
                <div className="project-content">
                  <h3>GYM</h3>
                  <p>
                    GYM  is a website to register and engage in amazing workouts and body fitness excercise.
                  </p>
                  <a
                    className="btn-website"
                    href="https://gymst539.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiOutlineLink className="project-icon" />
                    &nbsp;&nbsp;Website
                  </a>
                  <a
                    className="btn-github"
                    href="https://github.com/Razak002/gymst539"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillGithub className="project-icon" />
                    &nbsp;&nbsp;GitHub
                  </a>
                  <div className="d-block tech-stack-wrapper">
                    <span id="tech-stack">ReactJS</span>
                    <span id="tech-stack">css</span>
                    <span id="tech-stack">React Scroll</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col project-col">
              <div className="project-card">
                <div className="imgsec">
                  <img src={Project3} alt="Project 3" loading="lazy" />
                </div>
                <div className="project-content">
                  <h3>BELEMA</h3>
                  <p>
                    Belema an outstanding business portfolio design for any company
                  </p>
                  <a
                    className="btn-website"
                    href="https://belema-portfolio.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiOutlineLink className="project-icon" />
                    &nbsp;&nbsp;Website
                  </a>
                  <a
                    className="btn-github"
                    href="https://github.com/Razak002/Belema-portfolio"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillGithub className="project-icon" />
                    &nbsp;&nbsp;GitHub
                  </a>
                  <div className="d-block tech-stack-wrapper">
                    <span id="tech-stack">React JS</span>
                    <span id="tech-stack">Tailwind css</span>

                  </div>
                </div>
              </div>
            </div>
            <div className="col project-col">
              <div className="project-card">
                <div className="imgsec">
                  <img src={Project61} alt="Project 4" loading="lazy" />
                </div>
                <div className="project-content">
                  <h3>Dope Barber</h3>
                  <p>
                    Dope barber is a website for finding the best barbers in a
                    city
                  </p>
                  <a
                    className="btn-website"
                    href=""
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiOutlineLink className="project-icon" />
                    &nbsp;&nbsp;Website
                  </a>
                  <a
                    className="btn-github"
                    href=""
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillGithub className="project-icon" />
                    &nbsp;&nbsp;GitHub
                  </a>
                  <div className="d-block tech-stack-wrapper">
                    <span id="tech-stack">Javascript</span>
                    <span id="tech-stack">React JS</span>
                    <span id="tech-stack">Css</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col project-col">
              <div className="project-card">
                <img src={Project7} alt="Project 6" loading="lazy" />
                <div className="project-content">
                  <h3>Weather Search</h3>
                  <p>
                    Is a website to find the current weather around the world,
                    this website uses the OpenWeather API.
                  </p>
                  <a
                    className="btn-website"
                    href="https://weather-app-six-woad.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiOutlineLink className="project-icon" />
                    &nbsp;&nbsp;Website
                  </a>
                  <a
                    className="btn-github"
                    href="https://github.com/Razak002/weather-app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillGithub className="project-icon" />
                    &nbsp;&nbsp;GitHub
                  </a>
                  <div className="d-block tech-stack-wrapper">
                    <span id="tech-stack">React JS</span>
                    <span id="tech-stack">SCSS</span>
                    <span id="tech-stack">API</span>

                  </div>
                </div>
              </div>
            </div>
            <div className="col project-col">
              <div className="project-card">
                <img src={Project5} alt="Project 5" loading="lazy" />
                <div className="project-content">
                  <h3>Zak's Todo </h3>
                  <p>
                    Website for recording all your activities and even previous history .
                  </p>

                  <a
                    className="btn-website"
                    href="https://chat-app-41aw-7472m7z4z-razak002.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiOutlineLink className="project-icon" />
                    &nbsp;&nbsp;Website
                  </a>
                  <a
                    className="btn-github"
                    href="https://github.com/Razak002/TODO-manager"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillGithub className="project-icon" />
                    &nbsp;&nbsp;GitHub
                  </a>
                  <div className="d-block tech-stack-wrapper">
                    <span id="tech-stack">React JS</span>
                    <span id="tech-stack">Scss</span>
                    <span id="tech-stack"><a href="https://chat-app-41aw-7472m7z4z-razak002.vercel.app/">URL</a></span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col project-col">
              <div className="project-card">
                <div className="imgsec">
                  <img
                    src={Project4}
                    alt="Project 12"
                    className="dif-image-project"
                    loading="lazy"
                  />
                </div>
                <div className="project-content">
                  <h3>Food Ordering</h3>
                  <p>
                    Food ordering dashboard, this
                    application consists of type of recipe and popular categories of recipe
                  </p>

                  <a
                    className="btn-github"
                    href="https://github.com/Razak002/Recipe"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillGithub className="project-icon" />
                    &nbsp;&nbsp;GitHub
                  </a>
                  <div className="d-block tech-stack-wrapper">
                    <span id="tech-stack">React js</span>
                    <span id="tech-stack">Meal DB API</span>
                    <span id="tech-stack"><a href="https://recipe-gldpaf1wo-razak002.vercel.app/">URL</a></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Projects;
