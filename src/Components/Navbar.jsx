 import React, { use } from 'react';
 import  logo from '../assets/user.png';
import { Link, NavLink } from 'react-router';
import { Authcontex } from '../Provider/AuthProvider';
 
 const Navbar = () => {
   const {user}=use(Authcontex)
    return (
        <div className='flex justify-between items-center text-accent'>
           <div className="">{user && user.email}</div>
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