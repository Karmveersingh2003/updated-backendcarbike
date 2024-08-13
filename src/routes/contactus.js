const express = require('express');
const router = express.Router();
const Contact = require('../models/contactus');
const Car = require('../models/carModel');

router.post('/addcontact', async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    // Perform validation checks
    if (!name || !email || !phone || !subject || !message) {
      return res.status(400).json({
        message: 'All fields are required',
        data: {},
        success: false,
        error: 'Validation failed'
      });
    }
    


    const newContact = new Contact({
      name,
      email,
      phone,
      subject,
      message
    });

    await newContact.save();
    console.log(newContact);

    return res.status(201).json({
      message: 'Successfully added contact',
      data: newContact,
      success: true,
      error: {}
    });
  } catch (error) {
    console.error('Error adding contact:', error);
    return res.status(400).json({
      message: 'Unable to add contact',
      data: {},
      success: false,
      error: error.message
    });
  }
});

router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json({
      message: 'Successfully fetched contacts',
      data: contacts,
      success: true,
      error: {}
    });
  } catch (error) {
    res.status(500).json({
      message: 'Unable to fetch contacts',
      data: {},
      success: false,
      error: error.message
    });
  }
});

module.exports = router;
