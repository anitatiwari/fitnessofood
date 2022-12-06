import React from 'react'



export default function Favorite(props) {

    // 0 + 1 + 2 + 3 + 4
    const initialValue = 0;
    
    function remove(id) {
        props.setFavorite(old=>old.filter(item=>item.id!==id))
    }
   
    return (
        <>
       
      <div className="  rounded-md shadow-xl flex flex-col justify-between mt-10">
      <h3 className=" font-serif   p-1 m-3   text-xl  ">Your Favourite</h3>
        <ul >
          {props.Favorite.map((item) => {
            return (
              <li className="w-96 p-3 text-md  flex justify-around ">
                <div className='text-xl'>
               {item.Name }</div>

                <div className='grid grid-cols-1 gap-2'>
                 {item.Price}Dkk
                
                <button className="shadow-xl p-1 rounded-md " onClick={()=>remove(item.id)}>Remove</button>
              
                </div>
                </li>
            );
          })}
        </ul>
        {/* <p className="text-xl text-right p-2">Total: {sumWithInitial} Dkk </p> */}
      </div>
      </>
    );
  }
  
