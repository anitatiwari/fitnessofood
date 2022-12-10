import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { useState, useEffect } from 'react';

function Contactmodal() {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
     <button
    className="focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
    type="button"
    onClick={() => setShowModal(true)}
  >
Contact  </button>
  {showModal ? (
    <>
    <div
    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
  >
  <div class="flex  relative justify-items-center w-4/6 bg-white p-5  px-6  lg:w-2/6 rounded-lg shadow-md">
  <div class="">
               <div className='md:m-5'>
                <img src="https://www.anugraph.com/files/fitnesso-project/food.jpeg" alt="food image" className=' object-cover' />
                <div className=' bg-yellow-100'>
                <div className='md:m-5'>
                   
                    <p className=' m-2 font-semibold text-rose-800 '>VISIT US AT :</p>
        <p className='text-xl   w-30 m-5'>Nørrebrogade 227, 2200 
København, Denmark</p>
                </div>
                <div className='md:m-5'>
                    <p className=' m-2 font-semibold '>Call Us at:</p>
                    <a href="tel:5554280940" className='text-xl   w-30 m-5'>+4535858575</a>
                </div>
                <div className='md:m-5'>
                    <p className=' m-2 font-semibold '>Email Us at:</p>
                    <a href="mailto:info@fitnessofood.dk" className='text-xl   w-30 m-5'>info@fitnessofood.dk</a>
                </div>
                </div>
               </div>
               <button class="cursor-pointer absolute top-0 right-0 md:mt-4 md:mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600"   aria-label="close modal" role="button" onClick={() => setShowModal(false)}>
                            <svg  xmlns="http://www.w3.org/2000/svg"  class="icon icon-tabler icon-tabler-x" width="20" height="20" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>
      </div>
            </div>
  </div>
  <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
</>
) : null}

</>
);
  
}

export default Contactmodal
//  onClick={() => setShowModal(false)}