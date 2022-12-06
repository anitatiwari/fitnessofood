import React from 'react'
import Header from './Header';
import Nav from './Nav';
import { Outlet, Link } from "react-router-dom";
import Catagories from './Catagories';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Footer from './Footer';
function Main() {
  return (
    <>
  
  <Header />
   <main>
    <div className='flex flex-col md:flex-row justify-around md:p-12 shadow'>
      
    <div className='flex flex-col gap-12 md:m-5 md:p-12 p-9'>
      <p className='md:text-[50px] text-4xl w-64 font-light text-center'>
      For your daily
dose of health
<FavoriteIcon sx={{color:'#DE8198'}} />
      </p>
      <button type="submit" className='w-24 md:w-40 h-8 md:h-14  z-10 bg-yellow-100 tracking-wide text-md hover:bg-[#364259] hover:text-white rounded-md
   font-semibold'>Order</button>
   {/* absolute top-[250px] md:top-[500px] left-[145px] */}
    </div>
    <div className=' h-[80vh]  scale-105 z-0'>
      <img src="juice.png" alt="juiceimage" className='  '/>
    </div>
    {/* scale-100 absolute top-[100px]    md:right-[200px] */}
    </div>
    <div className='flex md:p-12 justify-center md:gap-12 flex-col md:flex-row bg-yellow-100'>
      <img src="https://www.anugraph.com/files/fitnesso-project/shop.png" alt="shop" className='md:w-80 md:h-72 object-cover w-40 content-conter border h-fit rounded'/>
      <div className='flex flex-col gap-5  '>
<div>
  <p className='text-4xl font-light m-5'>Openning Hours</p>
        <p className='font-semibold text-lg'>Weekdays</p>
        <div className='flex md:justify-between gap-2'>
          
       
        <p>Monday - Friday  </p>
        <p>10:00 - 21:00</p>
        </div>
        </div>
        <div>

        <p className='font-semibold text-lg' >Weekends</p>
        <div className='flex md:justify-between gap-2'>

        <p>Saturday/Sunday   </p>
        <p>  10:00 - 19:00 </p>
        </div>
        </div>
      </div>
      
    </div>
    <div className='m-12'>
    <Catagories />

    </div>

    <article className='grid md:grid-cols-2 justify-items-center  md:gap-12'>
      <section className=''>
        <p className='text-xl font-semibold text-center'>VISIT US</p>
        <p className='text-xl font-normal m-5'>Address</p>
        <p className='text-xl font-light md:w-40 w-30 m-5'>Nørrebrogade 227, 2200 
København, Denmark</p>
<button type="" className='bg-yellow-100 p-2 m-4 rounded shadow'>Contact us</button>
      </section>
      <section>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2248.3832938041155!2d12.538242851344062!3d55.69970900345777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4652524c6746f357%3A0x57a56311b00bcdb3!2sFitnesso!5e0!3m2!1sen!2sdk!4v1670325213448!5m2!1sen!2sdk" className='md:w-96 md:h-72'  ></iframe>
      </section>
    </article>
    <Footer />
   </main>
   
    </>
  )
}

export default Main