import React from 'react'
import hero from "../../assets/images/mainHero.svg"
import hexagon from "../../assets/images/hexagon.svg"
import gameplay from "../../assets/images/gameplay.svg"
import swords from "../../assets/images/swords.svg"
import king from "../../assets/images/king.svg"
import card from "../../assets/images/card.svg"
import styles from "./header.module.css"

export const Header = () => {

  return (
    <section className='flex justify-center items-center px-16 mt-5'>

      <section className='flex flex-col w-1/2'>
        <div className='flex flex-col gap-6'>
          <h2 className='text-5xl leading-normal'>Unleash your survival instincts in a futuristic apocalypse.</h2>
          <p className='text-2xl font-inconsolata w-4/6'>Engage in heart-pounding combat across ruined cityscapes and war-torn landscapes.</p>
          <div className='flex justify-start gap-5 mt-8'>
            <button className="text-xl -skew-x-12 bg-mainBlue text-white font-inconsolata border-2 border-mainBlue px-8 font-bold py-1 shadow-md hover:scale-105 transition-all duration-300">Buy Game</button>
            <button className="text-xl -skew-x-12 text-mainBlue border-mainBlue border-2 font-inconsolata px-8 font-bold py-1 shadow-md hover:scale-105 transition-all duration-300">Learn More</button>
          </div>
        </div>
        <div className='flex gap-6 pr-6 mt-10'>
          
          <div className='relative hover:-translate-y-3 transition-all duration-300'>
          <img className=' drop-shadow-md'  src={card} />
          <div className=' py-5 absolute top-2 flex flex-col justify-center items-center gap-4'>
          <img src={gameplay}/>
            <p className=' font-inconsolata text-xl text-center'>Gameplay and Features</p>
            <button className='text-5xl text-mainBlue hover:text-black transition-all duration-300'>&#10157;</button>
          </div>
          </div>

          <div className='relative hover:-translate-y-3 transition-all duration-300'>
          <img className=' drop-shadow-md'  src={card} />
          <div className='group py-5 absolute top-2 flex flex-col justify-center items-center gap-4'>
          <img src={swords}/>
            <p className=' font-inconsolata text-xl text-center'>Items and Collectibles</p>
            <button className='text-5xl text-mainBlue hover:text-black transition-all duration-300'>&#10157;</button>
          </div>
          </div>

          <div className='relative hover:-translate-y-3 transition-all duration-300'>
          <img className=' drop-shadow-md'  src={card} />
          <div className='group py-5 absolute top-2 flex flex-col justify-center items-center gap-4'>
          <img src={king}/>
            <p className=' font-inconsolata text-xl text-center'>Heroes and Game Locations</p>
            <button className='text-5xl text-mainBlue hover:text-black transition-all duration-300'>&#10157;</button>
          </div>
          </div>

        </div>
        
      </section>

      <div className=' relative'>
        <img className=' w-4/5' src={hero}/>
        <img className={styles.animated_content} src={hexagon} />
      </div>

    </section>
  )
}
