const ProductCard = ({changeBigProductImage, imgURL, bigProductImage }) => {
    const handleClick =()=>{
        if(bigProductImage !== imgURL.bigHat){
            changeBigProductImage(imgURL.bigHat)
        }
    }

  return (
    <div className={`border-2 rounded-xl
    ${bigProductImage === imgURL.bigHat ? 'bg-sky-100' : 'border-transparent'}
    cursor-pointer max-sm:flex-1
    `}
    onClick={handleClick}
    >
      
      <div className='flex justify-center items-center bg-sky-50 bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
        <img src={imgURL.thumbnail} width={127} height={103}
        className='object-cover'
        />
      </div>
    </div>
  )
}

export default ProductCard
