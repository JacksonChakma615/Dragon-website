 import React from 'react';
 import  logo from '../assets/user.png';
import { Link, NavLink } from 'react-router';
 
 const Navbar = () => {
    return (
        <div className='flex justify-between items-center text-accent'>
           <div className=""></div>
           <div className="nav flex gap-4 ">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/career'>Career</NavLink>
           </div>
           <div className="login-btn gap-2 flex">
            <img src={logo} alt="" />
            <Link to="auth/login" className='btn  btn-primary px-9 '> Login</Link>
           </div>
        </div>
    );
 };
 
 export default Navbar;