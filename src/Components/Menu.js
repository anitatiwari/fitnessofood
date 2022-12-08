import React from 'react'
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
    <div className='shadow-md ' >
    
  
    <ul className=" md:p-12 p-3 flex md:flex-col flex-wrap md:gap-12 gap-5 text-sm md:text-xl font-bold m-5 ">
<li >
<a href="/Menu?Catagory=Sandwich">Sandwich</a> 
</li>
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
    </ul>
    </div>
      
         <div className='product  flex md:flex-row  md:justify-between  flex-col'>
         {isLoading ? (
         
            
         
            <div className="grid justify-items-center loader-container w-[800px] h-fit content-center" >
          <ClipLoader color={'#274E13'} size={100}   />
    
        </div>
      ) : (

     <ProductList className="  " products={products} setBasket={setBasket}/>
     )}
     <BasketContainer className="bg-yellow-200 "  setBasket={setBasket} basket={basket}/>

    
     </div>
    </div>
    </main>
    </>
  )
}

export default Menu