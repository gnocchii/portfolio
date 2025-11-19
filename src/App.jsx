import { useEffect, useState } from 'react'
import Scene from './components/Scene'
import './App.css'

// Sample project data
const projects = [
  {
    id: 1,
    title: 'Apple Product Media Design',
    description: 'Crafting the visual language for next-generation product experiences',
    image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=800&h=600&fit=crop'
  },
  {
    id: 2,
    title: 'E-Commerce Platform Redesign',
    description: 'Reimagining the shopping experience for modern consumers',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop'
  },
  {
    id: 3,
    title: 'Fintech Mobile Application',
    description: 'Simplifying complex financial services through intuitive design',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop'
  },
  {
    id: 4,
    title: 'Healthcare Dashboard',
    description: 'Empowering medical professionals with data-driven insights',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop'
  },
  {
    id: 5,
    title: 'Creative Portfolio System',
    description: 'Building a platform for artists to showcase their work',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop'
  },
  {
    id: 6,
    title: 'Smart Home Interface',
    description: 'Designing the future of connected living spaces',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=600&fit=crop'
  }
]

function App() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Trigger fade-in animation on mount
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="app">
      {/* Fixed Header */}
      <header className="header">
        <div className="header-initials">MY</div>
        <nav className="nav">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#play">Play</a>
          <a href="#photos">Photos</a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="main">
        {/* Hero Section */}
        <section className={`hero ${isVisible ? 'visible' : ''}`}>
          <div className="hero-3d">
            <Scene />
          </div>
          <p className="hero-description">
            Product Designer reimagining complex challenges into elegant, user-centered solutions
          </p>
        </section>

        {/* Work Section */}
        <section className="work" id="work">
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p className="footer-cta">
            Thanks for stopping by! Curious to collaborate? Let's make it happen!
          </p>
          <button onClick={scrollToTop} className="back-to-top">
            Back To Top
          </button>
          <p className="footer-copyright">
            © 2025 All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
