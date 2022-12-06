import Product from "./Product";
import Nav from "./Nav";

export default function ProductList({products, setBasket}){
    return (
      
    //     <div className=" ">
    // <img src="/YScnOtK.jpg" alt="somegraphics"  className="max-w-screen-md"/> 
    <>
    <div>
      
   
      {/* <ul className=" flex   h-96 text-md md:text-xl font-bold m-5">
  <li >
    <a href="#">Sandwich</a>
  </li>
  <li>
  <a href="#">Salat</a>

    </li>
  <li>
  <a href="#">Juice</a>

    </li>
    <li>
    <a href="#">Power Shake</a>

    </li>
    <li>
    <a href="#">Power Shots</a>

    </li>
      </ul> */}
        <section className=" grid    md:grid-cols-3 m-12">

       {products.map(p=>(
<Product key={p.id}setBasket={setBasket} product={p} />
       ))}
    </section>
    </div>
</>
    )
}