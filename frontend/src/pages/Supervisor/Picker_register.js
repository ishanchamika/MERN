import React , {useEffect, useState} from 'react'
import { Navigate, Link, Routes, Route, BrowserRouter } from 'react-router-dom'
import '../css/supervisor.css'
import { ToastContainer } from 'react-toastify';
import { handleErr } from '../Toastify';
import { handleSuccess } from '../Toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';



function Picker_register() 
{

    // const[picker_id, set_picker_id] = useState([]);
    const[picker_name, set_picker_name] = useState([]);
    const[picker_address, set_picker_address] = useState([]);
    const[picker_phone, set_picker_phone] = useState([]);
    const[picker_age, set_picker_age] = useState([]);
    const[picker_acc, set_picker_acc] = useState([]);



    const handlePickerDetails = async (e) =>
    {
        e.preventdefault();
        try
        {
            const res = await axios.post('http://localhost:3001/api/registerpicker', {picker_name, picker_address, picker_phone, picker_age, picker_acc});

            if(res.data.type === 'success')
            {
                
            }
            else
            {

            }
        }
        catch (err)
        {
            console.log(err);
        }
    }


  return (
    <div>
    <form onSubmit={Picker_register} className='form1'>
        {/* <label>Picker ID</label> */}
        {/* <input type='text' placeholder='Enter Employee ID' name='picker_id' onChange={(e)=>set_picker_id(e.target.value)} /> */}

        <label>Full Name</label>
        <input type='date' placeholder='Select Date' name='picker_name' onChange={(e)=>set_picker_name(e.target.value)}/>

        <label>Address</label>
        <input type='text' placeholder='Enter Employee Name' name='picker_address' onChange={(e)=>set_picker_address(e.target.value)} />

        <label>Phone</label>
        <input type='text' placeholder='Enter Picked Weight' name='picker_phone' onChange={(e)=>set_picker_phone(e.target.value)} />

        <label>Age</label>
        <input type='text' placeholder='Enter Picked Weight' name='picker_age' onChange={(e)=>set_picker_age(e.target.value)} />

        <label>Account Number(People's Bank)</label>
        <input type='text' placeholder='Enter Picked Weight' name='picker_acc' onChange={(e)=>set_picker_acc(e.target.value)} />

    <button className='btn'>Submit</button>
  </form>
  </div>
  )
}

export default Picker_register