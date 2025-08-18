import React from 'react'
import "./projects.css"
import Card from './Card'

const Projects = () => {
  const prismaticList = (
    <ul>
      <li>Drew all 2d assets</li>
      <li>Designed UI/UX</li>
    </ul> 
  )
  const ttuList = (
    <ul>
      <li>Developed using ReactJS/Vite</li>
      <li>Implemented CSS frameworks and integrated Google OAuth</li>
      <li>Conducted user research and usability testing</li>
      <li>Used an agile development workflow</li>
    </ul> 
  )
  const sosList = (
    <ul>
      <li>Collaborated with teammates on game design</li>
      <li>Drew all original characters, backgrounds, and UI assets</li>
      <li>Coded all game logic, including choice-based story branching and interactive UI</li>
      <li>Integrated all SFX</li>
      <li>Conducted iterative playtests</li>
    </ul> 
  )

  return (
    <section className='projects-container' id='projects'>
      <h1>Projects</h1>
      <div className='cards'>
        <Card
          title='Prismatic TD'
          img='/ns-portfolio/assets/crystal-mm-crop.png'
          date='Apr 2025'
          text='A tower defense game made in Unity for a 2-week game jam.'
          button='View Itch.io'
          link='https://eatyboy.itch.io/prismatic-tower-defense'
          contributions={prismaticList}
          ></Card>
        <Card
          title='Triton Turn-Up'
          img='/ns-portfolio/assets/ttu-snip.png'
          date='Sept 2024 - Dec 2024'
          text="A UCSD student event planner designed to help students find events on campus that don't conflict with their schedule."
          button='View demo'
          link='https://drive.google.com/file/d/1etaHKJFUDkyN81ZmX4IFr7Le39qyN25g/view?usp=sharing'
          contributions={ttuList}
        ></Card>
        <Card
          title='Shadows of Sin'
          img='/ns-portfolio/assets/sos-mm.png'
          date='Oct 2024'
          text="A short point-and-click visual novel horror game made in Ren'Py for a 2-week game jam."
          button='View Itch.io'
          link='https://niikamodiiva.itch.io/shadows-of-sin'
          contributions={sosList}
        ></Card>
      </div>
      
    </section>
  )
}

export default Projects
