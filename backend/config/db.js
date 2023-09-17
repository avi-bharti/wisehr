import mongoose from "mongoose";

const connectDB = async () => {
   try {
      const conn = await mongoose.connect(process.env.MONGO_URI);
      console.log(`connected to db on ${conn.connection.host}`);
   } catch (error) {
      console.log(error)
      process.exist(1)
   }
}

export default connectDB;