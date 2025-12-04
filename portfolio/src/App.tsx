import React from 'react'
import linkedin from './assets/linkedin.png'
import github from './assets/github.png'
import email from './assets/email.webp'
import insta from './assets/insta.png'
import foto from './assets/foto.jpg'
import css from './assets/css.png'
import js from './assets/js.png'
import reactImg from './assets/react.png'
import gitImg from './assets/git.png'
import ts from './assets/ts.webp'
import html from './assets/html.png'
import './App.css'

function App() {

  return (
    <div>
      <img className="Cadu" src={foto} alt="foto" />

      <h1>Carlos Andrade</h1>
      <p className="title">Desenvolvedor Full Stack</p>

      <a href="https://www.linkedin.com/in/carlos-andrade-b609222bb">
        <img className='imgrds' src={linkedin} alt="LinkedIn" />
      </a>

      <a href="https://github.com/CaxCadu">
        <img className='imgrds'src={github} alt="GitHub" />
      </a>

      <a href="mailto:carlos.s.andrade2602@gmail.com">
        <img className='imgrds'src={email} alt="Email" />
      </a>
      <a href="https://www.instagram.com/caadu.dev">
        <img className='imgrds' src={insta} alt="Instagram" />
      </a>
      <div className="center-btn">
        <button>
          Projetos
        </button>

        <div className="carousel">
          <div className="group">
            <div className="card"><img src={gitImg} alt="Git" /></div>
            <div className="card"><img src={ts} alt="ts" /></div>
            <div className="card"><img src={github} alt="GitHub" /></div>
            <div className="card"><img src={css} alt="CSS" /></div>
            <div className="card"><img src={js} alt="JavaScript" /></div>
            <div className="card"><img src={reactImg} alt="React" /></div>
            <div className="card"><img src={html} alt="html" /></div>
            
          </div>
          <div className="group">
            <div className="card"><img src={gitImg} alt="Git" /></div>
            <div className="card"><img src={ts} alt="ts" /></div>
            <div className="card"><img src={github} alt="GitHub" /></div>
            <div className="card"><img src={css} alt="CSS" /></div>
            <div className="card"><img src={js} alt="JavaScript" /></div>
            <div className="card"><img src={reactImg} alt="React" /></div>
            <div className="card"><img src={html} alt="html" /></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
