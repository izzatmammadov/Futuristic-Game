import React from 'react'
import priceCard from "../../assets/images/priceCard.svg"
import gameplay from "../../assets/images/gameplay.svg"

export const Prices = () => {
  return (
    <section className='mb-28 px-16 flex justify-center gap-6 '>
      <div className='relative '>
        <img className=' drop-shadow-lg ' src={priceCard} />
        <div className='py-5 absolute top-0 left-4 flex flex-col justify-center items-center w-11/12 mt-8 gap-24'>

          <div className='flex flex-col w-full justify-center items-center'>
          <img src={gameplay} />
          <h4 className=' text-2xl text-mainBlue mt-4'>Basic Plan</h4>
          <p className=' font-inconsolata text-xl'>Survivor's Starter Pack</p>
          </div>

          <div className='w-full flex flex-col justify-center items-center gap-8'>
          <p className='text-5xl font-bold'>$29.99/mo</p>
          <button className=' shadow-md font-inconsolata font-bold w-full text-3xl py-2 bg-mainBlue text-white hover:transform hover:scale-95 transition-all duration-300'>Buy Game</button>
          </div>

          <div className='flex flex-col  gap-4'>
            <p className=' font-inconsolata text-lg'>&#10003; Access to the full game with all core features.</p>
            <p className=' font-inconsolata text-lg'>&#10003; Single-player mode available.</p>
            <p className=' font-inconsolata text-lg'>&#10003; Limited selection of character customization options.</p>
            <p className=' font-inconsolata text-lg'>&#10003; Exclusive in-game items: "Rookie's Rations" supply pack.</p>
            <p className=' font-inconsolata text-lg'>&#10003; Feature text goes here</p>

          </div>

        </div>
      </div>

      <div className='relative'>
        <img className=' drop-shadow-lg' src={priceCard} />
        <div className='py-5 absolute top-0 left-4 flex flex-col justify-center items-center w-11/12 mt-8 gap-24'>

          <div className='flex flex-col w-full justify-center items-center'>
          <img src={gameplay} />
          <h4 className=' text-2xl text-mainBlue mt-4'>Pro Plan</h4>
          <p className=' font-inconsolata text-xl'>Apocalypse Conqueror Bundle</p>
          </div>

          <div className='w-full flex flex-col justify-center items-center gap-8'>
          <p className='text-5xl font-bold'>$40.99/mo</p>
          <button className=' shadow-md font-inconsolata font-bold w-full text-3xl py-2 bg-mainBlue text-white hover:transform hover:scale-95 transition-all duration-300'>Buy Game</button>
          </div>

          <div className='flex flex-col  gap-4'>
            <p className=' font-inconsolata text-lg'>&#10003; All features of the Basic Plan included.</p>
            <p className=' font-inconsolata text-lg'>&#10003; Unlock access to multiplayer mode, team up with friends.</p>
            <p className=' font-inconsolata text-lg'>&#10003; Extensive range of character customization choices.</p>
            <p className=' font-inconsolata text-lg'>&#10003; Exclusive in-game items: "Veteran's Arsenal" weapon pack.</p>
            <p className=' font-inconsolata text-lg'>&#10003; Priority access to upcoming expansions and updates.</p>

          </div>

        </div>
      </div>
      
    </section>
  )
}
