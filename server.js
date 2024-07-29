import express from 'express'
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import userRouter from './Routes/user.js'
import productRouter from './Routes/product.js'
import cartRouter from './Routes/cart.js'
import addressRouter from './Routes/address.js'
import paymentRouter from './Routes/payment.js'
import cors from 'cors';

const app = express();

app.use(bodyParser.json())

app.use(cors({
    origin:true,
    methods :["GET","POST","PUT","DELETE"],
    credentials:true
}))

app.get('/',(req,res)=>res.json({message:'This is Home Route'}))

app.use('/api/user',userRouter)

app.use('/api/product',productRouter)

app.use('/api/cart',cartRouter)

app.use('/api/address',addressRouter)

app.use('/api/payment',paymentRouter)


mongoose.connect(
    "mongodb+srv://mishrasn924:mongo123@cluster0.o3tikvn.mongodb.net/" ,{
        dbName:"MERN_E_Commerce"
    }
).then(()=>console.log("MongoDB Connected Successfully...!")).catch((err)=>console.log(err));


const port = 1000 ;
app.listen(port,()=>{
    console.log(`Server is running on Port ${port}`) ;
})
