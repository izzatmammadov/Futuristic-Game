import React from 'react'
import navborder from "../../assets/images/navborder.svg"
import logo from "../../assets/images/logo.svg"
import buttonBlue from "../../assets/images/buttonBlue.svg"


export const Navbar = () => {
  return (
    <>
    <nav className='flex justify-between px-16 py-2 items-center '>
      <div className='flex items-center gap-3 w-1/4'>
        <img src={logo} />
        <h1>SHADOWFALL</h1>
      </div>

      <ul className='flex items-center gap-7 font-inconsolata w-2/4 justify-center text-lg '>
        <li className=' cursor-pointer hover:transform hover:scale-125 transition-all duration-300'>Home</li>
        <li className=' cursor-pointer hover:transform hover:scale-125 transition-all duration-300'>About</li>
        <li className=' cursor-pointer hover:transform hover:scale-125 transition-all duration-300'>Contact Us</li>
      </ul>

      <div className='flex justify-end  w-1/4'>
        <img className=' cursor-pointer hover:scale-95 hover:opacity-90 transition-all duration-300 drop-shadow-md' src={buttonBlue}/>
      </div>
    </nav>
    <img className=' w-screen' src={navborder}/>
    </>
  )
}
