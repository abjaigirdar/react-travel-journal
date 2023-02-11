import React from 'react'
import Data from '../components/Data'

function Hero(props) {
  return (
    <div className='hero--div'>
        <img className='location--img' src={props.imageUrl}/>
        <div className='details--div'>
            <div className='map--div'>
              <i class="fa-solid fa-location-dot"></i>
              <h3 className='location--text'>{props.location}</h3>
              <a href={props.googleMapsUrl}>View on Google Maps</a>
            </div>
            <h1 className='title'>{props.title}</h1>
            <div className='dates'>
                <h3>{props.startDate}</h3>
                <h3> - </h3>
                <h3>{props.endDate}</h3>
            </div>
            <h3 className='details'>
            {props.description}
            </h3>
        </div>
    </div>
  )
}

export default Hero