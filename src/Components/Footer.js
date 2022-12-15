import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
function Footer() {
  return (
    <div className=' h-56  md:shadow-xl md:m-0 m-8'>
        <div className='h-56  md:ml-12 grid md:grid-cols-4 gap-7 content-center'>
            
       
        <div className=''>
            <img src="logo.svg" alt=""  className='md:w-44 w-32 h-fit'/>
        </div>
        <div>
            <p>Address</p>
            <p>Nørrebrogade 227, 2200 København, Denmark

</p>
        </div>
        <div>
            <a href="https://www.findsmiley.dk/570265" className='underline text-md '>See the Danish Veterinary and Food Administration's smiley reports
</a>
        </div>
        <div className='flex gap-10 m-5'>
          <a href="https://www.facebook.com/Fitnessokea/">
        <FacebookIcon fontSize='large' sx={{ color: "#00008b" }} /></a>
        <a href="https://www.instagram.com/fitnesso_kea/">
        <InstagramIcon fontSize='large' sx={{ color: "#cb4154" }} /></a>
        </div>
        <div>
        </div>
        </div>
    </div>
  )
}

export default Footer