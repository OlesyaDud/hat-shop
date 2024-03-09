import React from 'react'
import { reviews } from '../../constants'
import ReviewCard from '../../components/review/ReviewCard'

const CustomerReviews = () => {
  return (
    <section className='max-container'>
      <h3 className='font-palanquin text-center text-4xl font-bold '>
         Our <span className='span1'> Customer </span> Testimonials
      </h3>
      <p className='info-text m-auto mt-4 max-w-lg text-center'>Real stories shared by our delighted clientele.</p>

      <div className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
        {reviews.map((review)=>(
          <ReviewCard key={review.customerName} imgURL={review.imgURL} customerName={review.customerName} rating={review.rating} feedback={review.feedback} />
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews
