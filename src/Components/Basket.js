import React from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import BasketContainer from './BasketContainer';
import { Outlet, Link } from "react-router-dom";


import CartIcon from './CartIcon';
import Header from './Header';

export default function basket(props) {

    // 0 + 1 + 2 + 3 + 4
    const initialValue = 0;
    const sumWithInitial = props.basket.reduce(
      (previousValue, currentValue) => previousValue + parseFloat(currentValue.Price),
      initialValue
    );
    
    function remove(id) {
        // Find the index of the item with the specified id

      const index = props.basket.findIndex(item => item.id === id);
        // If the item was found, remove it from the basket state

      if (index !== -1) {
          // If the item was found, remove it from the basket state
        const newBasket = [...props.basket];

    // Use the .splice() method to remove the item at the specified index
    newBasket.splice(index, 1);

    // Use the setBasket() method to update the basket state
    props.setBasket(newBasket);

        // props.setBasket(old=>old.filter(item=>item.id!==id))
    }
  }

    console.log(sumWithInitial);
    return (
        <>
       

      <div className=" w-96 rounded-md shadow-xl bg-white flex flex-col justify-between mt-10">
      <div className="flex justify-between ">
        
    
      <h3 className=" font-serif   p-1 m-3   text-xl  ">Your Cart</h3>
      </div>
        <ul >
          {props.basket.map((item) => {
            return (
              <li className="w-96 p-3 text-md  flex justify-around ">
     {/* <BasketContainer itemCount={props.basket.length}/> */}

                <div className='text-xl'>
               
               {item.Name }</div>
<div className=''>
  
  {item.Image.src}
</div>
                <div className='flex justify-evenly gap-2'>
                 {item.Price}Dkk
                
                <button className="shadow-xl p-1 rounded-md   text-sm " onClick={()=>remove(item.id)}><DeleteForeverIcon /></button>
              
                </div>
                
                </li>
                
            );
          })}
        </ul>
        
          
       
       
        <p className="text-xl bg-slate-900 text-white text-center p-2 m-3">Total: <span className='font-bold'>{sumWithInitial} Dkk </span> </p>
       
       <div className='flex justify-center m-3'>
        
       <Link to="/Delivery" className='p-2 bg-pink-100 hover:bg-pink-200 tracking-wider   w-3/6 rounded'>  Proceed To Payment</Link> 
     
       </div> 
       </div>
      </>
    );
  }
  
