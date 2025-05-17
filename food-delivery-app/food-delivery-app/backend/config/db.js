import mongoose from "mongoose"

export const connectDB = async ()=>{
    await mongoose.connect('mongo_uri').then(()=>console.log("DataBase Connect"));
}
