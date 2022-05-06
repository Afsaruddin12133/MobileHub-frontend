import React from 'react';


const Blogs = () => {
    return (
      <div>
            <div className='md:flex md:gap-10 md:p-8'>
            <div className='md:w-2/4 drop-shadow-lg border p-5 rounded'>
                <h1 className='text-3xl font-bold mb-10'>Q: Difference between javascript and nodejs?</h1>
                <span className='font-bold underline text-2xl'>Ans.</span> <br />
                <p></p>
            </div>
            <div  className='md:w-2/4 drop-shadow-lg border p-5 rounded'>
                <h1 className='text-3xl font-bold mb-10'>Q :When should you use nodejs and when should you use mongodb?</h1>
                <span className='font-bold underline text-2xl'>Ans.</span> <br />
                <p></p>
            </div>
            
        </div>
            <div className='md:flex md:gap-10 md:p-8'>
            <div className='md:w-2/4 drop-shadow-lg border p-5 rounded'>
                <h1 className='text-3xl font-bold mb-10'>Q: Differences between sql and nosql databases?</h1>
                <span className='font-bold underline text-2xl'>Ans.</span> <br />
                <p></p>
            </div>
            <div  className='md:w-2/4 drop-shadow-lg border p-5 rounded'>
                <h1 className='text-3xl font-bold mb-10'>Q :What is the purpose of jwt and how does it work?</h1>
                <span className='font-bold underline text-2xl'>Ans.</span> <br />
                <p></p>
            </div>
            
        </div>
       
      </div>
    );
};

export default Blogs;