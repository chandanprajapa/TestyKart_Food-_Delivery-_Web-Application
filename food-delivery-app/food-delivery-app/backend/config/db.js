import mongoose from "mongoose"

export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://MCAProject:Test%401234@cluster0.zxegi.mongodb.net/chandan?retryWrites=true&w=majority').then(()=>console.log("DataBase Connect"));
}