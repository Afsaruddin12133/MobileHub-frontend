import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import useProduct from '../../Shared Component/Hooks/useProduct';
import ManageItemproduct from './ManageItemproduct';

const ManageItems = () => {
    const [products,setProducts] = useProduct();
    const handeldeleteuser = (id)=>{
        const procced = window.confirm("Are you sure?")
        if(procced){
            const url =`https://glacial-anchorage-85056.herokuapp.com/product/${id}`;
            fetch(url, {
                method: "DELETE"
            })
            .then(res =>res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    toast("Delete  Successful !!")
                    const remaining = products.filter(product => product._id !==id)
                    setProducts(remaining)
                }
            })
        }
    }
    
    return (
      <div>
            <div className='grid grid-cols-1 md:grid-cols-3 m-4 gap-4 '>
              
              {
                (products)?products.map(product =><ManageItemproduct key={product._id} product={product} handeldelete = {handeldeleteuser}/>):''
              }
            </div>
             <ToastContainer />
      </div>

);
};

export default ManageItems;