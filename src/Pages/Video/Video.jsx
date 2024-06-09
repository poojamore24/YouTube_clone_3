import React from 'react'
import './Video.css'
import Playvideo from '../../Components/Playvideo/Playvideo'
import Recommened from '../../Components/Recommened/Recommened'


const Video = () => {
  return (
    <div id='play'>
       <Playvideo></Playvideo>
      <Recommened></Recommened>
    </div>
  )
}

export default Video
