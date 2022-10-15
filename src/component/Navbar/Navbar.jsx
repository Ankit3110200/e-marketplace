import React from 'react'
import './navbar.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import PersonIcon from '@mui/icons-material/Person';
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='left-menu'>
            <ul className='nav-list'>
                <li>New Arriaval<KeyboardArrowDownIcon/></li>
                <li>Category<KeyboardArrowDownIcon/></li>
                <li>Services<KeyboardArrowDownIcon/></li>
                <li>Automation<KeyboardArrowDownIcon/></li>
                <li>Office Appliances<KeyboardArrowDownIcon/></li>
            </ul>
        </div>
        <div className='right-menu'>
            <ul className='nav-list'>
                <li><SearchIcon/></li>
                <li><FavoriteBorderIcon/></li>
                <li><ShoppingBagIcon/></li>
                <li><PersonIcon/></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar