import React from 'react'
import './card.css'

function Card(props){
  return (
    <div className='card'>
      <div className='card-head'>{props.title}</div>
      <div className='card-img-box'></div>
      <div className='card-date'>{props.date}</div>
      <div className='card-content'>{props.text}</div>
      <div className='card-button nes-pointer'>
        {props.button}
      </div>
      
    </div>
  )
}

export default Card