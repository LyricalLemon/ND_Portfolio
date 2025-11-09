import './App.css'
import SocialLinks from './components/SocialLinks'
import ProjectCard from './components/ProjectCard'
import starlightLogo from './assets/STARLIGHT_logo.jpg'

function App() {
  const projects = [
    {
      title: "StarLight",
      description: "A 2D space shooter game inspired by Space Invaders developed using Unity and C# featuring Sine-wave based enemy movement patterns, diverse enemy types and scoring system.",
      image: starlightLogo,  // Changed this line to use the imported image
      githubLink: "https://github.com/yourusername/project"
    },
    // Add more projects as needed
  ];

  return (
    <div className="container">
      <header>
        <h1>Noah Dias</h1>
        <SocialLinks />
      </header>

      <main>
        <section className="Heading">
          <h2>Large Projects:</h2>
        </section>
        <section className="projects">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </section>
      </main>
    </div>
  )
}

export default App
