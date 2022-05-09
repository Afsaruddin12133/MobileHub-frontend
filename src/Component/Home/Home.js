import { ArrowNarrowRightIcon } from '@heroicons/react/solid';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Carousel from './Carousel/Carousel';
import Client from './Client/Client';
import Product from './Product/Products';
import Reviews from './review/reviews';

const Home = () => {
    let navigate = useNavigate();
 
    return (
        <div >
           <Carousel/>
          <h1 className='text-4xl text-center font-semibold mt-10 mb-5'>List of Products
          We Store</h1>
          <Product/>
          <div className='grid justify-items-end mr-10'>
          <button type="button" onClick={()=>navigate("/manageItem") }className="inline-block px-6 mt-10 mb-10    py-2.5 bg-blue-600 text-white font-medium text-xl leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"><h3 className='inline'>Manage items <ArrowNarrowRightIcon className="h-5 w-5 inline text-white"/></h3></button>
          </div>
          <Client/>
          <h1 className='text-4xl text-center font-semibold mt-10 mb-5'>Customer Reviews</h1>
          <Reviews/>
        </div>
    );
};

export default Home;