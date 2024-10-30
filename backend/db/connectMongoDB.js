import mongoose from "mongoose";

const connectMongoDB = async ()=>
{
    try{
        const con = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Mongo Connected:${con.connection.host}`);

    }catch(error){
        console.log(`Error connecting to MongoDB:${error.message}`);
        process.exit(1);
    }
}

export default connectMongoDB;