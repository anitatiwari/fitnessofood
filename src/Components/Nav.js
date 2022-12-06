import React from 'react'
import { Outlet, Link } from "react-router-dom";
import { useState } from "react"; // import state

function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  return (
<>

  {/* 
 */}
  <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2 m-5"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click

          >
            <span className="block h-0.5 w-8 animate-pulse bg-black"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-black"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-black"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}> 
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu

            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
              </div>
            <ul className="NAVIGATION-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px] z-20">
              <li className="border-b border-gray-400 m-8 uppercase bg-yellow-100">
              <Link to="/"> Home</Link>                </li>
              <li className="border-b border-gray-400 m-8 uppercase bg-yellow-100">
              <Link to="/Menu"> Menu</Link>         
              </li>
              <li className="border-b border-gray-400 m-8 uppercase bg-yellow-100">
              <a href="/contact">Contact</a>              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden m-5 space-x-8 lg:flex">
          <li>
          <Link to="/" className='bg-yellow-100'> Home</Link>          </li>
          <li>
          <Link to="/Menu" className='bg-yellow-100'> Menu</Link>           </li>
          <li>
            <a href="/contact" className='bg-yellow-100'>Contact</a>
          </li>
        </ul>
      </nav>
     


  

    {/* <ul className='flex float-right text-md font-bold'>
        <li className=" m-5 hover:text-amber-900 text-center p-2 rounded">
       

        </li>
        <li className=" m-5  hover:text-amber-900 text-center p-2 rounded"
                 data-aos="fade-left"
                 data-aos-offset="200"
                 data-aos-delay="70"
                 data-aos-duration="1000" >
                  
                </li>
                <li>
                    
                </li>
    </ul> */}


</>

  )
}

export default Nav