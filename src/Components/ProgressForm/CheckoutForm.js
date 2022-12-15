import React from 'react'
import Success from './Success';
import { Outlet, Link } from "react-router-dom";


class CheckoutForm extends React.Component {

    state = {
        cardNumber: '',
        expirationDate: '',
        cvv: '',
      };
      handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value,
        });
      };
   handleSubmit = (event) => {
        event.preventDefault();
    
        // Perform basic validation on the form fields
        if (!this.state.cardNumber || !this.state.expirationDate || !this.state.cvv) {
          alert('All fields are required');
          return;
    }
    <Link to="/success">
 <button className="pay-now-button" onClick={this.handleSubmit}>Pay Now</button>
</Link>
    this.setState({
        redirectToSuccess: true
      });
}
    render() {
        if (this.state.redirectToSuccess) {
            return <Success />;
          }
      return (
        <div className='max-w-xl md:max-w-3xl md:shadow-md md:mb-4 m-12 md:m-0 tracking-wider'>
           <div className='flex justify-center '>
          <img src="card-blue.svg" alt="card icon" className='md:w-4/6 w-2/6 ' />
           </div>
           <form className='W-full m-2 '>
            <div class="flex  flex-col md:gap-2 gap-5 md:m-5  ">
                <label for="owner" className='w-32  text-gray-500'>Owner</label>
                <input required type="text" class=" border border-5 bg-gray-100  p-2" id="owner" />
            </div>
            <div class=" flex flex-col  md:gap-2 gap-5 md:m-5" id="card-number-field ">
                <label for="cardNumber" className='w-30 text-gray-500'>Card Number</label>
                <input  required   
           type="number" class="border bg-gray-100 p-2" id="cardNumber" />
            </div>
            <div className='flex gap-5 mt-5'>
              
   
            
         
            <div class="flex md:flex-col   md:gap-2 gap-5  md:m-5">
                <label for=" flex   " className='text-gray-500 '>CVV</label>
                <input  required   
             type="number" class="border bg-gray-100 w-32 h-12 p-2" id="cvv" />
            </div>
          
            <div class="flex justify-between flex-wrap md:flex-row md:gap-2 gap-5 ml-4 md:m-5" id="expiration-date">
                <label className=' text-gray-500'>Expiration Date</label>
                <select className='w-20 h-12 border'>
                    <option value="01">January</option>
                    <option value="02">February </option>
                    <option value="03">March</option>
                    <option value="04">April</option>
                    <option value="05">May</option>
                    <option value="06">June</option>
                    <option value="07">July</option>
                    <option value="08">August</option>
                    <option value="09">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                </select>
                <select className='w-20 h-12 border'>
                    <option value="16"> 2016</option>
                    <option value="17"> 2017</option>
                    <option value="18"> 2018</option>
                    <option value="19"> 2019</option>
                    <option value="20"> 2020</option>
                    <option value="21"> 2021</option>
                </select>
            </div>
          
            </div>
         
            <div class="flex justify-center" id="pay-now">
             
                <Link to="/Success" >
                <input type="submit" class="bg-blue-700 hover:bg-blue-500  text-white p-2 rounded w-32" id="confirm-purchase" value="pay"/>
                </Link>
            </div>
        </form>

        </div>
      )
    }
}


export default CheckoutForm;