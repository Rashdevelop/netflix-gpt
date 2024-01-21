import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
  <div className='absolute z-10 flex justify-center'>
    <div className=" px-8 py-2 ">
      <img className="w-44" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="Logo" />
    </div>
    <div>
    <Link to="/signin"><button className='m-2 px-4 py-2 font-bold text-white rounded-lg bg-red-600 '>Sign In</button></Link>
    </div>
    </div>
  )
}

export default Header
