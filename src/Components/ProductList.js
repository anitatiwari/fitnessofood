import Product from "./Product";
import React, { useState, useEffect } from 'react';


import Nav from "./Nav";

export default function ProductList({products, setBasket}){



    return (
     
    <>
    <div className="flex justify-between gap-12">
      
   

<div>

        <section className=" grid ">

       {products.map(p=>(
<Product key={p.id}setBasket={setBasket} product={p} />
       ))}
    </section>
      
</div>
    </div>
</>
    )
}
