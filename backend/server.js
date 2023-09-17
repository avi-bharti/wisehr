import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
dotenv.config();

import connectDB from './config/db.js';
import { notFound, errorHandler } from './middlewares/errorMiddleware.js';
import userRoutes from './routes/userRoutes.js';
import leaveRoutes from './routes/leaveRoutes.js';

const port = process.env.PORT;   
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

app.use('/api/users', userRoutes)
app.use('/api/leaves', leaveRoutes);

app.get('/', (req,res) => {
   res.json({msg:"api is running"});
})


app.use(notFound)
app.use(errorHandler)


connectDB();
app.listen(port, console.log(`listening on port ${port}`))