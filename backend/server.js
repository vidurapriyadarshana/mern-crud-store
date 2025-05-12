import express from 'express'
import { connectDB } from './config/db.js';
import Product from './models/product.js';
import mongoose, { Types } from 'mongoose';
import productRoute from './routes/route.js'


const app = express();
connectDB();
app.use(express.json()); //allows accept json data in the req.body


app.use("/api/products" , productRoute)
const PORT = process.env.PORT || 5000;



app.listen(PORT, () => {
    console.log('Server started at http://localhost:' + PORT);
})
