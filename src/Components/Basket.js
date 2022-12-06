import React from 'react'



export default function basket(props) {

    // 0 + 1 + 2 + 3 + 4
    const initialValue = 0;
    const sumWithInitial = props.basket.reduce(
      (previousValue, currentValue) => previousValue + currentValue.price,
      initialValue
    );
    function remove(id) {
        props.setBasket(old=>old.filter(item=>item.id!==id))
    }
    console.log(sumWithInitial);
    return (
        <>
       
      <div className="  rounded-md shadow-xl bg-white flex flex-col justify-between mt-10">
      <div className="flex justify-between ">
        
    
      <h3 className=" font-serif   p-1 m-3   text-xl  ">Your Cart</h3>
      <p className="text-xl text-right p-2 m-3">Total: {sumWithInitial} Dkk </p>
      </div>
        <ul >
          {props.basket.map((item) => {
            return (
              <li className="w-96 p-3 text-md  flex justify-around ">
                <div className='text-xl'>
               
               {item.Name }</div>
<div>
  
  {item.Image.src}
</div>
                <div className='grid grid-cols-1 gap-2'>
                 {item.Price}Dkk
                
                <button className="shadow-xl p-1 rounded-md " onClick={()=>remove(item.id)}>Remove</button>
              
                </div>
                </li>
            );
          })}
        </ul>
      </div>
      </>
    );
  }
  
