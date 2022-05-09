import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../Firebase init/Firebase.init';

const Social = () => {
    const [signInWithGoogle, user, loading, eerror] = useSignInWithGoogle(auth);
    const handelgooglesing =  async() =>{
     await  signInWithGoogle();
       toast("Sing in Successful!!")
    }
    return (
        <div>
            <button type="button" onClick={handelgooglesing} className="mb-2 w-full inline-block px-6 py-2.5 bg-[#F4B400] text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-[#ebd594] hover:shadow-lg focus:bg-[#F4B400] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#F4B400] active:shadow-lg transition duration-150 ease-in-out"><h4 className='mr-4 inline-block'>Sing in with Google</h4><span className='w-12 '>
            <i class="fab fa-google"></i></span></button>      
        </div>
    );
};

export default Social;