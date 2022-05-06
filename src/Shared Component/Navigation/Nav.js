import React from 'react';
import { NavLink } from 'react-router-dom';
import img from '../../Component/photo/Mobilehub_Logo.png';

const Nav = () => {
  const activestyle=({ isActive }) => {
    return {
      margin:"10px",
      display: "block",
      margin: "8px 0",
      textDecoration : "none",
      color: isActive ? "#6FDFDF" : "white",
    };
  };
  const navinfo = [
      {id:1,name:"Home",link:"/"},
      {id:2,name:"Manage Items",link:"/manageItem"},
      {id:3,name:"Add Items",link:"/addItems"},
      {id:4,name:"My Items",link:"/myItems"},
      {id:5,name:"Log In",link:"/login"},
      {id:6,name:"Q&A",link:"/blogs"},
      {id:7,name:"About Us",link:"/about"},
  ]
    return (
      
  <nav className="
  sticky  
  top-0
  py-8
  md:py-0
  w-full
  flex flex-wrap
  items-center
  justify-between
  bg-[#5534A5]
  text-gray-500
  hover:text-gray-700
  focus:text-gray-700
  shadow-lg
  navbar navbar-expand-lg navbar-light
  ">
  <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
  <button className="
      navbar-toggler
      text-gray-500
      border-0
      hover:shadow-none hover:no-underline
      py-2
      px-2.5
      bg-transparent
      focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline
    " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars"
    className="w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path fill="currentColor"
      d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
    </path>
  </svg>
  </button>
  <div className="collapse navbar-collapse flex-grow items-center justify-between" id="navbarSupportedContent">
  <div className="container-fluid">
        <a className="flex items-center text-gray-900 hover:text-gray-900 focus:text-gray-900 mt-2 lg:mt-0 mr-1" href="#">
        <img src={img} alt="" className='cursor-pointer' />
        </a>
      </div>

  <ul className="navbar-nav flex flex-col pl-0 list-style-none md:gap-8">
            {
                navinfo.map(info =>  <NavLink key={info.id}  to = {info.link} style={activestyle}>{info.name}</NavLink>)
            }
  </ul>
  </div>
  </div>
    </nav>

    );
};

export default Nav;

















{/* 
  <nav classNameName='md:flex  bg-[#5534A5] md:justify-between md:px-8 flex'>
           <div>
             <img src={img} alt="" classNameName='cursor-pointer' />
          
           </div>
           <div classNameName='md:flex md:gap-8 md:p-6  md:block hidden'>
           {
               navinfo.map(info =>  <NavLink key={info.id}  to = {info.link} style={activestyle}>{info.name}</NavLink>)
           }
           </div>
        </nav> */}