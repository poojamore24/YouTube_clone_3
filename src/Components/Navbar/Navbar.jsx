import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom'; 
import menu_icon from '/menu.png';
import logo from '/logo2.png';
import search_icon from '/search.png';
import upload_icon from '/upload.png';
import more_icon from '/more.png';
import notification_icon from '/notification.png';
import profile_icon from '/jack.png';

const Navbar = ({ setSidebar }) => (
  <div>
    <nav className='flex-dev'>
      <div className='nav-left flex-div'>
        <img className='menu-icon' onClick={() => setSidebar(prev => !prev)} src={menu_icon} alt=''/> 
     

        <Link to='/'><img className='logo' src={logo} alt=''/></Link>
      </div>
      <div className='nav-middle'>
        <div className='search-box flex-div'>
          <input type='text' placeholder='Search'/>
          <img src={search_icon} alt=''/>
        </div>
      </div>
      <div className="nav-right flex-div">
        <img src={upload_icon} alt=''/>
        <img src={more_icon} alt=''/>
        <img src={notification_icon} alt=''/>
        <img className="user-icon" src={profile_icon} alt=''/>
      </div>
    </nav>
  </div>
);

export default Navbar;
