import React from 'react';
import Carousel from './Carousel/Carousel';
import Reviews from './review/reviews';

const Home = () => {
 
    return (
        <div >
           <Carousel/>
           <h1 className='text-4xl text-center font-semibold m-5'>Customer Reviews</h1>
          <Reviews/>
        </div>
    );
};

export default Home;