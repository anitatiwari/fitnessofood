import React from 'react'

function Catagories() {
  return (
    <>
    <div className='md:text-3xl md:m-12  text-green-800 text-center traking-wide '>
       <p className='tracking-wider underline '>Our Veriety</p> </div>
    <div className='flex justify-evenly gap-5	'>
        
    
    <div>
    <img src="orange-juice.png" alt="orange-juice" className='md:w-20 w-12 h-fit'/>
<p className='text-center p-2'>Drinks</p>
    </div>
    <div>
    <img src="food.png" alt="salat bowl" className='md:w-20  w-12 h-fit' />

    <p className='text-center p-2'>Food</p>

    </div>
    <div>
    <img src="whey-protein.png" alt="salat bowl" className='md:w-20  w-12 h-fit'/>
    <p className='text-center p-2'>Bodylab</p>

        </div>
        </div>
    {/* <a href="https://www.flaticon.com/free-icons/juice" title="juice icons">Juice icons created by Freepik - Flaticon</a>
    <a href="https://www.flaticon.com/free-icons/food" title="food icons">Food icons created by justicon - Flaticon</a>
    <a href="https://www.flaticon.com/free-icons/protein" title="protein icons">Protein icons created by Konkapp - Flaticon</a>     */}
    </>
  )
}

export default Catagories
