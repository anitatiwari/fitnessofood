import React from 'react'

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Nav from './Nav';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
export default function Product (props){
    const [value, setValue] = React.useState(0);

    function buy(){
        props.setBasket((oldState)=>[...oldState,props.product])
    }
    function fav(){
      props.setFavorite((oldState)=>[...oldState,props.product])

    }
    
    
        return (
            <>
      
        <article className=" rounded-xl    shadow-2xl m-4"> 
       <section className=" grid grid-cols-1 m-2">
        <div className=''>
          
       
             <img src={props.product.Image} alt="productimage" className='object-cover h-48 w-full '/>
             </div>
             <div>
              
             <div className=" flex justify-between md:gap-5 p-2">

            <h2 className="text-lg md:text-2xl font-semibold m-1 text-slate-800">
             {props.product.Name}
            </h2>
            <p className="md:text-xl text-lg text-rose-800 font-bold  p-1 rounded-lg">
               {
                    props.product.Price
                } Dkk
            </p>
            </div>
            <p className="md:font-medium leading-6 tracking-wider   rounded-y-xl md:w-46 m-4">{props.product.Discription}</p>
           
           
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
            <span className="  md:m-2">
            <button onClick={buy} className="rounded-md p-2 font-sans transition ease-in-out 
            delay-150 bg-yellow-200 hover:-translate-y-1 hover:scale-110 hover:bg-black hover:text-white duration-300 text-black ">
           <div className='flex '>
           <ShoppingCartIcon   sx={{ fontSize: 20, margin:"2px" }} />
           <p className='text-sm'>    Add to Order
</p>
           </div>
   
            </button>
         
            </span>
            </div>
            </section>
        </article>
        </>
     
        )
        }