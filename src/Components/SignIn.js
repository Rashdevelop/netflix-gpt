import React from 'react'
import Background from './Background'
import { Link } from 'react-router-dom'
const SignIn = () => {
  return (
    <div>
      <div className=" absolute z-10 px-8 py-2 ">
      <img className="w-56" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="Logo" />
    </div>
      <Background></Background>
      <div className='absolute my-68 mx-72 border-red-600'>
      <h1 className='text-2xl text-white font-bold mb-4'>Sign In</h1>
      <form className='flex flex-col'>
        <input className='p-4 px-12 mb-4' type="email" required placeholder='Email or Phone Number'/>
        <input className='p-4 px-12'type='password' required placeholder="password"></input>
        <Link to="/signin"><button className='m-2 px-4 py-2 font-bold text-white rounded-lg bg-red-600 px-12'>Sign In</button></Link>
      </form>
      </div>
    </div>
  )
}

export default SignIn
