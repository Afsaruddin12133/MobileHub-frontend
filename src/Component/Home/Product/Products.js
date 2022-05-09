import React from 'react';
import useProduct from '../../../Shared Component/Hooks/useProduct';
import Product from './Product';

const Products = () => {
    
    const [products,setProducts] = useProduct();
    
    return (
               <div className='grid grid-cols-1 md:grid-cols-3 m-4 gap-4 '>
            {
              (products)?products.map(product =><Product key={product._id} product={product}/>):''
            }
          </div>
 
    );
};

export default Products;