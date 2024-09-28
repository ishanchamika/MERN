const { Picker } = require('../MODEL/Picker');
const { check, validationResult } = require('express-validator');

// Validation rules
const validatePicker = [
    check('picker_name')
        .notEmpty().withMessage('Picker name is required')
        .isLength({ min: 3 }).withMessage('Picker name must be at least 3 characters long'),

    check('picker_address')
        .notEmpty().withMessage('Picker address is required'),

    check('picker_phone')
        .notEmpty().withMessage('Picker phone is required')
        .isMobilePhone().withMessage('Picker phone must be a valid phone number'),

    check('picker_age')
        .notEmpty().withMessage('Picker age is required')
        .isInt({ min: 18 }).withMessage('Picker age must be at least 18'),

    check('picker_acc')
        .optional()
        .isLength({ min: 15, max: 15 }).withMessage('Picker account must be exactly 15 characters long')
];

const registerPicker = async (req, res) => 
{
    const errors = validationResult(req);
    if (!errors.isEmpty()) 
    {
        res.status(400).json({ type: 'error', message: errors.array() });
    }
    else
    {
        try {
            const picker = new Picker({
                // pickerId: req.body.id,
                pickerName: req.body.picker_name,
                pickerAge: req.body.picker_age,
                pickerAddress: req.body.picker_address,
                pickerPhone: req.body.picker_phone,
                pickerAccount: req.body.picker_acc
            });
    
            const saveRes = await picker.save();
            res.status(201).json({ message: 'Picker registered successfully', data: saveRes });
        } 
        catch (e) 
        {
            console.error(e);
            res.status(500).json({ message: "Server error, try again later" });
        }
    }
};

exports.registerPicker = registerPicker;
exports.validatePicker = validatePicker;
