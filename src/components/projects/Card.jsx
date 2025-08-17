import React, { useState } from 'react'
import './card.css'

function Card(props){
  const [expanded, setExpanded] = useState(false)

  return (
    <div className='card-container'>
      <div 
        className={`card ${expanded ? "expanded" : ""}`} 
        onClick={() => setExpanded(!expanded)}
      >
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
      <div className='more'>
        <p>Contributions</p>
        <div class="nes-container is-centered">
          <p>- bullet point</p>
          <p>- bullet point</p>
          <p>- bullet point</p>
        </div>
      </div>
    </div>
  )
}

export default Card