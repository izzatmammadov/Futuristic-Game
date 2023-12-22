import React from 'react'

export const TitleLast = () => {
  return (
    <section className=' mb-28 flex flex-col justify-center items-center gap-8'>
        <h3 className='text-mainBlue leading-normal text-4xl w-full text-center '>Invest in Your Survival: Pricing Tiers</h3>
        <p className=' font-inconsolata text-xl w-2/5 text-center'>Explore Our Pricing Options Tailored to Your Gameplay Goals and Preferences.</p>
       <div className=" shadow-lg  mx-auto">
        <button className='bg-mainBlue border-2 border-mainBlue py-3 px-6 text-white hover:scale-95 transition-all duration-300 '>Monthly Billing</button>
        <button className=' border-2 border-mainBlue py-3 px-6 hover:scale-95 transition-all duration-300'>Annual Billing</button>
       </div>
    </section>
  )
}
