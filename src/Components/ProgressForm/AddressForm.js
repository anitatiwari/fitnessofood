import React from 'react'
import Header from '../Header'
function AddressForm() {
  return (
    <div>
     

      <form  id="form2" class= " max-w-xl md:max-w-xl  border shadow  rounded ">
      <div>
      <h2 className='text-xl tracking-wider m-4 '>Delivery Adddress</h2>

      </div>
                        <div class="flex  flex-col md:gap-4   ">
                            <div class=" flex justify-around md:justify-between md:p-3  ">
                                <div class="px-3 mb-6 md:mb-0">
                                    <label class="block uppercase  text-gray-600 tracking-wider tracking-wide  text-sm md:text-md font-bold mb-2"
                                        for="grid-first-name">
                                       Address
                                        <input
                                            class="appearance-none block md:w-80 text-black text-md bg-gray-200  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            id="grid-first-name" type="text" placeholder="Street Address" required />
                                    </label>
    
    
                                </div>
                                <div class=" md:w-full md:px-3 md:mb-6 md:mb-0">
                                        <label class="block uppercase   text-xs font-bold mb-2 text-gray-600 tracking-wider"
                                            for="grid-city">
                                            House No.
                                        </label>
                                        <input
                                            class=" md:w-full appearance-none block bg-gray-200  border text-black border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            id="grid-city" type="text" placeholder="6120" required />
                                    </div>
                              
                            </div>
                        
                               
                               
                                <div class=" px-3 mb-6 flex flex-col tracking-wider">
                                  <div className='flex justify-around md:justify-between m-2 md:p-3 '>
                                    
                                 
                                    <div class=" w-full mb-6 md:mb-0">
                                        <label class="block uppercase  text-xs font-bold mb-2 text-gray-600 tracking-wider"
                                            for="grid-city">
                                        City
                                        </label>
                                        <input
                                            class=" md:w-full appearance-none block bg-gray-200  border text-black border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            id="grid-city" type="text" placeholder="Albuquerque" required />
                                    </div>
    
                                    <div class=" md:w-full px-3 mb-6 md:mb-0">
                                        <label class=" block uppercase tracking-wide text-xs font-bold mb-2 text-gray-600 tracking-wider" for="grid-zip">
                                            Zip
                                        </label>
                                        <input
                                            class=" md:w-full appearance-none block bg-gray-200  border text-black border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            id="grid-zip" type="text" placeholder="9210" required />
                                    </div>
                                    </div>
                                    <div className='text-left shadow '>
                                        
                                   
                                    <h2 className='md:text-xl m-4'>Contact Information</h2>
                               
                                    <div className='flex  justify-around  md:justify-between px-2 '>
                                     
                                   
                                    <div class="md:w-full md:w-full px-3 ">
                                        <label class="block uppercase tracking-wide  text-xs font-bold mb-2 text-gray-600 tracking-wider"> Email
                                        </label>
                                        <input
                                            class=" md:w-full appearance-none block bg-gray-200  border text-black border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            id="grid-password" type="email" placeholder="abc@gmail.com" required />
    
                                    </div>
                                    <div class="  md:w-full px-3">
                                        <label class="block uppercase tracking-wide  text-xs font-bold mb-2 text-gray-600 tracking-wider">Phone Number
                                        </label>
                                        <input
                                            class=" md:w-full appearance-none block  bg-gray-200  border border-gray-200 rounded py-3 px-4 mb-3 text-black leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            id="grid-password" type="tel" placeholder="" required />
    
                                    </div>
                                    </div>
                                    </div>
                                </div>
                         <div className='flex justify-center m-5'>
                            <button type="submit " className='bg-green-600  px-5 py-2  tracking-wider rounded-md hover:bg-green-700 text-white '>Confirm</button>
                         </div>
                        </div>
    
                   
             
                </form>
        </div>
  )
}

export default AddressForm