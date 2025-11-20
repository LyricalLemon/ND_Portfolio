import { useState } from 'react'
import './App.css'
import SocialLinks from './components/SocialLinks'
import ProjectCard from './components/ProjectCard'
import CodeRain from './components/codeRain'
import Contact from './components/Contact'
import starlightLogo from './assets/STARLIGHT_logo.jpg'
import SlottyLogo from './assets/Slotty_DemoImg.jpg'
import TurtleRaceLogo from './assets/TurtleRace_Demo.PNG'

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const LargeProjects = [
    {
      title: "StarLight",
      description: "A 2D space shooter game inspired by Space Invaders developed using Unity and C# featuring Sine-wave based enemy movement patterns, diverse enemy types and scoring system.",
      image: starlightLogo,  // Changed this line to use the imported image
      githubLink: "https://github.com/LyricalLemon/STARLIGHT"
    },
    {
      title: "Slotty",
      description: "CLI-Based 2D slot machine written in Python leveraging core features like Betting and Rerolling.",
      image: SlottyLogo,
      githubLink: "https://github.com/LyricalLemon/PyGames"
    },];

  const SmallProjects = [
    {
      title: "TurtleRacer",
      description: "Fun little game created using Python's Turtle module allowing users to see turtles racing against each other.",
      image: TurtleRaceLogo,
      githubLink: "https://github.com/LyricalLemon/PyGames"
    },
    {
      title: "TurtleRacer",
      description: "Fun little game created using Python's Turtle module allowing users to see turtles racing against each other.",
      image: TurtleRaceLogo,
      githubLink: "https://github.com/LyricalLemon/PyGames"
    },
    {
      title: "TurtleRacer",
      description: "Fun little game created using Python's Turtle module allowing users to see turtles racing against each other.",
      image: TurtleRaceLogo,
      githubLink: "https://github.com/LyricalLemon/PyGames"
    },
  ];

  return (
    <>
      <div className="codeRain-background">
        <CodeRain />
      </div>

      {currentPage === 'home' ? (
        <div className="container">
          <header>
            <h1>Noah Dias</h1>
            <SocialLinks />
          </header>

          <div className="separator"></div>

          <main>
            <section className="Large Projects">
              <h2>LARGE PROJECTS</h2>
              <div className="projects-grid">
                {LargeProjects.map((project, index) => (
                  <ProjectCard key={index} {...project} />
                ))}
              </div>
            </section>

            <section className="Small Projects">
              <h2>SMALL PROJECTS</h2>
              <section className="projects-grid">
                {SmallProjects.map((project, index) => (
                  <ProjectCard key={index} {...project} />
                ))}
              </section>
            </section>
          </main>

          <footer>
            <p>&copy; Noah Dias 2025 All Rights Reserved</p>
            <button className="contact-btn" onClick={() => setCurrentPage('contact')}>
              Contact Me
            </button>
          </footer>
        </div>
      ) : (
        <div className="container">
          <button className="back-btn" onClick={() => setCurrentPage('home')}>← Back</button>
          <Contact />
        </div>
      )}
    </>
  );
}

export default App
