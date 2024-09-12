import React ,{useEffect, useState} from 'react'
import './css/MainPage.css'
import teaFactoryImage from './tea3.webp'
import axios from 'axios'

export default function MainPage() 
{

  //state to store the user input
  const [username , setUsername] = useState("");
  const [password , setPassword] = useState("");

  //handle the form submission
  const handleSubmit = (e) => 
    {
      e.preventDefault();
      console.log(username , password);
    };
useEffect(() => {
});

  return (
    <>
    <div className='head'>
        <h3 className='lg:mx-32 text-3xl font-bold text-green-600'>TEA FACTORY</h3>
        <p className='lg:mx-32 opacity-40 py-6'>Fifty years of trust....</p>
    </div>
    <div className='register'>

        <form onSubmit={handleSubmit} className='form'>
            <div className='login'><h1>Signup / Login</h1></div>
            <label className='label' htmlFor={username}>Username</label>
            <input type='text' onChange={(e)=>setUsername(e.target.value)} name={username} id={username} placeholder='username' className='inputField' />

            <label className='label' htmlFor={password}>Password</label>
            <input type='password' onChange={(e)=>setPassword(e.target.value)} name={password} id={password} placeholder='password' className='inputField' />

              <button type='submit' className='btn'>Login</button>

            <a href='/register' className='registerLink'>Don't have an account? Register</a>
            <a href='/forgotpassword' className='forgotPassword'>Forgot Password?</a>
        </form>

        <div className='imgClrelative'>
            <img src={teaFactoryImage} alt='Tea Factory' className='image_home' />
        </div>

    </div>
    </>
  )
}
