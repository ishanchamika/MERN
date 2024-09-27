// auth.js
import {jwtDecode} from 'jwt-decode';

export const checkTokenExpiration = () => {
  try 
  {
    const token = localStorage.getItem('token');

    if (token) 
    {
      const decoded = jwtDecode(token);
      const currentTime = Date.now() / 1000; // Current time in seconds

      // Check if the token is expired
      if (decoded.exp < currentTime) 
      {
        localStorage.removeItem('token');  // Remove expired token
        return false;  // Token is expired
      }
      return true; // Token is valid
    }

    return false;  // No token found
  } 
  catch (error) 
  {
    console.error('Error decoding token:', error);
    return false; // Treat any decoding errors as expired or invalid
  }
};
