import React from 'react'
import './art.css'
import Stack from './Stack'

const Art = () => {
  const crystal = [
    '../../../public/assets/crystal-mm.png',
    '../../../public/assets/crystal-gameplay-screen.png',
    '../../../public/assets/crystal-sell.png',
    '../../../public/assets/crystal-pause.png',
    '../../../public/assets/crystal-attack-anim.png'
  ]

  const casino = [
    '../../../public/assets/casino-mm.png',
    '../../../public/assets/casino-paused.png',
    '../../../public/assets/casino-gameplay-screen.png'
  ]

  const sos = [
    '../../../public/assets/sos-mm.png',
    '../../../public/assets/sos-hallway.png',
    '../../../public/assets/sos-room.png',
    '../../../public/assets/sos-newspaper.png',
    '../../../public/assets/sos-computer.png',
    '../../../public/assets/sos-book.png',
    '../../../public/assets/sos-gameover1.png',
    '../../../public/assets/sos-gameover2.png'
  ]

  return (
    <section className='art-container' id='art'>
      <h1>Game Art</h1>
      <div className='gallery'>
        <Stack img='../../../public/assets/crystal-mm.png' slides={crystal}></Stack>
        <Stack img='../../../public/assets/casino-mm.png' slides={casino}></Stack>
        <Stack img='../../../public/assets/sos-mm.png' slides={sos}></Stack>
      </div>
    </section>
  )
}

export default Art
