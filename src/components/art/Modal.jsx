import React, { Children } from 'react'
import './modal.css'
import Slider from './Slider'

function Modal({ open , onClose, slides}) {
  if (!open) return null

  return (
    <div className='modal-container'>
      <button className='close-button' onClick={onClose}>Close</button>
      <Slider slides={slides}></Slider>
    </div>
  )
}

export default Modal
