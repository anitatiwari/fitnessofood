import React from 'react'
import { Outlet, Link } from "react-router-dom";



function Catagories() {
  return (
    <>
    <div className='md:text-3xl md:m-12  text-green-800 text-center traking-wide '>
       <p className='tracking-wider underline '>Our Veriety</p> </div>
    <div className='flex justify-center md:flex-row m-5 justify-evenly  gap-5	'>
        
    
    <div>
    <Link to="/Menu?Catagory=Juice" type="submit" className='  hover:scale-105 hover:underline
   '>
    <img src="orange-juice.png" alt="orange-juice" className='md:w-20 w-12 h-fit'/>
<p className='text-center p-2'>Drinks</p>
</Link>
    </div>
    <div>
    <Link to="/Menu?Catagory=Sandwich" type="submit" className=' hover:scale-105 hover:underline
   '>
    <img src="food.png" alt="salat bowl" className='md:w-20  w-12 h-fit' />

    <p className='text-center p-2 '>Food</p>
    </Link>
    </div>
    <div>
    <Link to="/Menu?Catagory=Juice" type="submit" className='  hover:scale-105 hover:underline
   '>
    <img src="whey-protein.png" alt="salat bowl" className='md:w-20  w-12 h-fit'/>
    <p className='text-center p-2'>Bodylab</p>
    </Link>
        </div>
        </div>
    {/* <a href="https://www.flaticon.com/free-icons/juice" title="juice icons">Juice icons created by Freepik - Flaticon</a>
    <a href="https://www.flaticon.com/free-icons/food" title="food icons">Food icons created by justicon - Flaticon</a>
    <a href="https://www.flaticon.com/free-icons/protein" title="protein icons">Protein icons created by Konkapp - Flaticon</a>     */}
    </>
  )
}

export default Catagories
