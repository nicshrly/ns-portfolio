import React, { useState } from 'react'
import './stack.css'
import Modal from './Modal'

function Stack(props) {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <>
      <Modal slides={props.slides} open={isOpen} onClose={() => setIsOpen(false)}></Modal>
      <div className='stack'>
        <div className='stack-card nes-pointer' onClick={() => setIsOpen(true)}>
          <div className='stack-img'>
            <img src={props.img}></img>
          </div>
        </div>
      </div>
    </>
  )
}

export default Stack
