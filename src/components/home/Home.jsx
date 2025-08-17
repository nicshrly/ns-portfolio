import React from 'react'
import "./home.css"

const Home = () => {
  return (
    <section className='home-container' id='home'>

      <div className='home-pfp'>
        <img src='/ns-portfolio/assets/pixil.png'></img>
      </div>

      <div className='intro'>
        <h1>Nicole Shirley</h1>
        <p>Aspiring Game Developer</p>
      </div>
      
      <div className='scroll-down'>
        <a href='#about'>
          <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </div>

    </section>
  )
}

export default Home
