import React from 'react'
import "./projects.css"
import Card from './Card'

const Projects = () => {
  return (
    <section className='projects-container' id='projects'>
      <h1>Projects</h1>
      <div className='cards'>
        <Card
          title='Triton Turn-Up'
          img='/assets/ttu-snip.png'
          date='Sept 2024 - Dec 2024'
          text="A UCSD student event planner designed to help students find events on campus that don't conflict with their schedule."
          button='View demo'
          link='https://drive.google.com/file/d/1etaHKJFUDkyN81ZmX4IFr7Le39qyN25g/view?usp=sharing'
        ></Card>
        <Card
          title='Shadows of Sin'
          img='/assets/sos-mm.png'
          date='Oct 2024 - Oct 2024'
          text="A short point-and-click visual novel horror game made in Ren'Py for a 2-week game jam."
          button='View Itch.io'
          link='https://niikamodiiva.itch.io/shadows-of-sin'
        ></Card>
      </div>
      
    </section>
  )
}

export default Projects
