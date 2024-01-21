import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
import Background from './Background'
const Slash = () => {
  return (
    <div>
      <Header></Header>
      <Background></Background>
      <div className='absolute  text-white my-72 mx-32 text-center'>
        <h1 className='font-bold text-5xl mb-4'>Unlimited movies, TV shows and more</h1>
        <h4 className='text-2xl mb-4 '>Watch anywhere. Cancel anytime.</h4>
        <h3 className='text-2xl '>Ready to watch? Enter your email to create or restart your membership.</h3>
        
        <input type="email" required placeholder='Email Address' className='text-black px-32 py-4 bg-grey rounded-lg border-2  outline-none border-red-600 text-left backdrop-invert-0 '/>
        <Link to="/ragister"> <button className='m-2 px-12 py-4  text-white  font-bold rounded-lg bg-red-600 text-xl'>Get Started </button></Link>
      </div>
      
    </div>
  )
}

export default Slash
