import React from 'react'

function Footer() {
  return (
    <div className=' h-56  md:shadow-xl md:m-0 m-8'>
        <div className='h-56  md:ml-12 grid md:grid-cols-3 gap-4 content-center'>
            
       
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
        <div>
        </div>
        </div>
    </div>
  )
}

export default Footer