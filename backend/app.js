import express from 'express'
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from "dotenv";
import {connectDB} from './config/db.js'
import assetRouter from './routes/assetRoutes.js';
import employeeRouter from './routes/employeeRoutes.js';
import roomRouter from './routes/roomRoutes.js';
import assetrequestRouter from './routes/assetRequestRoutes.js';
import assetmaintainRouter from './routes/maintainAssetRoutes.js';
import assetreplacementRouter from './routes/assetReplaceRoutes.js';
import  assignassetRouter from './routes/assetAssignRoutes.js';
import userRouter from './routes/userRoutes.js';
// import {sampleRouter} from './routes/sampleRoute.js';

dotenv.config({});
const PORT = process.env.PORT || 6060;

const app = express()
// DB call
connectDB();
app.use(cookieParser());
const corsOptions = {
    origin: 'http://localhost:5173',  // Define which origin is allowed
    credentials: true                // Allow credentials (like cookies or authorization headers)
}

app.use(cors(corsOptions));
app.use(express.json());

app.use('/assets', assetRouter);
app.use('/employee', employeeRouter);
app.use('/room',roomRouter);
app.use('/requestAssets',assetrequestRouter);
app.use('/assetMaintenance',assetmaintainRouter);
app.use('/assetreplacement',assetreplacementRouter);
app.use('/assetAssignement',assignassetRouter);
app.use('/User',userRouter);

app.get("/",(req,res) => {
    res.send("Server running")
})

app.listen(PORT, (req,res) => {
    console.log(`Server is running on ${PORT}`)
})


