 import React from 'react';
 import logo from '../assets/logo.png'
import { format } from 'date-fns';
 const Header = () => {
    return (
        <div className='flex justify-center flex-col items-center gap-3'>
          <img src={logo} alt="" />
          <p className='text-accent'>Journalism Without Fear or Favour</p>

          {/* date fns  = [Sunday, November 27, 2025] */}
          <p className='text-semibold text-accent'>{format(new Date,"EEEE, MMMM mm, yyyy")}</p>

        </div>
    );
 };
 
 export default Header;