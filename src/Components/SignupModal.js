// import React from 'react'
// import { Formik, Form, Field, ErrorMessage } from 'formik';

// import PersonIcon from '@mui/icons-material/Person';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';

// import { useState, useEffect } from 'react';
// import PhoneInput from 'react-phone-number-input'
// import 'react-phone-number-input/style.css'
// import LoginModal from './LoginModal';

// function SignupModal() {
//   const [showSignupModal, setShowSignupModal] = React.useState(false);
//   const [value, setValue] = useState()


//   return (
//     <>
//      <button
//     className="active:bg-yellow-100 font-bold  px-6 py-3  hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
//     type="button"
//     onClick={() => setShowSignupModal(true)}
 
//   >
//                         <p class="mt-6 text-sm text-center ">Don&#x27;t have an account yet? <a href="#" class="text-blue-500 focus:outline-none focus:underline hover:underline">Sign up</a>.</p>
//   </button>
//   {showSignupModal ? (
//     <>
//     <div
//     className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
//   >
//   <div class="flex relative items-center w-full bg-white p-5 max-w-md px-6 mx-auto lg:w-2/6 rounded-lg shadow-md">
//                 <div class="flex-1">
//                     <div class="grid justify-items-center text-center">
//                         <img src="fitnessoicon.svg" alt="fitnesso icon" class="w-10 font-bold text-center text-gray-900 "/>
                        
//                         <p class="mt-3 text-gray-500 ">Sign up to create your account</p>
//                     </div>

//                     <div class="mt-8">
//                         <form>
//                      {/*   <div>
//                                 <label for="phone" class="block mb-2 text-sm text-slate-600">Phone Number</label>
//                                 <div> 
                                    
//                                 </div>
//                                 <input type="phone" name="phone" id="phone" required placeholder="+4571462345" class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md  focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
//                             </div> */}
    

// <Formik className="flex flex-col text-black"
//        initialValues={{ email: '', password: '' }}
//        validate={values => {
//          const errors = {};
//          if (!values.email) {
//            errors.email = 'Required';
//          } else if (
//            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
//          ) {
//            errors.email = 'Invalid email address';
//          }
//          return errors;
//        }}
//        onSubmit={(values, { setSubmitting }) => {
//          setTimeout(() => {
//            alert(JSON.stringify(values, null, 2));
//            setSubmitting(false);
//          }, 400);
//        }}
//      >
//        {({ isSubmitting }) => (
//          <Form >
//                                        <PhoneInput 
//         international
//   defaultCountry="DK"
//   value={value}

//   onChange={setValue} className="block w-full px-4 py-2 mt-2 text-gray-700 
//   placeholder-gray-400 bg-white border border-gray-200 rounded-md   
//    focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 
//    focus:outline-none focus:ring focus:ring-opacity-40" />
//    <label  name="email">Email</label>
//            <Field type="email" required name="email"className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border 
//                                 border-gray-200 rounded-md    focus:border-blue-400 dark:focus:border-blue-400 
//                                 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
//            <ErrorMessage name="email" component="div" className='text-rosse-800'/>
//            <label  name="password">Password</label>

//            <Field type="password" required placeholder="Password " name="password" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border 
//                                 border-gray-200 rounded-md    focus:border-blue-400 dark:focus:border-blue-400 
//                                 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
//            <ErrorMessage name="password" component="div" />
//            <button type="submit" disabled={isSubmitting} className="w-full px-4 py-2 text-slate-600 tracking-wide  transition-colors duration-200 
//                                     transform bg-yellow-100 rounded-md hover:bg-yellow-200 focus:outline-none focus:bg-blue-400 
//                                     focus:ring focus:ring-blue-300 focus:ring-opacity-50">
//              Submit
//            </button>
//          </Form>
//        )}
//      </Formik>
//                             {/* <div class="mt-6">
//                                 <div class="flex justify-between mb-2">
//                                     <label for="password" class="text-sm required text-slate-600">Password</label>
//                                     <a href="#" class="text-sm  focus:text-blue-500 hover:text-blue-500 hover:underline">Forgot password?</a>
//                                 </div>

//                                 <input type="password" name="password" id="password" placeholder="Your Password" class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border 
//                                 border-gray-200 rounded-md    focus:border-blue-400 dark:focus:border-blue-400 
//                                 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
//                             </div> */}

//                             <div class="mt-6">
                               
//                             </div>
//                             <button class="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600"   aria-label="close modal" role="button" onClick={() => setShowSignupModal(false)}>
//                             <svg  xmlns="http://www.w3.org/2000/svg"  class="icon icon-tabler icon-tabler-x" width="20" height="20" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
//                                 <path stroke="none" d="M0 0h24v24H0z" />
//                                 <line x1="18" y1="6" x2="6" y2="18" />
//                                 <line x1="6" y1="6" x2="18" y2="18" />
//                             </svg>
//                         </button>

//                         </form>
//                         <button
//     className="active:bg-yellow-100 font-bold  px-6 py-3  hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
//     type="button"
    
//   >
//                         <p class="mt-6 text-sm text-center ">Already have an account? <a href="#" class="text-blue-500 focus:outline-none focus:underline hover:underline">Login</a>.</p>
//   </button>
//                     </div>
//                 </div>
//             </div>
//   </div>
//   <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
// </>
// ) : null}

// </>
// );
  
// }

// export default SignupModal
// //  onClick={() => setShowModal(false)}