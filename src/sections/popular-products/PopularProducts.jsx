import React from 'react'
import { products } from '../../constants'
import PopularProductCard from '../../components/product-card/PopularProductCard'

const PopularProducts = () => {
  return (
    <section id='products' className='max-container max-sm:mt-12 '>
      <div className='flex flex-col justify-start gap-5 '>
        <h2 className='text-4xl font-palanquin font-bold'>See What's<span className='text-yellow-400'> Just In! </span></h2>
        <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'>Discover our latest hat arrivals, from trendy styles to classic designs, perfect for completing any look.</p>
      </div>

      <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14'>
        {products.map((product)=>(
          <PopularProductCard  key={product.name} {...product} />
        ))}
      </div>
    </section>
  )
}

export default PopularProducts
