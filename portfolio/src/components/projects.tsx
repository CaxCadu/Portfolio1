import { useEffect, useRef, useState } from 'react'
import morango from '../assets/morango.png'
import laranja from '../assets/laranja.png'
import abacate from '../assets/abacate.png'
import dom1 from '../assets/dom1.png'
import dom2 from '../assets/dom2.png'
import dom3 from '../assets/dom3.png'
import './projects.css'




interface Project {
  id: number
  name: string
  description: string
  images: string[]
}

const projects: Project[] = [
  {
    id: 1,
    name: 'Morango Drink',
    description: `Projeto Refri, um carosel de imagens com animação. Feito com React, Javascript, Html e CSS.\n\n<a href="https://siteinterativorefricadu.netlify.app/" target="_blank" rel="noopener noreferrer">Link do projeto</a>`,
    images: [morango, laranja, abacate],

  },
  {
    id: 2,
    name: 'Dom Irrigação',
    description: `Projeto Dom Irrigação, um site institucional para uma empresa de irrigação automatizada. Feito com React, Javascript, Html e CSS.\n\n<a href="https://domirrigacao.netlify.app/" target="_blank" rel="noopener noreferrer">Link do projeto</a>`,
    images: [dom1, dom2, dom3]
  }
]

function ProjectCard({ project }: { project: Project }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const autoSlideRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length)
  }

  useEffect(() => {
    autoSlideRef.current = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length)
    }, 5000)

    return () => {
      if (autoSlideRef.current) clearInterval(autoSlideRef.current)
    }
  }, [project.images.length])

  const handleNavigation = (callback: () => void) => {
    callback()
    if (autoSlideRef.current) {
      clearInterval(autoSlideRef.current)
    }
    autoSlideRef.current = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length)
    }, 5000)
  }

  return (
    <div className="project-card">
      <div className="carousel-wrapper">
        <div className="carousel-image-container">
          {project.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${project.name} - Imagem ${index + 1}`}
              className={`carousel-image ${index === currentImageIndex ? 'active' : ''}`}
            />
          ))}
        </div>

        <button className="carousel-btn prev-btn" onClick={() => handleNavigation(prevImage)}>
          ❮
        </button>
        <button className="carousel-btn next-btn" onClick={() => handleNavigation(nextImage)}>
          ❯
        </button>

      </div>

      <div className="project-info">
        <h3>{project.name}</h3>
        <div className="project-description">
          {project.description.split('\n').map((line, index) => (
            line.includes('<a') ? (
              <div key={index} dangerouslySetInnerHTML={{ __html: line }} />
            ) : (
              <p key={index}>{line}</p>
            )
          ))}
        </div>
      </div>
    </div>
  )
}

export function ProjectCarousel() {

  return (
    <div className="projects-grid">
      {projects.map((p) => (
        <ProjectCard key={p.id} project={p} />
      ))}
    </div>
  )
}