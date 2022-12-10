import React from 'react'
import basket from './Basket';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function CartIcon(props) {
  return (
    <div>
        <button type='button'    className="active:bg-yellow-100 font-bold  px-6 py-3  hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
>
<ShoppingBasketIcon className=' md:w-26'   style={{color:""}}/>
<span>{props.itemCount}</span>
</button>
    </div>
  )
}

export default CartIcon