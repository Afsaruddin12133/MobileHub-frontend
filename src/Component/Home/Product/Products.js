import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
    const [products,setProducts] = useState();
    useEffect(()=>{
        fetch('https://glacial-anchorage-85056.herokuapp.com/products')
        .then(product => product.json())
        .then(product =>setProducts(product))
    },[])
    return (
               <div className='grid grid-cols-1 md:grid-cols-3 m-4 gap-4 '>
            {
              (products)?products.map(product => <Product key={product._id} product={product}/>):''
            }
          </div>
 
    );
};

export default Products;