const { Picker } = require('../MODEL/MPicker');
const { check, validationResult } = require('express-validator');

const validatePickerDetails = (pickerDetails) => {
    const errors = [];

    // Validate picker_name
    if (!pickerDetails.picker_name || typeof pickerDetails.picker_name !== 'string' || pickerDetails.picker_name.trim().length < 3) {
        errors.push('Picker name is required and must be at least 3 characters long.');
    }

    // Validate picker_age
    if (!pickerDetails.picker_age || typeof pickerDetails.picker_age !== 'number' || pickerDetails.picker_age < 18) {
        errors.push('Picker age is required and must be at least 18.');
    }

    // Validate picker_address
    if (!pickerDetails.picker_address || typeof pickerDetails.picker_address !== 'string' || pickerDetails.picker_address.trim() === '') {
        errors.push('Picker address is required.');
    }

    // Validate picker_phone
    const phoneRegex = /^[0-9]{10}$/; // Example for a 10-digit phone number
    if (!pickerDetails.picker_phone || !phoneRegex.test(pickerDetails.picker_phone)) {
        errors.push('Picker phone is required and must be a valid 10-digit phone number.');
    }

    // Validate picker_acc (optional, but if present, must be exactly 15 characters)
    if (pickerDetails.picker_acc && (typeof pickerDetails.picker_acc !== 'string' || pickerDetails.picker_acc.length !== 15)) {
        errors.push('Picker account must be exactly 15 characters long.');
    }
    if(pickerDetails.picker_acc.length == 0 )
    {
        errors.push('Account number is required');
    }

    return errors;
};



const registerPicker = async (req, res) => 
{
    const pickerDetails = 
    {
        picker_name: req.body.picker_name,
        picker_age: Number(req.body.picker_age),  // Ensure the age is a number
        picker_address: req.body.picker_address,
        picker_phone: req.body.picker_phone,
        picker_acc: req.body.picker_acc
    };

    const validationErrors = validatePickerDetails(pickerDetails);
    if (validationErrors.length > 0) 
    {
        return res.json({status: 400, type: 'error', message: validationErrors });
    }

    try 
    {
        const picker = new Picker({
            pickerName: pickerDetails.picker_name,
            pickerAge: pickerDetails.picker_age,
            pickerAddress: pickerDetails.picker_address,
            pickerPhone: pickerDetails.picker_phone,
            pickerAccount: pickerDetails.picker_acc
        });
        const saveRes = await picker.save();
        res.json({status: 201, message: 'Picker registered successfully', data: saveRes });
    }
    catch (error) 
    {
        console.error(error);
        res.json({status: 500,  type: 'error', message: "Server error, try again later" });
    }
};

exports.registerPicker = registerPicker;
