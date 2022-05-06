import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  const activestyle=({ isActive }) => {
    return {
      display: "block",
      margin: "1rem 0",
      textDecoration : "none",
      color: isActive ? "#00B4D8" : "white",
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
        <nav className='md:flex  bg-[#03045E] md:justify-between md:px-8 flex'>
           <div>
             {/* <img src={} alt="" className='cursor-pointer' /> */}
          
           </div>
           <div className='md:flex md:gap-8 md:p-6  md:block hidden'>
           {
               navinfo.map(info =>  <NavLink key={info.id}  to = {info.link} style={activestyle}>{info.name}</NavLink>)
           }
           </div>
        </nav>
    );
};

export default Nav;




// <NavLink to = "/" style={activestyle}>Home</NavLink>
//             <NavLink to = "/blogs" style={activestyle}>Blogs</NavLink>
//             <NavLink to = "/about" style={activestyle}>About Us</NavLink>