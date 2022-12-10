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
    <div className='flex  md:p-6 justify-between shadow-md'>
        <Nav />

    <img src="logo.svg" alt="logo" className='h-12 w-54 m-2 md:h-16'/>

    <div className=' flex md:gap-6  justify-around  md:m-5 '>
  
        
<LoginModal />

<CartIcon />

  
    </div>


    </div>
  )
}

export default Header;