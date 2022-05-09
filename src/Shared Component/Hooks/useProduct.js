import { useEffect, useState } from 'react';

const useProduct = () => {
    const [products,setProducts] = useState();
    useEffect(()=>{
        fetch('https://glacial-anchorage-85056.herokuapp.com/products')
        .then(product => product.json())
        .then(product =>setProducts(product))
    },[])
    return [products,setProducts];
};

export default useProduct;