import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import StyledButton from './components/StyledButton';
import ProjectElement from './components/ProjectElement';
import ProjectImage from './components/ProjectImage';
import AboutElement from './components/AboutElement';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'
import { faUser, faPersonHiking, faMedal } from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare, faInstagramSquare, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import data from './data.json';

function NewPage({ setCurrentPage, currentPage }) {

  const project = data.projects[currentPage];

  return (
    <>
      <div id='newPage' className="d-flex flex-column align-items-center justify-content-center gap-3 w-50 mx-auto px-5">
        <hr className="line lineLeft position-absolute"></hr>
        <hr className="line lineRight position-absolute"></hr>
        <StyledButton text="Go back" className="position-absolute top-0 start-0 px-5 m-5" onClick={() => setCurrentPage("Home")} />
        {currentPage === "Myself" && (
          <div className='d-flex flex-column justify-content-center h-100'>
            <div className="scrollingFrame h-75 mb-2 bg-black">
            <img src="images/Myself.png" alt="Profile" className='w-50 d-block mx-auto' height={350} width={400} />
              <h2 className='text-center mt-3'>Myself</h2>
              <p>
              My name is Niels Jansen, a 21-year-old Software Development student from Zeeland. Coding has always been a passion of mine, and I’m dedicated to becoming a skilled developer capable of building innovative solutions and creating tools that meet my needs.
                <br></br><br></br>
                Outside of my studies, I enjoy gaming, watching films, spending time with friends, and going on long walks with my dog. Gaming sharpens my problem-solving and strategic thinking, while watching films allows me to unwind and enjoy creative storytelling. Socializing at parties with friends helps me create lasting memories, and walking with my dog offers a great way to clear my mind and find inspiration.
                <br></br><br></br>
                I believe that maintaining a balance between work and relaxation is essential for personal growth. I thrive in collaborative environments, love taking on new challenges, and am constantly seeking opportunities to learn and develop my skills. My dedication to both my hobbies and professional goals motivates me to push boundaries. I hope to use my technical expertise and creativity to make a positive difference in the world of software development.</p>
            </div>
            <div className="d-flex gap-5">
              <StyledButton text="My CV" className="px-5 ms-auto" onClick={() => window.open('./CV.pdf', '_blank')} />
            </div>
          </div>
        )}
        {currentPage === "Experience" && (
          <div className='d-flex flex-column justify-content-center h-100'>
            <div className="scrollingFrame h-75 mb-2 bg-black">
              <img src="images/Experience.png" className='w-100' alt="" height={350} width={700} />
              <h2 className='text-center mt-3'>Experience</h2>
              <h5 className='mainColor'>Internship ZES</h5>
              <p>During my third-year internship at ZES in Goes, I had a rewarding experience as a software developer. Working on enhancing the Cockpit software allowed me to dive deep into the Django framework, gaining valuable insights and skills along the way. The hands-on experience and guidance from the team helped me grow professionally and reinforced my passion for software development.</p>
              <h5 className='mainColor'>Education</h5>
              <p>I'm currently enrolled in a software development program at Scalda in Vlissingen. It's a level 4 course, and I'm now in my Exam year. This journey has been quite exciting and fun for me. I've been delving deep into various aspects of software development, learning about coding languages, algorithms, and software design.

                Being part of this program has allowed me to explore my passion for technology and develop practical skills that are essential in today's digital world. From writing code to troubleshooting and debugging, every aspect of software development has fascinated me.</p>
            </div>
            <div className="d-flex justify-content-end gap-3">
              <StyledButton text="ZES" className="px-5" onClick={() => window.open("https://zesinternational.com", '_blank')} />
              <StyledButton text="School" className="px-5" onClick={() => window.open("https://scalda.nl/", '_blank')} />
            </div>
          </div>
        )}
        {currentPage === "Skills" && (
          <div className='d-flex flex-column justify-content-center h-100'>
            <div className="scrollingFrame h-75 mb-2 bg-black">
              <img src="images/Skills.png" className='w-100' alt="" height={350} width={700} />
              <h2 className='text-center mt-3'>Skills</h2>
              <h5 className='mainColor'>Back-End</h5>
              <p>In the back-end realm, I've gained proficiency in Java, SQL, Python, and various frameworks like Hibernate, Struts, and Django. These skills enable me to develop robust and efficient server-side applications, handle data management effectively, and create dynamic web solutions.</p>
              <h5 className='mainColor'>Front-End</h5>
              <p>On the front-end side, I'm well-versed in Bootstrap, HTML/CSS, and JavaScript. This expertise allows me to craft visually appealing and user-friendly interfaces, ensuring an engaging experience for website visitors and application users alike.</p>
              <h5 className='mainColor'>Other</h5>
              <p>Outside of the software development world, I also prioritize my physical well-being by regularly taking walks with my dog. These walks not only help me stay active but also bring a sense of calm and clarity to my mind, boosting my overall energy and productivity.</p>
            </div>
          </div>
        )}
        {/* Project */}
        {currentPage !== "Myself" && currentPage !== "Experience" && currentPage !== "Skills" && (
          <div className='d-flex flex-column justify-content-center'>
            <div className="scrollingFrame h-75 mb-2 bg-black">
              <span className='d-flex flex-column align-items-center'>
              <ProjectImage project={project}/>
              </span>
              <h2 className='mt-4'>{project.title}</h2>
              <p>{project.pageDescription}</p>
              <p className='fst-italic'>{project.labels}</p>
            </div>
            <div className="d-flex justify-content-end gap-3">
              {'link1' in project ? <StyledButton text={project.link1.name} className="px-5" onClick={() => window.open(project.link1.link, '_blank')} /> : ""}
              {'link2' in project ? <StyledButton text={project.link2.name} className="px-5" onClick={() => window.open(project.link2.link, '_blank')} /> : ""}
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default NewPage
