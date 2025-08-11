import React from 'react'
import './art.css'

const Art = () => {
  return (
    <section className='art-container' id='art'>
        <h1>Game Art</h1>
        <div className='gallery'>
          <div className='gallery-stack'>
            <div className='gallery-card'>
              <div className='gallery-img'></div>
            </div>
          </div>
          <div className='gallery-stack'>
            <div className='gallery-card'>
              <div className='gallery-img'></div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Art
