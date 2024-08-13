const express = require('express');
const router = express.Router();
const Car = require('../models/carModel');

router.post('/addcar', async (req, res) => {
  try {
    const newCar = await Car.create(req.body);
    console.log(newCar);
    return res.status(201).json({
      message: 'successfully added car',
      data: newCar,
      success: true,
      error: {}
    });
  } catch (error) {
    console.error('Error adding car:', error); 
    return res.status(400).json({
      message: 'unable to add a car',
      data: {},
      success: false,
      error: error.message
    });
  }
});
router.get('/:car_id', async (req, res) => {
  try {
      let { car_id } = req.params;
      let cars = await Car.findOne({ _id: car_id });
      res.status(200).json({
          message: "success",
          cars
      })

  } catch (error) {
      res.status(400).json({
          success: false,
          message: error.message
      })
  }
});

router.get('/getcars', async (req, res) => {
    try {
      const cars = await Car.find();
      return res.status(200).json({
        message: 'successfully fetched cars',
        data: cars,
        success: true,
        error: {}
      });
    } catch (error) {
      console.error('Error fetching car:', error); 
      return res.status(400).json({
        message: 'unable to fetch cars',
        data: {},
        success: false,
        error: error.message
      });
    }
  });
router.get('/', async (req, res) => {
  try {
    const cars = await Car.find();
    res.json(cars);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


module.exports = router;
