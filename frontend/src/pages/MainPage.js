import React ,{useState} from 'react'
import './css/MainPage.css'
import teaFactoryImage from './tea3.webp'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { handleErr } from './Toastify'
import { ToastContainer } from 'react-toastify'; 
import {handleSuccess} from './Toastify'
import 'react-toastify/dist/ReactToastify.css';
// import { set } from '../../../backend/app'

export default function MainPage() 
{
  //state to store the user input
  const [username , setUsername] = useState("");
  const [password , setPassword] = useState("");
  const Navigate = useNavigate();

    //handle the form submission
    const handleSubmit = async (e) => 
    {
      e.preventDefault();
      try
      {
        if(!password && !username)
        {
          handleErr('Username and password are required');
          return;
        }
        if(!username)
        {
          handleErr('Username is required');
          return;
        }
        if(!password)
        {
          handleErr('Password is required');
          return;
        }
        
    
        const response = await axios.post('http://localhost:3001/api/finduser', {username, password});
        if(response.data.token)
        {
          localStorage.setItem('token', response.data.token);
          handleSuccess('Login Successful');
          setTimeout(() => {Navigate('/supervisor');}, 2000);
          
        }
        else
        {
          handleErr('Invalid username or password');
        }
      }
      catch(err)
      {
        console.log('Login error', err);
        handleErr('Login failed. Please try again later.');
      }
    };


  return (
    <>
    <ToastContainer />
    <div className='head'>
        <h3 className='lg:mx-32 text-3xl font-bold text-green-600'>TEA FACTORY</h3>
        <p className='lg:mx-32 opacity-40 py-6'>Fifty years of trust....</p>
    </div>
    <div className='register'>

        <form onSubmit={handleSubmit} className='form'>
            <div className='login'><h1>Login</h1></div>

            <label className='label' htmlFor='username'>Username</label>
            <input type='text' onChange={(e)=>setUsername(e.target.value)} name='username' placeholder='username' className='inputField' />

            <label className='label' htmlFor='password'>Password</label>
            <input type='password' onChange={(e)=>setPassword(e.target.value)} name='password' placeholder='password' className='inputField' />

            <button type='submit' className='btn'>Login</button>

            <Link to ='/register' className='registerLink'>Don't have an account?</Link>
            <a href='/forgotpassword' className='forgotPassword'>Forgot Password?</a>
        </form>

        <div className='imgClrelative'>
            <img src={teaFactoryImage} alt='Tea Factory' className='image_home' />
        </div>

    </div>
    </>
  )
}
