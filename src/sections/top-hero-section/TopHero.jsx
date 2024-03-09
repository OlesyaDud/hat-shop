import React,  {useState} from 'react'
import Button from '../../components/button/Button'
import { arrowRight } from '../../assets/icons'
import { hats, statistics } from '../../constants'
import  {bigHat1}  from '../../assets/images'
import ProductCard from '../../components/product-card/ProductCard'

const TopHero = () => {
  const [bigProductImage, setBigProductImg] = useState(bigHat1);

  return (
    <section 
    id='home'
    className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container '
    >

    <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28'>
          <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82] font-bold'>
            <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>Introducing</span>
            <span className='span inline-block mt-3 '>Our Newest </span> Product Collection
          </h1>

          <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>Be the first to explore our latest product innovations!</p>
      

        <Button label="Shop Now" iconURL={arrowRight} altText="arrow-right-icon" />
{/* 
        <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className='text-4xl font-palanquin font-bold text-fuchsia-400'>{stat.value}</p>
              <p className='leading-7 font-montserrat text-slate-gray'>{stat.label}</p>
            </div>
          ))}
        </div> */}
    </div>

    <div className='relative flex-1 flex justify-center items-center xl:min-h-screen bg-yellow-50 max-xl:py-40 bg-cover bg-center'>
      <img 
      src={bigProductImage}
      alt='collection' 
      width={610} 
      height={500}
      className='object-contain relative z-10'
      />

      <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
        {hats.map((image, index) => (
          <div key={index}>
            <ProductCard 
            index={index}
              imgURL={image} 
              changeBigProductImage={(hat) => setBigProductImg(hat)}
              bigProductImage={bigProductImage}
            />
          </div>
        ))}
      </div>
    </div>

    </section>
  )
}

export default TopHero
