import { useEffect, useRef } from 'react'
import Splide from '@splidejs/splide'
import '@splidejs/splide/css/core'
import './Carousel.css'

function Carousel({ projects }) {
  const splideRef = useRef(null)

  useEffect(() => {
    if (splideRef.current) {
      const splide = new Splide(splideRef.current, {
        type: 'loop',
        drag: 'free',
        focus: 'center',
        perPage: 3,
        arrows: false,
        pagination: false,
        gap: '2rem',
        padding: { left: '5%', right: '5%' },
        breakpoints: {
          1200: {
            perPage: 2,
            gap: '1.5rem',
          },
          768: {
            perPage: 1,
            gap: '1.5rem',
            padding: { left: '10%', right: '10%' },
          },
          480: {
            perPage: 1,
            gap: '1rem',
            padding: { left: '5%', right: '5%' },
          },
        },
      })

      splide.mount()

      return () => {
        splide.destroy()
      }
    }
  }, [])

  return (
    <div className="carousel-wrapper">
      <div ref={splideRef} className="splide" role="group" aria-label="Projects carousel">
        <div className="splide__track">
          <ul className="splide__list">
            {projects.map((project) => (
              <li key={project.id} className="splide__slide">
                <div className="project-card-carousel">
                  <div className="project-image-carousel">
                    <img src={project.image} alt={project.title} loading="lazy" />
                  </div>
                  <div className="project-content">
                    <h3 className="project-title-carousel">{project.title}</h3>
                    <p className="project-description-carousel">{project.description}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Carousel
