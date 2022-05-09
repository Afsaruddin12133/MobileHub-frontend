import React from 'react';

const ManageItemproduct = ({product,handeldelete}) => {
    const {image,name,quantity,Description,price,supplier_name,_id} = product;

    return (
    <div class="flex justify-center">
  <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
    <img class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={image} width="350px" alt="" />
    <div class="p-6 flex flex-col justify-start">
      <h5 class="text-gray-900 text-xl font-medium mb-2">{name}</h5>
      <h5 class="text-gray-900 text-xl font-medium mb-2">{price}</h5>
      <h5 class="text-gray-900 text-xl font-medium mb-2">{quantity}</h5>
      <h5 class="text-gray-900 text-xl font-medium mb-2">{supplier_name}</h5>
      <p class="text-gray-700 text-base mb-4">
       {Description?Description.slice(0,40):""}
      </p>
      <div class="flex space-x-2 justify-center">
  <button type="button" onClick={()=>handeldelete(_id)} class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Delete</button>
</div>
    </div>
  </div>
</div>

    );
};

export default ManageItemproduct;