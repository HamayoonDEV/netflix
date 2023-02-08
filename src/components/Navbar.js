import React from 'react'
import {FaSearch,FaSignOutAlt} from 'react-icons/fa'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='img-logo'>
            <img alt='netflix' src='https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png' />
        </div>
        <div className='nav-ul'>
            <ul>
                <li>Home</li>
                <li>Tv Shows</li>
                <li>Movies</li>
                <li>My List</li>
            </ul>
        </div>
        <div className='search-logout'>
            <span>
            <FaSearch style={{color:"white" }}/>
            </span>
            <FaSignOutAlt style={{color:"red"}} />
        
        </div>
    </div>
  )
}

export default Navbar