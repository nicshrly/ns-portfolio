import React from 'react'
import "./projects.css"
import Card from './Card'
import ttuSnip from '../../assets/ttu-snip.png'
import sosSnip from '../../assets/sos-snip.png'

const Projects = () => {
  return (
    <section className='projects-container' id='projects'>
      <h1>Projects</h1>
      <div className='cards'>
        <Card
          title='Triton Turn-Up'
          date='Sept 2024 - Dec 2024'
          text="A UCSD student event planner designed to help students find events on campus that don't conflict with their schedule."
          button='View demo'
        ></Card>
        <Card
          title='Shadows of Sin'
          date='Oct 2024 - Oct 2024'
          text="A short point-and-click visual novel horror game made in Ren'Py for a 2-week game jam."
          button='View Itch.io'
        ></Card>
      </div>
      
    </section>
  )
}

export default Projects
