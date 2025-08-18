import React, { useState } from 'react'
import './card.css'

function Card(props){
  const [flipped, setFlipped] = useState(false)

  return (
    <div className='card-flip nes-pointer' onClick={() => setFlipped(!flipped)}>
      <div className={`card-inner ${flipped ? "is-flipped" : ""}`}>
        
        <div className='card-front'>
          <div className='card'>
            <div className='card-head'>{props.title}</div>
            <div className='card-img-box'>
              <img src={props.img}></img>
            </div>
            <div className='card-date'>{props.date}</div>
            <div className='card-content'>{props.text}</div>
            <a href={props.link}>
              <div className='card-button nes-pointer' onClick={(e) => e.stopPropagation()}>
                {props.button}
              </div>
            </a>
          </div>
        </div>

        <div className='card-back'>
          <div className='card'>
            <div className='card-head'>Contributions</div>
            <div className='card-content'>
              {props.contributions}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Card