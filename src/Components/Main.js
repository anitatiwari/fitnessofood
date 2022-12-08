import React from 'react'
import Header from './Header';
import CallIcon from '@mui/icons-material/Call';
import Nav from './Nav';
import { Outlet, Link } from "react-router-dom";
import Catagories from './Catagories';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Footer from './Footer';
import Contactmodal from './Contactmodal';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Newsletter from './Newsletter';
AOS.init();

function Main() {
  return (
    <>
  
  <Header />
   <main>
    <div className='flex flex-col md:flex-row md:justify-around md:p-12 shadow'>
      
    <div className='flex flex-col justify-center gap-12 md:m-5 md:p-12 p-9' data-aos="fade-right"
      data-aos-duration="1000"
    
>
      <p className='md:text-[50px] text-3xl w-64 font-light font-serif text-slate-600  text-center tracking-wider leading-snug'>
      For your daily
dose of health
<FavoriteIcon sx={{color:'#DE8198'}} />
      </p>
      <div className='flex justify-center'>
     
      <Link to="/Menu?Catagory=Sandwich" type="submit" className='text-center w-32 md:w-40   z-10 bg-yellow-100 tracking-wide text-md hover:bg-[#364259] hover:text-white rounded-md
   font-semibold p-2'>Explore Menu</Link>
    </div>
   {/* absolute top-[250px] md:top-[500px] left-[145px] */}
    </div>
    <div className=' h-[80vh]  scale-105 z-0'   data-aos="fade-left"
        data-aos-duration="1000"
  
   
  >
      <img src="juice.png" alt="juiceimage" className='  '/>
    </div>
    {/* scale-100 absolute top-[100px]    md:right-[200px] */}
    </div>
    
    <div className='md:m-12' data-aos="fade-up">
    <Catagories />

    </div>
    <div className='grid grid-cols-2 gap-3 md:m-12'>

      <div className='justify-self-end '>
        <img src="https://www.anugraph.com/files/fitnesso-project/coffee.png" alt="coffee image" className='md:w-96 w-40 h-fit object-cover' />
      </div>
      <div >
      <img src="https://www.anugraph.com/files/fitnesso-project/driks.png" alt="juice" className='md:w-96 w-40 h-fit object-cover'/>
      </div>
      <div className='justify-self-end '>
      <img src="https://www.anugraph.com/files/fitnesso-project/salat.jpeg" alt="salat bowl" className='md:w-96 w-40 h-fit object-cover'/>
      </div>
      <div>
      <img src="https://www.anugraph.com/files/fitnesso-project/Peanutbutter-500g-1000x1000-01.png" alt="peanutbutter" className='md:w-96 w-40  h-fit object-cover' />
      </div>
    </div>
    
    
    <div className='flex md:p-12 p-12 justify-center md:gap-12  gap-8 flex-col md:flex-row bg-[#FDFDEA]'  
  
  >
      <div className='md:text-xl flex flex-col justify-center  gap-5  '>
<div className=''>
  <p className='md:text-4xl text-xl  mt-5 mb-5'>Openning Hours</p>
        <p className='md:font-semibold text-lg'>Weekdays</p>
        <div className='flex text-center md:justify-between gap-2'>
          
       
        <p>Monday - Friday  </p>
        <p>10:00 - 21:00</p>
        </div>
        </div>
        <div>

        <p className='md:font-semibold text-lg' >Weekends</p>
        <div className='flex text-center md:justify-between gap-2'>

        <p>Saturday/Sunday   </p>
        <p>  10:00 - 19:00 </p>
        </div>
        </div>
      </div>
      
    </div>
  
 <div className='md:h-96 shadow-md'>
 <Newsletter />
 </div>
       
 
    <article className='m-5 md:ml-12 grid md:grid-cols-2 gap-4 justify-items-center'>
      <section className='md:p-12 md:justify-self-end  m-2 grid gap-3 '>
        <p className='md:text-xl font-semibold  '>VISIT US</p>
        <p className='md:text-xl   w-60 md:m-5 '>Nørrebrogade 227, 2200 
København, Denmark</p>

 <div className='md:m-5 flex gap-4 '>
                    <p className='  font-semibold md:text-xl '>Call us at:</p>
                    <a href="tel:5554280940" className='md:text-xl   w-30  hover:underline text-slate-600'>+4535858575</a>
                </div>
      </section>
     
      <section className='md:p-12  '>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2248.3832938041155!2d12.538242851344062!3d55.69970900345777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4652524c6746f357%3A0x57a56311b00bcdb3!2sFitnesso!5e0!3m2!1sen!2sdk!4v1670325213448!5m2!1sen!2sdk" 
      className='md:w-full md:h-full w-60 '  ></iframe>
      </section>
    </article>
    <Footer />
   </main>
   
    </>
  )
}

export default Main