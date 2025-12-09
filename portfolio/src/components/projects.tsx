import { useEffect, useRef, useState } from 'react'
import morango from '../assets/morango.png'
import laranja from '../assets/laranja.png'
import abacate from '../assets/abacate.png'
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
    description: 'Uma bebida refrescante com sabor original de morango. Desenvolvida com ingredientes de qualidade para proporcionar uma experiência deliciosa e revitalizante.',
    images: [morango, laranja, abacate]
  }
]

export function ProjectCarousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const autoSlideRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const project = projects[0]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length)
  }

  useEffect(() => {
    // Auto slide a cada 5 segundos
    autoSlideRef.current = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length)
    }, 5000)

    return () => {
      if (autoSlideRef.current) {
        clearInterval(autoSlideRef.current)
      }
    }
  }, [project.images.length])

  // Reset timer quando clica nos botões
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

        {/* Indicadores removidos conforme solicitado */}
      </div>

      <div className="project-info">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
      </div>
    </div>
  )
}