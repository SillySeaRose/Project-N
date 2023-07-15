import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavegationBar.css'


const NavegationBar = () => {
  return (
    <nav>
        <ul>
            <li>
                <NavLink to='/' className='link' >Home</NavLink>
            </li>
            <li>
                <NavLink to='/shop' className='link'>Gallery</NavLink>
            </li>
            <li>
                <NavLink to='/about' className='link'>About</NavLink>
            </li>
            <div className='toolbox'>
                <p className='login'>Login</p>
                <input className='searchTool' type='text' placeholder="Search"/>
            </div>
        </ul>

       
    </nav>
  )
}

export default NavegationBar