import React from 'react'
import { useState, useEffect } from 'react';

import { Outlet, Link } from "react-router-dom";


import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Header from '../Header';
import Footer from '../Footer';
import Catagories from '../Catagories';
function Success() {
  const [showSuccessModal, setShowSuccessModal] = React.useState(false);

  return (
    <div>

      <Header />
           
    <div className='grid m-7 h-full md:m-[10em] m-[5em] justify-items-center gap-12' >
      <div className='text-2xl md:text-3xl'>
        Your order has been received
      </div>
      <CheckCircleIcon  

color="success" 
sx={{ fontSize: 60 }}
/>
      <div>
        <Link to="/Menu?Catagory=Sandwich">
        <button type="button" className='bg-orange-600 font-semibold tracking-wider
         leading-12 m-1  md:p-2 rounded-md text-white'>CONTINUE ORDERING</button>
        </Link>
      </div>
      </div>
    
      <div className=''>
        
     
     <Footer className=""  />
     </div>
   </div>
);
  
}

export default Success