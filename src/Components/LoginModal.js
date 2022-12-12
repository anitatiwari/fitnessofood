import React from 'react'

import PersonIcon from '@mui/icons-material/Person';

import SignupModal from './SignupModal';
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

import { useState, useEffect } from 'react';

function LoginModal() {
  const [showModal, setShowModal] = React.useState(false);
  const [value, setValue] = useState()

  return (
    <>
     <button aria-label="login Modal"
    className="active:bg-yellow-100 font-bold  md:px-6 md:py-3  hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
    type="button"
    onClick={() => setShowModal(true)}
  >
    <PersonIcon  color='blue' style={{color:""}}/>
 
  </button>
  {showModal ? (
    <>
    <div
    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
  >
  <div class="flex relative items-center w-full bg-white p-5 max-w-md px-6 mx-auto lg:w-2/6 rounded-lg shadow-md">
                <div class="flex-1">
                    <div class="grid justify-items-center text-center">
                        <img src="fitnessoicon.svg" alt="fitnesso icon" class="w-10 font-bold text-center text-gray-900 "/>
                        
                        <p class="mt-3 text-gray-500 ">Sign in to access your account</p>
                    </div>

                    <div class="mt-8">
                        <form>
                            {/* <div>
                                <label for="phone" class="block mb-2 text-sm text-slate-600">Phone Number</label>
                                <div>
                                    
                                </div>
                                <input type="phone" name="phone" id="phone" required placeholder="+4571462345" class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md  focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>
      */}
      <PhoneInput 
        international
  defaultCountry="DK"
  required
  value={value}
  onChange={setValue} className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md    focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />


                            <div class="mt-6">
                                <div class="flex justify-between mb-2">
                                    <label for="password" class="text-sm required text-slate-600">Password</label>
                                    <a href="#" class="text-sm  focus:text-blue-500 hover:text-blue-500 hover:underline">Forgot password?</a>
                                </div>

                                <input type="password" name="password" id="password" placeholder="Your Password" class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white
                                 border border-gray-200 rounded-md   
                                  focus:border-blue-400 dark:focus:border-blue-400 
                                  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>

                            <div class="mt-6">
                                <button
                                    class="w-full px-4 py-2 text-slate-600 tracking-wide  transition-colors duration-200 transform bg-yellow-100 rounded-md hover:bg-yellow-200 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                    Sign in
                                </button>
                            </div>
                            <button class="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600"   aria-label="close modal" role="button" onClick={() => setShowModal(false)}>
                            <svg  xmlns="http://www.w3.org/2000/svg"  class="icon icon-tabler icon-tabler-x" width="20" height="20" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>

                        </form>

<SignupModal   />         
       </div>
                </div>
            </div>
  </div>
  <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
</>
) : null}

</>
);
  
}

export default LoginModal
//  onClick={() => setShowModal(false)}