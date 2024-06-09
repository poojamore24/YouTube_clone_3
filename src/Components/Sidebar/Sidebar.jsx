import React from 'react'
import './Sidebar.css'
import  home from '/home.png'
import game_icon from '/game_icon.png'
import automobiles from '/automobiles.png'
import sports from '/sports.png'
import entertainment from '/entertainment.png'
import tech from '/tech.png'
import music from '/music.png'
import blogs from '/blogs.png'
import news from  '/news.png'
import jack from '/jack.png'
import simon from '/simon.png'
import tom from '/tom.png'
import megan from '/megan.png'
import cameron from '/cameron.png'


 function Sidebar({ sidebar}){
  return (
    <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
      <div className='shortcut-links'>
        <div className='side-link'   >
          <img src={home} alt=''/><p>Home</p>
        </div>
        <div className='side-link' >
          <img src={game_icon} alt=''/><p>Game</p>
        </div>
        
        <div className='side-link ' >
          <img src={sports} alt=''/><p>Sports</p>
        </div>
        <div className= 'side-link'>
          <img src={automobiles} alt=''/><p>Automobile</p>
        </div>
        <div className= 'side-link'  >
          <img src={entertainment} alt=''/><p>Enterment</p>
        </div>
        <div className='side-link' >
          <img src={tech} alt=''/><p>Techology</p>
        </div>
        <div className='side-link' >
          <img src={ music} alt=''/><p> Music</p>
        </div>
        <div className='side-link'   >
          <img src={blogs } alt=''/><p>Blogs </p>
        </div>
        <div className='side-link'  >
          <img src={ news} alt=''/><p> News</p>
        </div>
        
        <hr/>
      </div>
      <div className="subscribed-list">
        <h3>Subscribed</h3>
        <div className="side-link">
          <img src={jack} alt=''/><p>Jack</p>
        </div>
        <div className='side-link'>
          <img src={simon} alt=''/><p> Simon </p>
        </div>
        <div className="side-link">
          <img src={tom} alt=''/><p>Tom</p>
        </div>
        
        <div className='side-link'>
          <img src={megan} alt=''/><p>Megan</p>
        </div>
        <div className='side-link'>
          <img src={cameron} alt=''/><p> Cameron </p>
        </div>
        
      </div>
      
    </div>
  )
  }

export default Sidebar