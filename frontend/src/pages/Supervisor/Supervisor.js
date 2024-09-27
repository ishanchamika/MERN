import React, {useState,useEffect} from 'react'
import { useNavigate, Link, Routes, Route, BrowserRouter } from 'react-router-dom'
import '../css/supervisor.css'
import axios from 'axios';
import { checkTokenExpiration } from '../auth';
import { ToastContainer } from 'react-toastify'
import { handleSuccess } from '../Toastify'
import 'react-toastify/dist/ReactToastify.css';


function Supervisor() 
{
  const [employeeData, setEmployeeData] = useState([]);

  const handleGetEmployees = async () => 
  {
    try 
    {
      const isTokenValid = checkTokenExpiration();
      if(!isTokenValid)
      {
          window.location.href = '/login';
      }
      else
      {
        // handleSuccess('Login Successful');
        const fetchData = await axios.get('http://localhost:3001/api/getemployees');
        if (fetchData.data) 
        {
          setEmployeeData(fetchData.data.data); // Update state with fetched data
        } 
        else 
        {
          console.log('No data found');
        }
      }
      
    } 
    catch (err) 
    {
      console.log('Error:', err);
    }
  };
  useEffect(() => 
  {
    handleGetEmployees();
  }, []);


  const handleDeleteEmploye = async (id) => 
  {
    try
    {
      console.log('id', id);
      const response = await axios.post('http://localhost:3001/api/deleteemployee', {id});

      if(response.data.message === 'success')
      {
        handleSuccess('Employee deleted successfully');
        setTimeout(() => { window.location.reload(); }, 2000);
      }
      else
      {
        console.log('No data found');
      }
    }  
    catch (err) 
    {
      console.log('Error:', err);
    }
  };

  const navigate = useNavigate();
  const handleUpdateEmp = async (id) => 
  {
    try
    {
        const response = await axios.post('http://localhost:3001/api/findemployee', {id});
        navigate('/updatedetails', {state: {updateEmp: response.data}});
    }
    catch(err)
    {
      console.log('Error:', err);
    }
  };

  return (

    <div className='supervisor'>
    <ToastContainer />
    <h1>Supervisor Page</h1>
      <Link to='/Add_details' className='pick'><button className='btn'>Add Picker Details</button></Link>
      <div className='pickers'>
        <table>
          <thead>
            <tr>
              <th>Employee ID</th>
              <th>Worked Date</th>
              <th>Employee Name</th>
              <th>Picked Weight</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>
            {employeeData.map((emp) => (
              <tr key={emp._id}>
                <td>{emp.empId}</td>
                <td>{emp.empDate}</td>
                <td>{emp.empName}</td>
                <td>{emp.empWeight}</td>
                <td><button className='sub_btn' onClick={() => handleUpdateEmp(emp._id)}>Update</button></td>
                <td><button className='sub_btn' onClick={() => handleDeleteEmploye(emp._id)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Supervisor