import { StarIcon } from '@heroicons/react/solid';
import React from 'react';

const Review = ({review}) => {
    const {img,name,ratings,description} = review;
    return (
        // absolute border-8 rounded-full
        <div className='shadow-lg rounded-xl p-5 '>
      <div className='w-[150px] h-[150px] mx-auto border-8 rounded-full'>
          <img className='w-[134px] h-[134px] m-auto rounded-full'  src={review.img} alt=""/>
      </div>
        <h1 className='text-xl font-semibold my-3 text-center'>{review.name}</h1>
        <h3 className='text-center font-semibold'>
            <StarIcon className='w-5 inline text-[#ffb400] my-3'/>
            <StarIcon className='w-5 inline text-[#ffb400]'/>
            <StarIcon className='w-5 inline text-[#ffb400]'/>
            <StarIcon className='w-5 inline text-[#e9d0a0]'/> 
            {review.ratings}
        </h3>
        <p>{(review.description.length >130)? review.description.slice(0,130)+" "+ "See More...":review.description}</p>
        </div>
    );
};

export default Review;