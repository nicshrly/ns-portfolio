import React from 'react'
import './art.css'
import Stack from './Stack'

const Art = () => {
  const crystal = [
    '/assets/crystal-mm.png',
    '/assets/crystal-gameplay-screen.png',
    '/assets/crystal-sell.png',
    '/assets/crystal-pause.png',
    '/assets/crystal-attack-anim.png'
  ]

  const casino = [
    '/assets/casino-mm.png',
    '/assets/casino-paused.png',
    '/assets/casino-gameplay-screen.png'
  ]

  const sos = [
    '/assets/sos-mm.png',
    '/assets/sos-hallway.png',
    '/assets/sos-room.png',
    '/assets/sos-newspaper.png',
    '/assets/sos-computer.png',
    '/assets/sos-book.png',
    '/assets/sos-gameover1.png',
    '/assets/sos-gameover2.png'
  ]

  return (
    <section className='art-container' id='art'>
      <h1>Game Art</h1>
      <div className='gallery'>
        <Stack img='/assets/crystal-mm.png' slides={crystal}></Stack>
        <Stack img='/assets/casino-mm.png' slides={casino}></Stack>
        <Stack img='/assets/sos-mm.png' slides={sos}></Stack>
      </div>
    </section>
  )
}

export default Art
