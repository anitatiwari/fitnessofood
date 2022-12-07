import React from 'react'

function Newsletter() {
  return (
    <div className='md:p-12 flex gap-12  md:justify-center  flex-col  '>
        <div className='md:flex md:justify-center'>
            
      
        <h2 className='text-5xl '>Join Us</h2>
        </div>
       <div className='md:flex md:justify-center'>
        
    
    <p className='text-xl max-w-2xl  tracking-wider'>Stay up to date on the latest and greatest, get special newsletter member <span className='font-bold text-rose-800'>discounts</span> and lots of inspiration.</p>
    </div>  
    <form className=' md:m-8 md:flex md:justify-center'>
    <div className='flex md:flex '>
        <div>
            
      
                                <input type="email" name="email" id="email" required placeholder="Your Email Address" class="block w-96 h-16 px-4 py-2  text-gray-700 placeholder-gray-400 bg-white border border-gray-200 focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>
                            <button type="button" className='bg-black text-white p-5 h-fit '>
                                Subscribe</button>
                            </div>
    </form>
        
    
    </div>
  )
}

export default Newsletter