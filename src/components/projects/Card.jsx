import React from 'react'
import './card.css'

function Card(props){
  return (
    <div className='card'>
      <div className='card-head'>{props.title}</div>
      <div className='card-img-box'>
        <img src={props.img}></img>
      </div>
      <div className='card-date'>{props.date}</div>
      <div className='card-content'>{props.text}</div>
      <a href={props.link}>
        <div className='card-button nes-pointer'>
          {props.button}
        </div>
      </a>
    </div>
  )
}

export default Card