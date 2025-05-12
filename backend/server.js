import express from 'express'
import { connectDB } from './config/db.js';
import Product from './models/product.js';

const app = express();
connectDB();
app.use(express.json()); //allows accept json data in the req.body

app.listen(5000, () => {
    console.log('Server started at http://localhost:5000');
})

app.post('/api/products', async (req, res) => {
    const product = req.body; // user send this data 

    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({
            success: false, 
            message: "plese provide all fields"
        });
    }

    const newProduct = new Product(product);

    try {
        await newProduct.save();
        res.status(201).json({success: true , data: newProduct})
    } catch (error) {
        console.log(`Error in Create Product ${error.message}`)
        res.status(500).json({success: false , message: "Server Error"})
    }
})