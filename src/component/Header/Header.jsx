import React from 'react'
import logo from '../../images/logo.jpeg'
import './header.css'
const Header = () => {
  return (
    <div className='header'>
        <div className='logo'>
            <img src={logo}/>
            <span>E-MARKETPLACE</span>
        </div>

    </div>
  )
}

export default Header