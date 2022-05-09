import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

const AddItems = () => {
    const handeladd = (e) =>{
        e.preventDefault();
        const name = e.target.productName.value;
        const price = e.target.price.value;
        const Quantity = e.target.Quantity.value;
        const supplieName = e.target.supplieName.value;
        const productDescription = e.target.productDescription.value;
        const Photo = e.target.Photo.value;
        const product = {name,price,Quantity,supplieName,productDescription,Photo}
        console.log(product)

        fetch('https://glacial-anchorage-85056.herokuapp.com/products',{
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(product)
        })
        .then(data => data.json())
        .then(data => console.log(data))
        toast("Product Create Successful !!")
        e.target.reset();
    }
    return (
        <div className='w-[450px] m-auto'>
           <h1 className='text-4xl text-center font-semibold mt-10 mb-5'>Add New Item</h1>
           <ToastContainer />
          <div className="form-group mb-6">
            <form onSubmit={handeladd}>
            <label htmlFor="text1">Product Name</label>
            <input type="text" name='productName'  className="form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="text1"
              aria-describedby="emailHelp" placeholder="Enter Product Name"  required/>
              <label htmlFor="text2">Product Price</label>
            <input type="number"  name='price' className="form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="text2"
              aria-describedby="emailHelp" placeholder="Enter Product Price"  required/>
              <label htmlFor="text3">Product Quantity</label>
            <input type="number" name='Quantity'  className="form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="text3"
              aria-describedby="emailHelp" placeholder="Enter Product Quantity"  required/>
               <label htmlFor="text4">Supplier Name</label>
            <input type="text" name='supplieName' className="form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="text4"
              aria-describedby="emailHelp" placeholder="Enter  Supplier Name"  required/>
                  <label htmlFor="text8">Product Description</label>
            <input type="text" name='productDescription'  className="form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="text8"
              aria-describedby="emailHelp" placeholder="Enter Product Description"  required/>
               <label htmlFor="text5">Product Photo</label>
            <input type="text" name='Photo' className="form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="text5"
              aria-describedby="emailHelp" placeholder="Enter Photo url"  required/>

<div className="flex space-x-2 justify-center">
  <button type="submit" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs mt-10 leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Add New Item to Database</button>
</div>
            </form>
              </div>
        </div>
    );
};

export default AddItems;