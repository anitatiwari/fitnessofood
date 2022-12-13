import React from 'react'
import Nav from './Nav'
import CartIcon from './CartIcon';
import Basket from './Basket';

import  { useState, useEffect } from 'react';

import { Outlet, Link } from "react-router-dom";
import FavoriteIcon from '@mui/icons-material/Favorite';
import LoginModal from './LoginModal.js';
import BasketContainer from './BasketContainer';

function Header(props) {


  return (
    <div className='flex  md:p-3 justify-around shadow-md'>
        <Nav />
<div className='flex '>
  

    <img src="logo.svg" alt="logo" className='h-12 w-56  md:h-16'/>
    </div>
    <div className='flex '>
      
  
    <div className=' flex justify-around  md:m-5 '>
  
        
<LoginModal />



  
    </div>
       <div className='md:m-5 '>
        <Link to="/#newsletter">
       Newsletter 
         </Link>
       </div>
       </div>

    </div>
  )
}

export default Header;