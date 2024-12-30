import express from 'express'
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from "dotenv";
import {connectDB} from './config/db.js'
import assetRouter from './routes/assetRoutes.js';
import employeerouter from './routes/employeeRoutes.js'
//import roomRouter from './routes/roomRoutes.js';
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
const origins = [ 'http://localhost:5173','http://localhost:5174'];
const corsOptions = {
    origin: origins, 
    credentials: true,
    methods: ['*'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}

app.use(cors(corsOptions));
app.use(express.json());

app.use('/api/v1/Asset', assetRouter);
app.use('/Employee', employeerouter);
//app.use('/room',roomRouter);
app.use('/requestAssets',assetrequestRouter);
app.use('/assetMaintenance',assetmaintainRouter);
app.use('/assetreplacement',assetreplacementRouter);
app.use('/assetAssignement',assignassetRouter);
app.use('/api/v1/User',userRouter);

app.get("/",(req,res) => {
    res.send("Server running")
})

app.listen(PORT, (req,res) => {
    console.log(`Server is running on ${PORT}`)
})


