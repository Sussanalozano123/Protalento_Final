import mongoose from "mongoose";

export const connectionDB = async() =>{
    try{
        await mongoose.connect("mongodb+srv://sussanalozano123:1234@cluster0.0uptwfe.mongodb.net/?retryWrites=true&w=majority"); 
        console.log("DB is connected")
    } catch (error) {
        console.log(error);
    }
};
