import React, { useState, useEffect } from 'react'
import {useNavigate, Navigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { handleErr, handleSuccess } from '../Toastify';
import { ToastContainer } from 'react-toastify';
import { redirect } from 'react-router-dom';



function Updatedetails() 
{
    const location = useLocation();
    const {updateEmp} = location.state;

    const [id, set_id] = useState("");
    const [empID, setEmpID] = useState("");
    const [empName, setEmpName] = useState("");
    const [empDate, setEmpDate] = useState("");
    const [empWeight, setEmpWeight] = useState("");

    useEffect(() => 
    {
        if(location.state && location.state.updateEmp)
        {
            set_id(updateEmp.data._id);
            setEmpID(updateEmp.data.empId);
            setEmpName(updateEmp.data.empName);
            setEmpDate(updateEmp.data.empDate);
            setEmpWeight(updateEmp.data.empWeight);
        }
        else
        {
            // Navigate('/login', {replace: true});
            console.log('not located');
        }
        
    }, [location, Navigate]);

    

    const handleUpdate = async (e) =>
    {
        e.preventDefault();
        try
        {
            const response = await axios.put('http://localhost:3001/api/updateemployee', {id, empID, empName, empDate, empWeight});
            if(response.data)
            {
                handleSuccess('Employee updated successfully');
                setTimeout(() => {window.location.reload();}, 2000);
                redirect('/supervisor');
                console.log(response.data);
            }
            else
            {
                handleErr('Failed to update employee');
            }
        }
        catch(err)
        {
            handleErr('Failed to update employee');
            console.log(err);
        }
    };

    

  return (
    <div>
    <ToastContainer />
        <div className='container'>
            <h1 className='text-center'>Update Employee Details</h1>

            <form className='form1' onSubmit={handleUpdate}>
                <label>Employee ID</label>
                {console.log(empID)}
                <input type='text' placeholder='Enter Employee ID' value={empID} onChange={(e) => setEmpID(e.target.value)} />

                <label>Employee Name</label>
                <input type='text' placeholder='Enter Employee Name' value={empName} onChange={(e) => setEmpName(e.target.value)} />
                {console.log(empName)}

                <label>Worked Date</label>
                <input type='date' value={empDate} onChange={(e) => setEmpDate(e.target.value)}  />
                {console.log(empDate)}

                <label>Picked Weight</label>
                <input type='number' placeholder='Enter Picked Weight' value={empWeight} onChange={(e) => setEmpWeight(e.target.value)}  />
                {console.log(empWeight)}

                <input type='hidden' value={id} onChange={(e) => set_id(e.target.value)} />
                {console.log(id)}

                <button className='btn'>Update</button>
            </form>
        </div>
    </div>
  )
}

export default Updatedetails