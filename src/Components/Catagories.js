import React from 'react'

function Catagories() {
  return (
    <>
    <div className='md:text-2xl md:m-12 '>Shop</div>
    <div className='flex justify-center md:gap-12 gap-5	'>
        
    
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
