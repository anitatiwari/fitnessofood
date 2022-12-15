import React from 'react'
import Header from './Header';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Nav from './Nav';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ProductCounter from './ProductCounter';
import CartIcon from './CartIcon';
export default function Product (props){
    const [value, setValue] = React.useState(0);

    function buy(){
        props.setBasket((oldState)=>[...oldState,props.product])
    }
  
    
    
        return (
            <>
      <div >
   

        <article className=" rounded-xl w-60 md:w-11/12 md:shadow-2xl shadow-xl m-4"> 
       <section className=" grid md:grid-cols-2 m-2 p-2 ">
        <div className=''>
          
       
             <img src={props.product.Image} alt="productimage" className='object-cover md:h-52 w-full '/>
             </div>
             <div>
              
             <div className=" flex justify-between md:gap-5 p-2">

            <h2 className="md:text-lg md:text-2xl font-semibold m-1 text-slate-800">
             {props.product.Name}
            </h2>
            <p className="md:text-xl  text-rose-800 font-bold  p-1 rounded-lg">
               {
                    props.product.Price
                }  Dkk
            </p>
            </div>
            <p className="md:font-medium leading-6 tracking-wider  rounded-y-xl  md:m-4 m-2">{props.product.Discription}</p>
           
           <div className="flex justify-between md:justify-evenly">
            
           <ProductCounter />
            <span className=" md:m-4 ">
            <button onClick={buy} className="rounded-md p-2 font-sans transition ease-in-out 
            delay-150 bg-yellow-100   hover:bg-yellow-200  duration-300 t">
           <div className='flex '>
           {/* <ShoppingCartIcon   sx={{ fontSize: 20, margin:"2px" }} /> */}
           <p className='text-sm'> Order Now
</p>
           </div>
   
            </button>
         
            </span>
            </div> 
            </div>
            <div className='flex justify-between'>
                
           
            {/* <BottomNavigation
  showLabels
  value={value}
  onChange={(value, newValue) => {
    setValue(newValue);
  }}
>
  <BottomNavigationAction label="Favorites" icon={<FavoriteIcon onClick={fav}/>} />
</BottomNavigation> */}
      
            </div>
            </section>
        </article>
        </div>
        </>
     
        )
        }