import React from 'react'
import Success from './Success';
import { Outlet, Link } from "react-router-dom";


function CheckoutForm() {
 
 

      return (
        <div className='shadow-md mb-4 tracking-wider'>
           <div className='flex justify-center'>
          <img src="card-blue.svg" alt="card icon" className='md:w-4/6 w-2/6 ' />
           </div>
           <form className='W-full '>
            <div class="flex  flex-col gap-2 md:m-5  ">
                <label for="owner" className='w-32  text-gray-500'>Owner</label>
                <input type="text" class=" border border-5 bg-gray-100  p-2" id="owner" />
            </div>
            <div class=" flex flex-col gap-2 md:m-5" id="card-number-field ">
                <label for="cardNumber" className='w-30 text-gray-500'>Card Number</label>
                <input type="text" class="border bg-gray-100 p-2" id="cardNumber" />
            </div>
            <div className='flex'>
              
           
            <div class="flex md:flex-col  gap-2 md:m-5">
                <label for=" flex   " className='text-gray-500 '>CVV</label>
                <input type="text" class="border bg-gray-100 w-32 p-2" id="cvv" />
            </div>
          
            <div class="flex justify-between flex  gap-2 md:m-5 " id="expiration-date">
                <label className=' text-gray-500'>Expiration Date</label>
                <select className='w-20 h-12 border'>
                    <option value="01">January</option>
                    <option value="02">February </option>
                    <option value="03">March</option>
                    <option value="04">April</option>
                    <option value="05">May</option>
                    <option value="06">June</option>
                    <option value="07">July</option>
                    <option value="08">August</option>
                    <option value="09">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                </select>
                <select className='w-20 h-12 border'>
                    <option value="16"> 2016</option>
                    <option value="17"> 2017</option>
                    <option value="18"> 2018</option>
                    <option value="19"> 2019</option>
                    <option value="20"> 2020</option>
                    <option value="21"> 2021</option>
                </select>
            </div>
            </div>
         
            <div class="flex justify-center" id="pay-now">
                <Link to="/Success">
                <button   type="submit" class="bg-blue-700 hover:bg-blue-500 m-2 text-white p-2 rounded w-32" id="confirm-purchase">Pay</button>
                </Link>
            </div>
        </form>

        </div>
      )
    }
    
  
  


export default CheckoutForm;