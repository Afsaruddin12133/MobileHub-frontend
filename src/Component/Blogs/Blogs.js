import React from 'react';


const Blogs = () => {
    return (
      <div>
            <div className='md:flex md:gap-10 md:p-8'>
            <div className='md:w-2/4 drop-shadow-lg border p-5 rounded'>
                <h1 className='text-3xl font-bold mb-10'>Q: Difference between javascript and nodejs?</h1>
                <span className='font-bold underline text-2xl'>Ans.</span> <br />
              
                 <h2 className='font-bold underline text-2xl text-center'>Javascript:</h2>
                 <ul>
                     <li>Javascript is a  high-level Programming Language</li>
                     <li>Javascript Run on the browsers</li>
                     <li>Javascript user for Frontend development</li>
                     <li> JavaScript was created by Brendan Eich </li>
                 </ul>
                
           
                 <h2 className='font-bold underline text-2xl text-center'>Node Js:</h2>
                 <ul>
                     <li>Node Js is a running environment for a JavaScript</li>
                     <li>Javascript can run outside help with Node js </li>
                     <li>Node Js Used for backend development </li>
                     <li>Node.js was written initially by Ryan Dahl </li>
                 </ul>

            </div>
            <div  className='md:w-2/4 drop-shadow-lg border p-5 rounded'>
                <h1 className='text-3xl font-bold mb-10'>Q :When should you use nodejs and when should you use mongodb?</h1>
                <span className='font-bold underline text-2xl'>Ans.</span> <br />
                <h2 className='font-bold underline text-2xl text-center'>Node Js:</h2>
                <p>We know,Node.js has an Event Loop to handle non-blocking and event-driven I/O operations. I thing  Node.js is best suited for real-time applications & Microservices.</p>
                <h2 className='font-bold underline text-2xl text-center'>Mongodb:</h2>
                <p>Mongodb is a document oriented database program.MongoDB is a powerful database with many capabilities.You absolutely must store unstructured data. Say things coming from 3rd-party API you don’t control, logs whose format may change any minute, user-entered metadata, but you want indexes on a subset of it.</p>
            </div>
            
        </div>
            <div className='md:flex md:gap-10 md:p-8'>
            <div className='md:w-2/4 drop-shadow-lg border p-5 rounded'>
                <h1 className='text-3xl font-bold mb-10'>Q: Differences between sql and nosql databases?</h1>
                <span className='font-bold underline text-2xl'>Ans.</span> <br />
           
                 <h2 className='font-bold underline text-2xl text-center'>Sql:</h2>
                 <ul>
                     <li>Sql full form Structured Query Language</li>
                     <li>Sql Vertically Scalable</li>
                     <li>Sql is good for complex queries</li>
                     <li> SQL databases display data in form of tables so it is known as table-based database.</li>
                 </ul>
            
       
                 <h2 className='font-bold underline text-2xl text-center'>Nosql:</h2>
                 <ul>
                     <li>No Sql full form  Non relational Structured Query Language</li>
                     <li>No Sql Horizontally scalable</li>
                     <li>No Sql is good for simple queries</li>
                     <li>NoSQL databases display data as collection of key-value pair, documents, graph databases or wide-column stores</li>
                 </ul>
            
            </div>
            <div  className='md:w-2/4 drop-shadow-lg border p-5 rounded'>
                <h1 className='text-3xl font-bold mb-10'>Q :What is the purpose of jwt and how does it work?</h1>
                <span className='font-bold underline text-2xl'>Ans.</span> <br />
                <p>Jwt full form is JSON Web Token.It  is an open standard used to share security information between two parties a client and a server</p>
            </div>
            
        </div>
       
      </div>
    );
};

export default Blogs;