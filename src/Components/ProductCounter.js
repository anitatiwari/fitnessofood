import React,{useState} from 'react'

function ProductCounter() {
    
    //Using useState hook to create a state variable for the counter
    const [counter,setCounter]=useState(1);
    //Creating a Function to increment the counter
    const incrementCounter =()=>{
const newCounter = counter + 1;
//Updating the counter state variable with the new value
setCounter(newCounter);
    }
    //Creating a Function to decrease the counter
    const decrementCounter =()=>{
const newCounter = counter - 1 ;
//Updating the counter state variable with the new value
setCounter(newCounter);

    }

  return (
    <div className='flex w-16 gap-3 md:m-4   '>
  <div className=' '>
    

  <button onClick={decrementCounter}  className="border border-yellow-400 rounded bg-yellow-100 w-10 text-xl " >
      -
    </button>
   
    </div>
    <div>
        
  
    <p> {counter}</p>
    </div>
    <div>
        
   <button onClick={incrementCounter} className="border border-yellow-400 rounded  bg-yellow-100 w-10 text-xl ">
      +
    </button>
  
    </div>
  </div>
  )
}

export default ProductCounter;