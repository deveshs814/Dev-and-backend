import express from 'express'
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();


app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended:true,limit:"15kb"}))
app.use(express.static("public"))
app.use(cookieParser())


//routes importing
import userRouter from './routes/user.Routes.js'

//route declaration..previously we used to write app.get to declare routes but now we do use of middlewares
app.use("/api/v1/users",userRouter)


export {app};