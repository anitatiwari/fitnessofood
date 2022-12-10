import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react"; 
import Menu from './Components/Menu';
import ProductList from './Components/ProductList';
import Main from './Components/Main';
import BasketContainer from './Components/BasketContainer';
import Basket from './Components/Basket';
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FavouriteContainer from './Components/FavouriteContainer';
import Calories from './Components/Calories';
import CheckoutForm from './Components/ProgressForm/CheckoutForm';
import Delivery from './Components/ProgressForm/Delivery';
function App() {
  
  return (
   <>
   <BrowserRouter>

   
<Routes>
  <Route exact path="/" element={<Main />} />
  <Route exact path="/Product" element={<ProductList />} />
  <Route exact path="/Menu" element={<Menu />} />
  <Route exact path="/Calories" element={<Calories />} />
  <Route exact path="/Delivery" element={<Delivery />} />


  <Route exact path="/Favorite" element={<FavouriteContainer />} />






  {/* <Route exact path="/Nav" element={<Nav />}/> */}
</Routes>
</BrowserRouter>
<div>
  
    </div>



</>

  );
}

export default App;
