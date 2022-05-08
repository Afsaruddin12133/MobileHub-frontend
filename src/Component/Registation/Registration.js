import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../Firebase init/Firebase.init';
import Social from '../../Shared Component/Social/Social';

const Registration = () => {
   let navigate = useNavigate();

  const [ createUserWithEmailAndPassword,  user,  loading, error, ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification:true});

  const [email,setEmail] = useState({value:"",error:''})
  const [password,setPassword] = useState({value:"",error:''})
// handelemail
  const handelemail = (email) =>{
    if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
     setEmail({value:email,error:""})
    }else{
      setEmail({value:"",error:"Invalid Email"})
    }
}
// handelpassword
const handelpassword = (password) =>{
  if(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{6,30}$/.test(password)){
    setPassword({value:password,error:""})
  }else{
    setPassword({value:"",error:"Please Include must uppercase,lowercase ,special character,number"})
  }
}
    return (
        <div className="block rounded-lg shadow-lg bg-white max-w-sm p-10 mt-10 mb-12 m-auto">
               <h1 className='text-center text-3xl font-semibold mb-6'>Registration</h1> 
        <form onSubmit={(e) => {
              e.preventDefault();
               createUserWithEmailAndPassword(email.value, password.value)
               toast('Please Check your Email and Complete Sing Up!!')
               e.target.reset();
              
              }}>
           <ToastContainer />
          <div className="grid grid-cols-2 gap-4">
            <div className="form-group mb-6">
              <input type="text"  className="form-control 
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
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput125"
                 placeholder="First name"required/>
            </div>
            <div className="form-group mb-6">
              <input type="text" className="form-control
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
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput124"
                 placeholder="Last name" required/>
            </div>
          </div>
          <div className="form-group mb-6">
            <input type="email" onBlur={(e)=>handelemail(e.target.value)} className="form-control block
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
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput129"
              placeholder="Email address" required/>
          </div>
          {
            email?.error && <p className='text-red-600'>{email.error}</p>
          }
          <div className="form-group mb-6">
            <input type="password" onBlur={(e)=>handelpassword(e.target.value)} className="form-control block
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
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput126"
              placeholder="Password" required/>
          </div>
          {
            password?.error && <p className='text-red-600'>{password.error}</p>
          }
          <div className="form-group form-check text-center mb-6">
            <input type="checkbox"
              className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
              id="exampleCheck25" checked/>
            <label className="form-check-label inline-block text-gray-800" for="exampleCheck25">Agree terms $ conditions </label>
          </div>
          <button type="submit" className="
            w-full
            px-6
            py-2.5
            bg-blue-600
            text-white
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md
            hover:bg-blue-700 hover:shadow-lg
            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-blue-800 active:shadow-lg
            transition
            duration-150
            ease-in-out">Sign up</button>
             <div
            class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
          >
            <p class="text-center font-semibold mx-4 mb-0">OR</p>
          </div>
          <Social/>
           <p className="text-gray-800 mt-6 text-center">Already User? <button  onClick={()=>navigate("/login")} 
              className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out">Log In</button>
          </p>
        </form>
      </div>
    );
};

export default Registration;