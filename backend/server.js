import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRouter.js';
import productRouter from './routes/productRoute.js';


const app = express();
const port = process.env.PORT || 4000;

connectDB();
connectCloudinary();

//middleware
app.use(cors());
app.use(express.json());

//api endpoint
app.use('/api/user' , userRouter);
app.use('/api/product', productRouter)

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});