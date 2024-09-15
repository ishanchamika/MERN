import React ,{useState} from 'react'
import './css/MainPage.css'
import teaFactoryImage from './tea3.webp'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export default function Register() 
{

  //state to store the user input
  const [name , setName] = useState("");
  const [password , setPassword] = useState("");
  const [email , setEmail] = useState("");
  const Navigate = useNavigate();

  //handle the form submission
  const handleSubmit = (e) => 
    {
      e.preventDefault();
      axios.post('http://localhost:3001/api/user', {name, email, password})
      .then(result =>{ console.log(result)
        Navigate('/login')
      })
      .catch(err => console.log(err))
    }

  return (
    <>
    <div className='head'>
        <h3 className='lg:mx-32 text-3xl font-bold text-green-600'>TEA FACTORY</h3>
        <p className='lg:mx-32 opacity-40 py-6'>Fifty years of trust....</p>
    </div>
    <div className='register'>

        <form onSubmit={handleSubmit} className='form'>
            <div className='login'><h1>Register</h1></div>

            <label className='label' htmlFor='name'>Name</label>
            <input type='text' onChange={(e)=>setName(e.target.value)} name='name' placeholder='name' className='inputField' />

            <label className='label' htmlFor='email'>Email</label>
            <input type='text' onChange={(e)=>setEmail(e.target.value)} name='email' placeholder='email' className='inputField' />

            <label className='label' htmlFor='password'>Password</label>
            <input type='password' onChange={(e)=>setPassword(e.target.value)} name='password' placeholder='password' className='inputField' />

            <button type='submit' className='btn'>Register</button>

            <Link to ='/login' className='registerLink'>Already have an account?</Link>
            <a href='/forgotpassword' className='forgotPassword'>Forgot Password?</a>
        </form>

        <div className='imgClrelative'>
            <img src={teaFactoryImage} alt='Tea Factory' className='image_home' />
        </div>

    </div>
    </>
  )
}
