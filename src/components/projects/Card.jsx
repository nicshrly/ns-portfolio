import React from 'react'
import './card.css'

function Card(props){
  return (
    <div className='card'>
        <div className='crop'>
            <img className='card-image' src={props.img} alt={props.title} />
        </div>
        <p className='card-title'>{props.title}</p>
        <p className='card-date'>{props.date}</p>
        <p className='card-text'>{props.text}</p>
        <button className='card-button'>{props.button}</button>
    </div>
  )
}

export default Card