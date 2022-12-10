import React, { Component } from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import HomeIcon from '@mui/icons-material/Home';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';

import FormLabel from '@mui/material/FormLabel';
import BasketContainer from '../BasketContainer';
import CheckoutForm from './CheckoutForm';
import Header from '../Header';
import basket from '../Basket';
import { useEffect, useState } from "react";
import Checkbox from '@mui/material/Checkbox';
import AddressForm from './AddressForm';



export function Delivery  (props) {

  const [basket,setBasket]=useState([]);
  
  return (
   <div>
    <Header />
      <div className='grid md:m-4'>
      <FormControl >
      <RadioGroup className=''
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="Home Delivery"
        name="radio-buttons-group"
      >
        <div className='flex m-4 ' >
          
       <div className='m'>
        
  <HomeIcon className='m-2'/>
        <FormControlLabel value="Home Delivery" control={<Radio />} label="Home Delivery" />
        </div>
        <div>
          <DirectionsWalkIcon  className='m-2' />
          <FormControlLabel value="Pick Up" control={<Radio />} label="Pick up" />

        </div>
        </div>
      </RadioGroup>
    </FormControl>
    
      
        </div>
        <div className='flex flex-col md:flex-row justify-around'>
          
      
        <AddressForm />
        <CheckoutForm />
        </div>
        </div>
  )
}


export default Delivery;
