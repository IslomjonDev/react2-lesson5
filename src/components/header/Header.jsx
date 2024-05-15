import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { CiSearch } from "react-icons/ci";
import './Header.css'
const Header = () => {

  return (   
    <>
      
     <header>
        <div className="container">
            <div className="navbar">
               <div className='nav__link'>
                   <NavLink to={'/'}>
                        <p>Home</p>
                    </NavLink>
                    <NavLink to={'/'}>
                        <p>Shop All</p>
                    </NavLink>
                    <NavLink to={'/'}>
                        <p>Blog</p>
                    </NavLink>
               </div>
               <div>
                    <NavLink to={'/'}>
                        <img src={logo} alt="" />
                    </NavLink>
               </div>
                <div className='nav__logo'>
                    <NavLink to={'/contact'}>
                        <p>Contact Us</p>
                    </NavLink>
                    <div className="search">
                        <input  className='search__inp' type="text" placeholder='search' />
                        <CiSearch/>
                    </div>
                </div>
            </div>
        </div>
     </header>


    </>
  )
}

export default Header