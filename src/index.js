const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const carRoutes = require('./routes/carRoutes')
dotenv.config();
const payment = require('./routes/payment.js');
const Contact = require('./routes/contactus.js');
const PORT = process.env.PORT||4000;

app.use(cors());
app.use(express.json());
app.use(express.json({extended: true}));

app.use('/api/cars' , carRoutes)
app.use('/api/contact' , Contact)

app.get('/', (req, res) => {
    res.send('Razorpay Payment Gateway Using React And Node Js')
});
app.use('/api/payment', payment);

const connectToDB = async () => {
    try {
        mongoose.connect(process.env.MONGO_DB_URL);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Error connecting to MongoDB: " + error);
    }
}
const setupAndStartServer = async () => {
    app.listen(PORT, async () => {
        console.log(`Server listening at ${PORT}`)
        await connectToDB();
    });
}


setupAndStartServer();