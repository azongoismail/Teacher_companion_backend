import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import route from './routes/route.js';
dotenv.config();


const app = express();
app.use(express.json());
app.use(cors())
app.use('/api', route);

const port = process.env.PORT || 3000;



mongoose.connect(process.env.MONGODB).then(()=>{
console.log("MONGOBD CONNECTED");

app.listen(port, ()=>{
    console.log(`server is running on port ${port}`)

});
})
