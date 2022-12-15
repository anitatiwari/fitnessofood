import React from 'react'
import { Outlet, Link } from "react-router-dom";



function Catagories() {
  return (
    <>
    <div className='md:text-3xl text-xl m-5  md:m-[1em]  text-center traking-wide '>
       <p className='tracking-wider  text-slate-700  md:m-[3em] '>Our Veriety</p> </div>
    <div className='flex justify-center md:flex-row m-5 justify-evenly  gap-5	'>
        
    
    <div>
    <Link to="/Menu?Catagory=Juice" type="submit" className='  hover:scale-105 
   '>
    <img src="https://www.anugraph.com/files/fitnesso-project/orange-juice.png" alt="orange-juice" className='md:w-20 w-12 md:h-fit h-12 object-cover'/>
<p className='m-1 md:m-4 rounded text-center bg-yellow-100 px-2 py-1  hover:bg-yellow-200 '>Drinks</p>
</Link>
    </div>
    <div>
    <Link to="/Menu?Catagory=Sandwich" type="submit" className=' hover:scale-105 
   '>
    <img src="https://www.anugraph.com/files/fitnesso-project/food.png" alt="salat bowl" className='md:w-20  w-12 md:h-fit h-12 object-cover' />

    <p className='m-1 md:m-4 rounded text-center bg-yellow-100 px-3 py-1 hover:bg-yellow-200 '>Food</p>
    </Link>
    </div>
    <div>
    <Link to="/Menu?Catagory=Bodylab" type="submit" className='  hover:scale-105 
   '>
    <img src="https://www.anugraph.com/files/fitnesso-project/whey-protein.png" alt="salat bowl" className='md:w-20  w-12 md:h-fit h-12 object-cover'/>
    <p className='m-1 md:m-4 rounded text-center bg-yellow-100 md:px-3 py-1  hover:bg-yellow-200 '>Bodylab</p>
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
