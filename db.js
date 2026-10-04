import mongoose from "mongoose";

const connectDB =async()=>{
    try{
        await mongoose.connect(process.env.DB_URI);
        console.log('Mongodb connected successsfully');
    }catch(error){
        console.log('Mongodb connection failed:',error.message);
    }
};
export {connectDB};