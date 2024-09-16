import React, {useEffect} from 'react'
import { ToastContainer } from 'react-toastify'
import { handleSuccess } from './Toastify'
import 'react-toastify/dist/ReactToastify.css';
import { checkTokenExpiration } from './auth';

function Dashboard() 
{
  useEffect(() => 
  {
      const isTokenValid = checkTokenExpiration();

      if(!isTokenValid)
      {
          window.location.href = '/login';
      }
      else
      {
          if(!sessionStorage.getItem('loginSuccessful'))
          {
              localStorage.removeItem('loginSuccessful');
              handleSuccess('Login Successful');
              sessionStorage.setItem('loginSuccessful', true);
          }
      }
  } ,[] );



  return (
    <>
        <ToastContainer />
        <div>Dashboard</div>
    </>
  )
}


export default Dashboard