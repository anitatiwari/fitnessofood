import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';

import BasketContainer from './BasketContainer';
import Header from './Header';
import Nav from './Nav';
import Basket from './Basket';
import ProductList from './ProductList';
import { useEffect, useState } from "react";
import ClipLoader from 'react-spinners/ClipLoader';
import { Outlet, Link } from "react-router-dom";

import { css } from "@emotion/react";




function Menu() {

  const [isLoading, setIsLoading] = useState(false);

  const [products,setProducts]=useState([]);
  const [basket,setBasket]=useState([]);
  const urlParams = new URLSearchParams(window.location.search);

  useEffect(()=>{
      async function getProducts(){
        const Catagory = urlParams.get("Catagory");
        setIsLoading(true);

        const url = `https://fitnessofood-f1aa.restdb.io/rest/fitnesso?q={"Catagory": "${Catagory}"}`;
const options = {
  headers: {
    "x-apikey": "63849d06c890f30a8fd1f5e7",
  },
};
        const res =await fetch (url,options);
        const data =await res.json();
        setProducts(data);
        setIsLoading(false);

      }

    getProducts();
    },[])
        
       
   

   

  return (

    <>

    <Header />
   
   <main className="relative">
    <div className='md:flex md:flex-col-3 '>
    <div className='shadow-md bg-[#FDFDEA]' >
    
  
    <ul className=" md:p-8 p-3 flex md:flex-col flex-wrap md:gap-12 gap-5 text-sm md:text-xl md:w-30 font-bold m-5 ">
<li className="hover:underline active:text-rose-800 visited:text-rose-800" >
 
<a href="?Catagory=Sandwich" type="submit" className=' 
 '>Sandwich</a></li>
<li>
<a href="/Menu?Catagory=Salat">Salat</a> 

  </li>
<li>
<a href="/Menu?Catagory=Juice">Juice</a> 

  </li>
  <li>
  <a href="/Menu?Catagory=Power Shake">Power Shake</a> 

  </li>
  <li>
  <a href="/Menu?Catagory=Power Shot">Power Shots</a> 

  </li>
  <li>
  <a href="/Menu?Catagory=Chia Bowl">Chia Bowl</a> 

  </li>
    </ul>
    </div>
      
         <div className='product  flex md:flex-row    flex-col'>
         {isLoading ? (
         
            
         
            <div className="grid justify-items-center loader-container w-[800px] h-fit content-center" >
          {/* <ClipLoader color={'#274E13'} size={100}   /> */}
    <CircularProgress   color="success" width="10px"/>
        </div>
      ) : (

     <ProductList className="  " products={products} setBasket={setBasket}/>
     )}
     <BasketContainer className="bg-yellow-200  "  setBasket={setBasket} basket={basket}/>

    
     </div>
    </div>
    </main>
    </>
  )
}

export default Menu