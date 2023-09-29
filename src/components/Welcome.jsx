import React from 'react'
import welcomeImg from '../assets/home_screen.avif';
function Welcome() {
  return (
    <div className='welcome-page'>
            <img src={welcomeImg} alt={'Stack Player - Online video player'}/>
            <h1>Select A Video To Play</h1>
    </div>
  )
}

export default Welcome