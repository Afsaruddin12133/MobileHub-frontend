import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import auth from '../../Firebase init/Firebase.init';
import Social from '../../Shared Component/Social/Social';

const Login = () => {
 let navigate = useNavigate();

  const [email,setEmail] = useState()
  const [password,setPassword] = useState()
  const [signInWithEmailAndPassword,user,loading,error,] = useSignInWithEmailAndPassword(auth);

  const handelsingin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password)
   console.log(error)
    document.getElementById('exampleInputEmail2').value = "";
    document.getElementById('exampleInputPassword2').value = "";
    }
  
    return (
        <div className="block rounded-lg shadow-lg bg-white max-w-sm p-10 mt-10 mb-12 m-auto ">
            <h1 className='text-center text-3xl font-semibold mb-6'>Log In</h1>  
        <form>
          <div className="form-group mb-6">
            <input type="email" onBlur={(e)=>setEmail(e.target.value)} className="form-control
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
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputEmail2"
              aria-describedby="emailHelp" placeholder="Enter email"  required/>
          </div>
          <ToastContainer />
          <div className="form-group mb-6">
            <input type="password" onBlur={(e)=>setPassword(e.target.value)}   className="form-control block
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
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputPassword2"
              placeholder="Enter Password" required />
          </div>
          <div className="flex justify-between items-center mb-6">
            <div className="form-group form-check">
              <input type="checkbox"
                className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                id="exampleCheck2" />
              <label className="form-check-label inline-block text-gray-800" for="exampleCheck2">Remember me</label>
            </div>
            <button type='button' 
              className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out">Forgot
              password?</button>
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
            ease-in-out" onClick={handelsingin}>Log in</button>
          <p className="text-gray-800 mt-6 text-center">Not a member?
           <button  onClick={()=>navigate("/registration")}
              className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out">Register</button>
          </p>
        </form>
        <div
            class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
          >
            <p class="text-center font-semibold mx-4 mb-0">OR</p>
          </div>
          <Social/>
      </div>
    );
};

export default Login;