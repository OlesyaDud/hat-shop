import React from 'react'
import { offer } from '../../assets/images'
import Button from '../../components/button/Button'
import { arrowRight } from '../../assets/icons'

const SpecialOffer = () => {
  return (
   <section className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container'>

    <div className='flex-1'>
      <img src={offer} alt="offer" width={773} height={687} className='object-contain w-full' />
    </div>



      <div className='flex flex-1 flex-col'>
        <h2 className='mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
         <span className='text-yellow-400 inline-block mt-3 '>Exclusive </span> Deals Await!
        </h2>

        <p className='mt-4 lg:max-w-lg info-text'>Discover our limited-time specials crafted just for you. Explore unbeatable offers and elevate your shopping experience today.</p>

        <p  className='mt-6 lg:max-w-lg info-text'>
        Experience unparalleled savings and treat yourself to something extraordinary. Ready to seize the opportunity? Explore our special offers and elevate your style today!
        </p>

        <div className='mt-11 flex flex-wrap gap-4'>
            <Button label="Shop Now" iconURL={arrowRight} />
            <Button label="Learn More" backgroundColor='bg-white' borderColor='border-slate-gray' textColor='text-slate-gray' />
        </div> 
    </div>

   </section>
  )
}

export default SpecialOffer
