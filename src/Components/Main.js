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
import { Helmet } from 'react-helmet';

AOS.init();

function Main() {
  return (
  
    <>
  <Helmet>
    <meta name="description" content="Visit our cafe for delicious,
     healthy options made with fresh ingredients.
      Try our refreshing juices, flavorful salads, satisfying sandwiches, and rich, aromatic coffee. 
      Come taste the difference at Fitnesso" />
     <meta name="keywords" content="Food, Cafe Near Me, 
     Coffee in Copenhagen, Salat , Fresh Juice , Healthy Food, Whey Protein Powder" />
    </Helmet>
  <Header />


   <main class="scroll-smooth">
    <div className='grid  md:grid-cols-2 md:justify-evenly justify-items-center md:p-8 shadow'>
      
    <div className='flex flex-col justify-center gap-12 md:m-5  p-5' data-aos="fade-right"
      data-aos-duration="1000"
    
>
      <p className=' md:pl-5 md:text-[48px] justify-self-center text-3xl md:w-[386px] w-60 font-light font-serif text-slate-700   tracking-wider leading-snug'>
      For your daily
dose of health

      </p>
      <div className='flex justify-center'>
      <FavoriteIcon sx={{color:'#DE8198'}} />
      </div>
      <div className='flex justify-center '>
     
      <Link to="/Menu?Catagory=Sandwich" type="submit" className='text-center w-32 md:w-40   z-0 bg-yellow-100 tracking-wide text-md hover:bg-yellow-200  rounded-md
   font-semibold p-2'>Explore Menu</Link>
    </div>
   {/* absolute top-[250px] md:top-[500px] left-[145px] */}
    </div>
    <div className=' md:h-[80vh]  justify-self-center mt-12  z-0'   data-aos="fade-left"
        data-aos-duration="1000"
  
   
  >    
    <img src="juice.png" alt="juiceimage" className='  scale-110 h-fit object-cover '/>

      {/* <img src="juice.png" alt="juiceimage" className='  '/> */}
    </div>
    {/* scale-100 absolute top-[100px]    md:right-[200px] */}
    </div>
    
    <div className='md:m-12' >
    <Catagories />

    </div>
    <div>
      <div className='m-5 md:m-[5em]'>
        
     
      <h2 className='text-center text-xl md:text-3xl text-slate-700  '>Gallary</h2>
      </div>
    <div className='grid grid-cols-2 md:flex  gap-3 md:ml-[5em] md:mr-[5em] md:mb-[5em] md:mt-[3em]'>

      <div className='justify-self-end '>
        <img src="https://www.anugraph.com/files/fitnesso-project/coffee.png" alt="coffee image" className='md:w-96 w-40 h-22 md:h-fit object-cover' />
      </div>
      <div >
      <img src="https://www.anugraph.com/files/fitnesso-project/driks.png" alt="juice" className='md:w-96 w-40  h-22 md:h-fit object-cover'/>
      </div>
      <div className='justify-self-end  '>
      <img src="https://www.anugraph.com/files/fitnesso-project/salat.jpeg" alt="salat bowl" className='md:w-96 w-40  h-22 md:h-fit object-cover'/>
      </div>
      <div>
      <img src="https://www.anugraph.com/files/fitnesso-project/Peanutbutter-500g-1000x1000-01.png" alt="peanutbutter" className='md:w-96 w-40 h-22 md:h-fit object-cover' />
      </div>
    </div>
    
    </div>
    <div className='flex md:p-12 p-8 justify-center md:gap-12  gap-8 flex-col md:flex-row bg-[#FDFDEA]'  
  
  >
    <img src="shopimg2.jpg" alt="shop" className='md:w-2/6 w-4/6 '/>
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
  
 <div className='md:m-[5em] md:h-96 '>
 <Newsletter />
 </div>
       
 
    <article className='flex md:p-12 p-12 justify-center md:gap-12  gap-8 flex-col md:flex-row bg-[#FDFDEA]'>
      <section className='md:p-12 md:justify-self-end  m-2 grid gap-5 '>
        <p className='md:text-xl font-semibold  '>VISIT US</p>
        <p className='md:text-xl   w-60  '>Nørrebrogade 227, 2200 
København, Denmark</p>

 <div className=' flex gap-4 '>
                    <p className='  font-semibold md:text-xl '>Call us at:</p>
                    <a href="tel:5554280940" className='md:text-xl   w-30  hover:underline text-slate-600'>+4535858575</a>
                </div>
      </section>
     
      <section className='md:p-4 '>
      <iframe title="Google map" aria-label="Google map image" aria-describedby="Google map of Fitnesso" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2248.3832938041155!2d12.538242851344062!3d55.69970900345777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4652524c6746f357%3A0x57a56311b00bcdb3!2sFitnesso!5e0!3m2!1sen!2sdk!4v1670325213448!5m2!1sen!2sdk" 
      className='md:w-full md:h-full w-60 '  ></iframe>
      </section>
    </article>
    <Footer />
   </main>
   
    </>
  )
}

export default Main