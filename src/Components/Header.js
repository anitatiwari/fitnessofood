import React from 'react'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Nav from './Nav'
import  { useState, useEffect } from 'react';

import { Outlet, Link } from "react-router-dom";
import FavoriteIcon from '@mui/icons-material/Favorite';
import Modal from './LoginModal.js';

function header() {

  return (
    <div className='flex  md:p-6 justify-between shadow-md'>
        <Nav />

    <img src="logo.svg" alt="logo" className='h-12 w-54 m-2 md:h-16'/>

    <div className=' flex gap-6  justify-around  m-5 '>
  
        
<Modal />
<button type='button'    className="active:bg-yellow-100 font-bold  px-6 py-3  hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
>
<ShoppingBasketIcon className=' w-26'   style={{color:""}}/>
</button>
  
  
  
    </div>


    </div>
  )
}

export default header