import { useEffect, useRef, useState } from 'react'
import linkedin from './assets/linkedin.png'
import github1 from './assets/github.png'
import email from './assets/email.webp'
import insta from './assets/insta.png'
import foto from './assets/foto.jpg'
import js from './assets/js.png'
import reactImg from './assets/react.png'
import gitImg from './assets/git.png'
import ts from './assets/ts.webp'
import html from './assets/html.png'
import { ProjectCarousel } from './components/projects'
import './App.css'
import { ContactForm } from './components/contact'
import StarBorder from '../src/components/border'


function App() {
  const [isVisible, setIsVisible] = useState(false)
  const sobreRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sobreRef.current) {
      observer.observe(sobreRef.current)
    }

    return () => {
      if (sobreRef.current) {
        observer.unobserve(sobreRef.current)
      }
    }
  }, [])

  const handleContactClick = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleProjectsClick = () => {
    document.getElementById('Projetos')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleDownloadCV = () => {
    // Adicione aqui o link para download do seu CV
    const link = document.createElement('a')
    link.href = '/path-to-your-cv.pdf' // Altere para o caminho do seu CV
    link.download = 'Carlos_Andrade_CV.pdf'
    link.click()
  }

  return (
    <div className="container">

      <section className="hero-section">
        <div className="left-content">
          <h1>Carlos Andrade</h1>
          <p className="title">Desenvolvedor Full Stack</p>
          
          <div className="social-links">
            <a href="https://www.linkedin.com/in/carlos-andrade-b609222bb" target="_blank" rel="noopener noreferrer">
              <img className='imgrds' src={linkedin} alt="LinkedIn" />
            </a>
            <a href="https://github.com/CaxCadu" target="_blank" rel="noopener noreferrer">
              <img className='imgrds' src={github1} alt="GitHub" />
            </a>
            <a href="mailto:carlos.s.andrade2602@gmail.com">
              <img className='imgrds' src={email} alt="Email" />
            </a>
            <a href="https://www.instagram.com/caadu.dev" target="_blank" rel="noopener noreferrer">
              <img className='imgrds' src={insta} alt="Instagram" />
            </a>
          </div>
        </div>
        

        <img className='Cadu' src={foto} alt="Foto de Carlos Andrade" />
      </section>


      <div className="center-btn">
        <button onClick={handleContactClick}>
          Entre em Contato
        </button>
        <button onClick={handleProjectsClick}>
          Projetos
        </button>
        <button onClick={handleDownloadCV}>
          Baixar CV
        </button>
      </div>

      <section 
        ref={sobreRef}
        id='sobre'
        className={`sobre ${isVisible ? 'visible' : ''}`}
      >
        <p className='p1'>Sobre mim</p>
        <div className='borda'>
          <p>Olá! Meu nome é Carlos Andrade e sou programador. Desde os 14 anos apaixonado por desenvolvimento de software. Tenho conhecimento em TypeScript, Python, React, HTML, CSS, possuo inglês básico/intermediário, em constante evolução para melhorar a comunicação em ambientes profissionais globais.</p>
          <p>Sou focado em escrever código limpo, eficiente e continuamente aprender novas técnicas para melhorar minhas soluções.</p>
          <p>Estou sempre aberto a colaborações e novos desafios!</p>
        </div>
      </section>


      <section id="carrossel" className="carousel-container">
        <div className="carousel">
          <div className="group">
            <div className="card"><img src={gitImg} alt="Git" /></div>
            <div className="card"><img src={ts} alt="TypeScript" /></div>
            <div className="card"><img src={js} alt="JavaScript" /></div>
            <div className="card"><img src={reactImg} alt="React" /></div>
            <div className="card"><img src={html} alt="HTML5" /></div>
          </div>
          <div className="group">
            <div className="card"><img src={gitImg} alt="Git" /></div>
            <div className="card"><img src={ts} alt="TypeScript" /></div>
            <div className="card"><img src={js} alt="JavaScript" /></div>
            <div className="card"><img src={reactImg} alt="React" /></div>
            <div className="card"><img src={html} alt="HTML5" /></div>
          </div>
        </div>
      </section>

      <section id='Projetos'>
        <h2>Projetos</h2>
        <ProjectCarousel />
      </section>

      <section id='contato'>
        <h2>Contato</h2>
        <ContactForm />
      </section>
    </div>   
)};


export default App