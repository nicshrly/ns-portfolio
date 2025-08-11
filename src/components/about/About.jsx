import React from 'react'
import "./about.css"

const About = () => {
  return (
    <section className='about-container' id='about'>
      <h1>About Me</h1>

      <div className='summary-container'>
        <div className='about-pfp'>
          <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.3163 19.4384C5.92462 18.0052 7.34492 17 9 17H15C16.6551 17 18.0754 18.0052 18.6837 19.4384M16 9.5C16 11.7091 14.2091 13.5 12 13.5C9.79086 13.5 8 11.7091 8 9.5C8 7.29086 9.79086 5.5 12 5.5C14.2091 5.5 16 7.29086 16 9.5ZM22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>

        <div className='summary'>
          <p>
            Hello! I'm Nicole, a fourth-year computer science student with a passion for technology and the arts. 
            At UC San Diego, I've explored everything from cybersecurity to web development, and I've discovered 
            that I work best when I can blend creativity with functionality. Whether it's designing and programming 
            a game or building a web app, I enjoy finding ways to make systems not just work, but feel engaging. I'm 
            still learning and growing, and I'm excited to keep finding new ways to bridge the gap between technical 
            precision and creative expression.
          </p>
        </div>
      </div>
      
    </section>
  )
}

export default About
