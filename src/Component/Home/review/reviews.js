import React, { useEffect, useState } from 'react';
import Review from '../review/review';

const Reviews = () => {
    const [reviews,setReviews] = useState();
    useEffect(()=>{
        fetch('data.json')
        .then(review => review.json())
        .then(review =>setReviews(review))
    },[])
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 m-4 gap-4 '>
            
          {
            (reviews)?reviews.map(review => <Review key={review.id} review={review}/>):''
          }
        </div>
    );
};

export default Reviews;