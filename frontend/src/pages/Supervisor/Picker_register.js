import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { handleErr } from '../Toastify';
import { handleSuccess } from '../Toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

function Picker_register() {
    // Use empty strings for form input values
    const [picker_name, set_picker_name] = useState(''); 
    const [picker_address, set_picker_address] = useState('');
    const [picker_phone, set_picker_phone] = useState('');
    const [picker_age, set_picker_age] = useState('');
    const [picker_acc, set_picker_acc] = useState('');

    const handlePickerDetails = async (e) => 
    {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:3001/api/registerPicker', {
                picker_name,
                picker_address,
                picker_phone,
                picker_age,
                picker_acc
            });

            if(res.data.status === 400) 
            {
                const errorMessages = res.data.message;
                errorMessages.forEach((errMsg) => {handleErr(errMsg);});
            } 
            else if(res.data.status === 201)
            {
                handleSuccess(res.data.message);
            }
            else
            {
                handleErr(res.data.message);
            }
        } 
        catch (err) 
        {
            console.log("err");
        }
    };

    return (
        <div>
            <ToastContainer />
            <form onSubmit={handlePickerDetails} className='form1'>
                <label>Full Name</label>
                <input type='text' placeholder='full name' name='picker_name' onChange={(e) => set_picker_name(e.target.value)} />

                <label>Age</label>
                <input type='number' placeholder='age' name='picker_age' onChange={(e) => set_picker_age(e.target.value)} />
                
                <label>Address</label>
                <input type='text' placeholder='address' name='picker_address' onChange={(e) => set_picker_address(e.target.value)} />

                <label>Phone</label>
                <input type='number' placeholder='phone' name='picker_phone' onChange={(e) => set_picker_phone(e.target.value)} />

                <label>Account Number (People's Bank)</label>
                <input type='number' placeholder='account number' name='picker_acc' onChange={(e) => set_picker_acc(e.target.value)} />

                <button className='btn'>Submit</button>
            </form>
        </div>
    );
}

export default Picker_register;
