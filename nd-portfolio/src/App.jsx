import './App.css'
import SocialLinks from './components/SocialLinks'
import ProjectCard from './components/ProjectCard'
import starlightLogo from './assets/STARLIGHT_logo.jpg'
import SlottyLogo from './assets/Slotty_DemoImg.jpeg'

function App() {
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
      image: SlottyLogo,
      githubLink: "https://github.com/LyricalLemon/PyGames"
    },];
  return (
    <div className="container">
      <header>
        <h1>Noah Dias</h1>
        <SocialLinks />
      </header>

      <main>
        <section className="Large Projects">
          <h2>Large Projects:</h2>
        </section>
        <section className="projects">
          <div className="projects-grid">
            {LargeProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </section>
        <section className="Small Projects">
          <h2>Small Projects:</h2>
          <section className="projects">
          {SmallProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </section>
        </section>
      </main>
    </div>
  )
}

export default App
