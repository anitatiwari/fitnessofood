import React from 'react'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import PersonIcon from '@mui/icons-material/Person';
import Nav from './Nav'
import { Outlet, Link } from "react-router-dom";
import FavoriteIcon from '@mui/icons-material/Favorite';

function header() {
  return (
    <div className='flex  justify-around shadow-md'>
        <Nav />

    <img src="logo.svg" alt="logo" className='h-12 w-54 m-2 md:h-16'/>

    <div className=' flex gap-6  justify-around  m-5 '>
    <PersonIcon className=''  color='blue' style={{color:""}}/>
        

    <ShoppingBasketIcon className=' w-26'   style={{color:""}}/>
  
    {/* <Link to="/Favorite"> 
  <FavoriteIcon 
    className=' w-26 '   style={{color:""}}/>
  </Link>  */}
    </div>


    </div>
  )
}

export default header