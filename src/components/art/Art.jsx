import React from 'react'
import './art.css'
import Stack from './Stack'

const Art = () => {
  const crystal = [
    '/ns-portfolio/assets/crystal-mm.png',
    '/ns-portfolio/assets/crystal-gameplay-screen.png',
    '/ns-portfolio/assets/crystal-sell.png',
    '/ns-portfolio/assets/crystal-pause.png',
    '/ns-portfolio/assets/crystal-attack-anim.png'
  ]

  const casino = [
    '/ns-portfolio/assets/casino-mm.png',
    '/ns-portfolio/assets/casino-paused.png',
    '/ns-portfolio/assets/casino-gameplay-screen.png'
  ]

  const sos = [
    '/ns-portfolio/assets/sos-mm.png',
    '/ns-portfolio/assets/sos-hallway.png',
    '/ns-portfolio/assets/sos-room.png',
    '/ns-portfolio/assets/sos-newspaper.png',
    '/ns-portfolio/assets/sos-computer.png',
    '/ns-portfolio/assets/sos-book.png',
    '/ns-portfolio/assets/sos-gameover1.png',
    '/ns-portfolio/assets/sos-gameover2.png'
  ]

  return (
    <section className='art-container' id='art'>
      <h1>Game Art</h1>
      <p>Hand-drawn by me using Procreate :)</p>
      <div className='gallery'>
        <Stack img='/ns-portfolio/assets/crystal-mm.png' slides={crystal}></Stack>
        <Stack img='/ns-portfolio/assets/casino-mm.png' slides={casino}></Stack>
        <Stack img='/ns-portfolio/assets/sos-mm.png' slides={sos}></Stack>
      </div>
    </section>
  )
}

export default Art
