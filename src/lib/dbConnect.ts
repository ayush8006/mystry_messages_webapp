import mongoose from "mongoose";

type ConnectionObject = {
    isConnected?:number
}

const connection:ConnectionObject={

}

async function dbConnect(): Promise<void> {
    if (connection.isConnected) {
      console.log('Already connected to MongoDB');//due to performance choking
      return;
    }

    try{
        const mongoURI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/mystry_messages'; // Replace with your MongoDB URI
        const db=await mongoose.connect(mongoURI,{})

        connection.isConnected=db.connections[0].readyState

        console.log("DB Connected Successfully");
    }catch(error){
        console.log("Database connection failed ",error);

        process.exit(1);
    }
}

export default dbConnect;