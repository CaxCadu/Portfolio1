import { useState } from 'react'
import linkedin from './assets/linkedin.png'
import github from './assets/github.png'
import EffectButton from './components/EffectButton'
import './App.css'

function App() {

  return (
    <div>
      <EffectButton size="md">Hello</EffectButton>

      <h1>Cadu Portfolio</h1>
      <p>Desenvolvedor Full Stack</p>

      <EffectButton size="md" onClick={() => console.log("Projetos!")}>
        Projetos
      </EffectButton>

      <a href="https://www.linkedin.com/in/carlos-andrade-b609222bb">
        <img src={linkedin} alt="LinkedIn" />
      </a>

      <a href="https://github.com/CaxCadu">
        <img src={github} alt="GitHub" />
      </a>
    </div>
  )
}

export default App
