import React from 'react'
import "./about.css"

const About = () => {
  return (
    <section className='about-container' id='about'>
      <h1>About Me</h1>

      <div className='summary-container'>
        <div className='about-pfp'>
          <img src='/ns-portfolio/assets/pixil2.png'></img>
        </div>
        <div className='summary'>
          <div className="nes-balloon from-left">
            <p>
              Hello! I'm Nicole, a fourth-year computer science student with a passion for technology and art. 
              At UC San Diego, I've explored everything from cybersecurity to web development, and I've discovered 
              that I work best when I can blend creativity with functionality. Whether it's designing and programming 
              a game or building a web app, I enjoy finding ways to make systems not just work, but feel engaging. I'm 
              still learning and growing, and I'm excited to keep finding new ways to bridge the gap between technical 
              precision and creative expression.
            </p>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default About
