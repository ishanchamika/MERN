import React, { useState } from 'react'
import { Navigate, Link, Routes, Route, BrowserRouter } from 'react-router-dom'
import '../css/supervisor.css'
import { ToastContainer } from 'react-toastify';
import { handleErr } from '../Toastify';
import { handleSuccess } from '../Toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

function Adddetails() 
{

  const [emp_id, set_emp_id] = useState("");
  const [emp_name, set_emp_name] = useState("");
  const [emp_date, set_emp_date] = useState("");
  const [emp_weight, set_emp_weight] = useState("");

  const addEmployee = async (e) => 
  {
    e.preventDefault();

    try{
      if(emp_id === "")
      {
        handleErr('Employee ID is required');
        return;
      }
      if(emp_name === "")
      {
        handleErr('Employee Name is required');
        return;
      }
      if(emp_date === "")
      {
        handleErr('Date is required');
        return;
      }
      if(emp_weight === "")
      {
        handleErr('Weight is required');
        return;
      }
      if (isNaN(emp_weight) || emp_weight <= 0) {
        handleErr('Weight must be a valid number greater than 0');
        return;
      }

      const response = await axios.post('http://localhost:3001/api/addemployee', {emp_id, emp_name, emp_date, emp_weight});
      if(response.data)
      {
        set_emp_id('');
        set_emp_name('');
        set_emp_date('');
        set_emp_weight('');
        setTimeout(() => {
          window.location.reload();
        }, 2000);
        handleSuccess('Employee added successfully');
      }
      else
      {
        handleErr('Failed to add employee');
      }
    }
    catch(err)
    {
      console.log(err);
    }
  }

  return (
    <div>
    <ToastContainer />
      <Link to='/supervisor'> <button className='btn'>Back</button></Link>
      <h1>Add picked Weight</h1>
  
      <form onSubmit={addEmployee} className='form1'>
        <label>Employee ID</label>
        <input type='text' placeholder='Enter Employee ID' name='emp_id' onChange={(e)=>set_emp_id(e.target.value)} />

        <label>Worked Date</label>
        <input type='date' placeholder='Select Date' name='emp_date' onChange={(e)=>set_emp_date(e.target.value)}/>

        <label>Employee Name</label>
        <input type='text' placeholder='Enter Employee Name' name='emp_name' onChange={(e)=>set_emp_name(e.target.value)} />

        <label>Picked Weight</label>
        <input type='text' placeholder='Enter Picked Weight' name='emp_weight' onChange={(e)=>set_emp_weight(e.target.value)} />

        <button className='btn'>Submit</button>
      </form>
    </div>

  )
}

export default Adddetails