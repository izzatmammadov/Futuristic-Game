import React from 'react'
import logo from "../../assets/images/logo.svg"

export const Footer = () => {
  return (
    <section className='bg-mainBlue flex justify-around py-28 px-16'>
        <div className='flex flex-col items-start gap-6 w-1/4'>

            <div className='flex items-center gap-3'>
            <img src={logo}/>
            <h6 className='text-2xl text-white'>SHADOWFALL</h6>
            </div>

            <div className='text-white font-inconsolata'>
                <p className='text-lg'>Experience the game that will change your the way you play.</p>
            </div>
        </div>

        <div className='flex flex-col gap-6 justify-center text-white font-inconsolata w-1/3'>
            <p className='text-lg text- '>Subscribe for latest updates. Let's do it!</p>
            <form className='flex items-center justify-center gap-4 w-full '>
                <input type="email" placeholder='Enter your email Address' className=' w-4/5 py-2 ps-2 text-black'  />
                <button className='bg-white py-2 px-7 text-black font-bold hover:bg-gray-200 hover:transform hover:scale-95 transition-all duration-300'>Subscribe</button>
            </form>
        </div>

        <ul className='flex flex-col justify-end items-end text-lg text-white font-inconsolata w-1/5 gap-3'>
    <li className='hover:transform hover:scale-95 hover:text-gray-200 transition-all duration-300 cursor-pointer'>Privacy Policy</li>
    <li className='hover:transform hover:scale-95 hover:text-gray-200 transition-all duration-300 cursor-pointer'>Terms of Use</li>
    <li className='hover:transform hover:scale-95 hover:text-gray-200 transition-all duration-300 cursor-pointer'>Sales and Refunds</li>
    <li className='hover:transform hover:scale-95 hover:text-gray-200 transition-all duration-300 cursor-pointer'>Legal</li>
        </ul>
    </section>
  )
}
