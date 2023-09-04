import path from 'path'
import express, { application } from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
dotenv.config();
import connectDB from './config/db.js';
import productRoute from './routes/productRoute.js';
import userRoutes from './routes/userRoute.js';
import orderRoutes from './routes/orderRoute.js';
import { notFound,errorHandler } from './middleware/errorMiddleware.js';
import uploadRoute from './routes/uploadRoute.js'


const port = process.env.PORT || 8000;

connectDB(); //connecting to mongodb

const app = express();

// Body parser middleware(parsing body data)
app.use(express.json());
app.use(express.urlencoded({extended: true}))


//Cookie parser middleware
app.use(cookieParser());


app.get('/', (req,res) => {
    res.send('Api is running ...');
});

app.use('/api/products',productRoute);
app.use('/api/users',userRoutes);
app.use('/api/orders',orderRoutes);
app.use('/api/upload', uploadRoute)

app.get('/api/config/paypal', (req,res) => 
    res.send({clientId : process.env.PAYPAL_CLIENT_ID}
));


const __dirname = path.resolve(); // Set __dirname to current directory
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))




app.use(notFound);
app.use(errorHandler);


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})