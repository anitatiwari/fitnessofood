import React from 'react'

function Newsletter() {
  return (
    <div id="newsletter" className='md:p-12  p-6 flex gap-12  md:justify-center  flex-col  '>
        <div className='md:flex flex justify-center '>
            
      
        <h2 className='md:text-5xl text-2xl '>Join Us</h2>
        </div>
       <div className='md:flex md:justify-center'>
        
    
    <p className='md:text-xl md:max-w-2xl  tracking-wider'>Stay up to date on the latest and greatest, get special newsletter member <span className='font-bold text-rose-800'>discounts</span> and lots of inspiration.</p>
    </div>  
    <form className=' md:m-8 md:flex md:justify-center'>
    <div className='flex md:flex flex-col md:flex-row'>
        <div>
            
      
                                <input type="email" name="email" id="email" required placeholder="Your Email Address" class="block md:w-96 w-full md:h-16  h-14 px-4 py-2  text-gray-700 placeholder-gray-400 bg-white border border-gray-400 focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>
                                <div className='flex justify-center m-2 md:m-0 '>
                                    
                                
                            <button type="button" className='bg-[#792653] text-white md:p-5 p-3 h-fit  w-32'>
                                Subscribe</button>
                                </div>
                            </div>
    </form>
        
    
    </div>
  )
}

export default Newsletter