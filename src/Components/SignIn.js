import React, { useState } from 'react'
import Background from './Background'
import { Link } from 'react-router-dom'
const SignIn = () => {
  const[isSignIn,setIsSignIn]=useState(true);
  const toggleSignIn=()=>{
    setIsSignIn(!isSignIn)
  };
  return (
    <div>
      <div className=" absolute z-10 px-8 py-2 ">
      <img className="w-56" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="Logo" />
    </div>
      <Background></Background>
      <form className='rounded-lg bg-opacity-90 w-96 h-3/4 absolute text-white mx-auto right-0 left-0 my-32 bg-black p-12'>
      <h1 className='text-3xl font-bold py-4'>{isSignIn?"Sign In":"Sign Up"}</h1>
       {!isSignIn?<input className='m-2 p-2 w-full bg-gray-700 outline-none' placeholder='Type Your Name' type='text'></input>:null}
        <input className='m-2 p-2 w-full bg-gray-700 outline-none' type="email" required placeholder='Email or Phone Number'/>
        <input className=' m-2 p-2 w-full bg-gray-700 outline-none'type='password' required placeholder="password"></input>
        <Link to="/signin"><button className="rounded-lg m-2 p-2 w-full font-bold text-white bg-red-600 ">{!isSignIn?"Sign Up":"Sign In"}</button></Link>
        <h1 className=' text-white my-6 cursor-pointer' onClick={()=>{
           toggleSignIn();
        }}>{isSignIn?"New To Netflix? Sign Up Now": "Already Ragistered? Sign In Now"}</h1>
      </form>
      
    </div>
  )
}

export default SignIn
