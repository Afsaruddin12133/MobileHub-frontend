import React from 'react';

const Product = ({product}) => {
    const {image,name,quantity,Description,price,supplier_name} = product;
    return (
      <div>
            <div className="flex justify-center">
        <div className="rounded-lg shadow-lg  bg-white max-w-sm">
          <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
            <img className="rounded-t-lg m-auto hover:scale-90" src={image} alt="" width="220px"/>
          </a>
          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2">{name}</h5>
            <p className="text-gray-700 text-base mb-4">
             {Description}
            </p>
            <h4>Price : {price} $</h4>
            <h4>Quantity : {quantity}</h4>
            <h4 >Supplier Name : {supplier_name}</h4>
            <div className='mt-6'>
            <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Update Product</button>
            </div>
          </div>
          
        </div>
      </div>
      </div>
    );
};

export default Product;