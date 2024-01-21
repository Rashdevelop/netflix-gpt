import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
  <div className='absolute w-full z-10 flex justify-between '>
    
      <img className="w-48" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="Logo" />
   
    
    <Link to="/signin"><button className=' py-2 px-4 mr-12 font-bold text-white rounded-md bg-red-700 '>Sign In</button></Link>
    
    </div>
  )
}

export default Header
