import React from 'react'
import linkedin from './assets/linkedin.png'
import github from './assets/github.png'
import email from './assets/email.webp'
import insta from './assets/insta.png'
import './App.css'

function App() {

  return (
    <div>


      <h1>Cadu Portfolio</h1>
      
      <p className='title'>Cadu programador</p>
      <p className='description'></p>



      <a href="https://www.linkedin.com/in/carlos-andrade-b609222bb">
        <img src={linkedin} alt="LinkedIn" />
      </a>

      <a href="https://github.com/CaxCadu">
        <img src={github} alt="GitHub" />
      </a>

      <a href="mailto:carlos.s.andrade2602@gmail.com">
        <img src={email} alt="Email" />
      </a>
      <a href="https://www.instagram.com/caadu.dev">
        <img src={insta} alt="Instagram" />
      </a>
      <div className="center-btn">
        <button>
          Projetos
        </button>
      </div>
    </div>
  )
}

export default App
