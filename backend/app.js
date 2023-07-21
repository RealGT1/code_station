//mongodb+srv://Logi8591:<password>@logi.fanmw0g.mongodb.net/?retryWrites=true&w=majority 
//lVSasYaI1EIhQmOL

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import userRouter from "./routes/user-routes";
import cors from "cors";
dotenv.config();
const app = express();


//middlewares
app.use(cors());
app.use(express.json());
app.use("/user", userRouter);

mongoose
  .connect(
    `mongodb+srv://Logi8591:${process.env.MONGODB_PASSWORD}@logi.fanmw0g.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() =>
    app.listen(5000, () =>
      console.log("Connected To Database And Server is running")
    )
  )
  .catch((e) => console.log(e));
