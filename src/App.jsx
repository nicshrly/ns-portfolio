import React from 'react'
import './App.css'
import Sidebar from './components/sidebar/Sidebar'
import Home from './components/home/Home'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import Art from './components/art/Art'
import Contact from './components/contact/Contact'

function App() {
  return (
    <>
      <Sidebar />
      <main>
        <Home />
        <About />
        <Projects />
        <Art />
        <Contact />
      </main>
    </>
  )
}

export default App
