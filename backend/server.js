import express from 'express'
import { connectDB } from './config/db.js';

const app = express();
connectDB();

app.listen(5000, () => {
    console.log('Server started at http://localhost:5000');
})

app.get('/', (req, res) => {
    res.send('Server is ready')
})


