const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
    name: { type: String, required: true },
    company: { type: String, required: true },
    model: { type: Number, required: true },
    year: { type: Number, required: true },
    color: { type: String, required: true },
    transmission: { type: String, required: true },
    mainImage: { type: String, required: true },
    image1: { type: String, required: true },
    image2: { type: String, required: true },
    image3: { type: String, required: true },
    image4: { type: String, required: true },
    image5: { type: String, required: true },
    capacity: { type: Number, required: true },
    fuelType: { type: String, required: true },
    bookedTimeSlotsFrom: { type: String },
    bookedTimeSlotsTo: { type: String},
    mileage: { type: String, required: true },
    tenure: { type: String, required: true },
    rentPerHour: { type: Number, required: true },
    offer: { type: String, required: true }
}, 
{ timestamps: true });


const Car = mongoose.model('Car', carSchema);
module.exports = Car;
