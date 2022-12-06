import React from 'react'
import BasketContainer from './BasketContainer';
import Header from './Header';
import Nav from './Nav';
import Basket from './Basket';
import ProductList from './ProductList';
import { useEffect, useState } from "react";

function Menu() {

  const [products,setProducts]=useState([]);
  const [basket,setBasket]=useState([]);
  const urlParams = new URLSearchParams(window.location.search);

  useEffect(()=>{
      async function getProducts(){
        const url = "https://fitnessofood-f1aa.restdb.io/rest/fitnesso";
const options = {
  headers: {
    "x-apikey": "63849d06c890f30a8fd1f5e7",
  },
};
        const res =await fetch (url,options);
        const data =await res.json();
        setProducts(data);
      }
    getProducts();
    },[])
        
       
   

   

  return (

    <>

    <Header />
   
   <main className="relative">
    <div>
      
         <div className='product  md:grid-cols-2  '>
     <ProductList className="  " products={products} setBasket={setBasket}/>
     <div className="h-28 sticky bottom-0 overflow-y-scroll " >
     <BasketContainer className="bg-yellow-200"  setBasket={setBasket} basket={basket}/>

     </div>
     </div>
    </div>
    </main>
    </>
  )
}

export default Menu