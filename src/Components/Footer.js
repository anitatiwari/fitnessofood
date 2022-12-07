import React from 'react'

function Footer() {
  return (
    <div className=' h-56  shadow-xl'>
        <div className='h-56  md:ml-12 grid md:grid-cols-3 gap-4 content-center'>
            
       
        <div className=''>
            <img src="logo.svg" alt=""  className='w-44 h-fit'/>
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