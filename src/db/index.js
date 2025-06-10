import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();// read the .env file and make it available in process.env 


const dbconfig={
    url:process.env.MONGO_URL,
    // options:{
    //     useNewUrlParser: true,//these are the extra settings for the stable connections so they just 
    //     //  ensures that this one useNewUrlParser is used to ensure correct url parsing 
    //     useUnifiedTopology: true
    // }
}


const connectDB = async () =>{
   try {
     await mongoose.connect(dbconfig.url)
     console.log("Connect hogaya bhai mongodb");
     
   } catch (error) {
    console.error("Error connectinng to MongoDB:", error.message);
    process.exit(1);
    
   }


}

export {connectDB};

