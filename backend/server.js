import express from 'express'
import dotenv from 'dotenv'
dotenv.config();
import connectDB from './config/db.js';
import productRoute from './routes/productRoute.js'

const port = process.env.PORT || 8000;

connectDB(); //connecting to mongodb

const app = express();

app.get('/', (req,res) => {
    res.send('Hello World!');
});

app.use('/api/products',productRoute);




app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})